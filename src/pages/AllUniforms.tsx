import { Layout } from "../components/Layout";
import CategorySelector from "../components/allUniforms/CategorySelector";
import UniformCard from "../components/allUniforms/UniformCard";
import { useGetUniforms } from "../hooks/useGetUniforms";
import FilterModal from "../components/ui/FilterModal";
import { useCallback, useMemo, useState } from "react";

export default function AllUniforms() {
    const { data, isPending } = useGetUniforms();
    const [currentLeague, setCurrentLeague] = useState<string>("todas");
    const [currentCategory, setCurrentCategory] = useState<string>("todas");

    const filteredUniforms = useMemo(() => {
        if (!data) return [];

        return data.filter(uniform => {
            const leagueMatch = currentLeague === "todas" || uniform.liga.nombre.toLowerCase() === currentLeague.toLowerCase();
            const categoryMatch = currentCategory === "todas" || uniform.categoria.toLowerCase().trim() === currentCategory.toLowerCase();
            return leagueMatch && categoryMatch;
        });
    }, [data, currentCategory, currentLeague]);

    const handleCategoryFilter = useCallback((category: string) => {
        setCurrentCategory(category);
    }, []);

    const handleLeagueFilter = useCallback((league: string) => {
        setCurrentLeague(league);
    }, []);

    return (
        <Layout loading={isPending}>
            <h1 className="bg-white top-0 left-0 z-10 font-bold text-2xl p-4 md:p-6 sticky shadow-md">
                Uniformes
            </h1>

            <div className="bg-gray-100 p-4">
                <CategorySelector onSelect={handleCategoryFilter} current={currentCategory} />
            </div>

            <div className="font-semibold p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white shadow-sm">
                <p className="text-gray-600 mb-4 sm:mb-0">
                    {filteredUniforms.length} {filteredUniforms.length === 1 ? 'resultado' : 'resultados'}
                </p>
                <FilterModal
                    onSelect={handleLeagueFilter}
                    current={currentLeague}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-auto gap-4 md:gap-6 p-4 md:p-6 bg-gray-50">
                {filteredUniforms.map((uniform) => (
                    <div key={uniform.documentId} className="min-w-[300px] w-full">
                        <UniformCard uniform={uniform} />
                    </div>
                ))}
            </div>

            {filteredUniforms.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                    No se encontraron uniformes con los filtros seleccionados.
                </div>
            )}
        </Layout>
    );
}