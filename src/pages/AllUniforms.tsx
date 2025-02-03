import { Layout } from "../components/Layout.tsx";
import CategorySelector from "../components/allUniforms/CategorySelector.tsx";
import UniformCard from "../components/allUniforms/UniformCard.tsx";
import { useGetUniforms } from "../hooks/useGetUniforms.ts";
import { Uniform } from "../models/Uniform.ts";
import FilterModal from "../components/ui/FilterModal.tsx";
import { useEffect, useState } from "react";

export default function AllUniforms() {
  const { data, isPending } = useGetUniforms();
  const [uniformsByCategory, setUniformsByCategory] = useState<Uniform[]>([]);
  const [uniforms, setUniforms] = useState<Uniform[]>([]);

  // Filter uniforms by category and update both states
  const filterByCategory = (category: string) => {
    const isTodosCategory = category.length > 0;
    if (isTodosCategory) {
      const filteredByCategory = data?.filter(
        (uniform: Uniform) =>
          uniform.categoria.toLowerCase() === category.toLowerCase()
      );
      setUniforms(filteredByCategory ?? []);
      setUniformsByCategory(filteredByCategory ?? []);
    } else {
      setUniforms(data ?? []);
      setUniformsByCategory(data ?? []);
    }
  };

  // Further filter the uniforms by league
  const filterByLeague = (league: string) => {
    const filteredByLeague = uniformsByCategory?.filter(
      (uniform: Uniform) =>
        uniform.liga?.nombre?.toLowerCase() === league.toLowerCase()
    );
    setUniforms(filteredByLeague ?? []);
  };

  // Update uniforms when data changes
  useEffect(() => {
    if (data) {
      setUniforms(data);
      setUniformsByCategory(data);
    }
  }, [data]);

  return (
    <Layout loading={isPending}>
      {/* Sticky header for page title */}
      <h1 className="bg-white top-0 left-0 z-10 font-bold text-xl p-5 sticky">
        Uniformes
      </h1>

      {/* Category selector component */}
      <CategorySelector onSelect={filterByCategory} />
      <hr />

      {/* Filter section: Responsive flex layout */}
      <div className="font-semibold p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <p className="text-gray-500">{uniforms?.length} resultados</p>
        <FilterModal onSelect={filterByLeague} />
      </div>

      {/* Responsive grid for uniform cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-5">
        {uniforms?.map((uniform: Uniform) => (
          <UniformCard key={uniform.documentId} uniform={uniform} />
        ))}
      </div>
    </Layout>
  );
}
