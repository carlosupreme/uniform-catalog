import "react-multi-carousel/lib/styles.css";
import { Navigate, useParams } from "react-router-dom";
import { Layout } from "../components/Layout.tsx";
import ImagesSlide from "../components/uniform/ImagesSlide.tsx";
import SelectSize from "../components/uniform/SelectSize.tsx";
import YouMayAlsoLike from "../components/uniform/YouMakeAlsoLike.tsx";
import { useUniform } from "../hooks/useUniform.ts";
import { UniformImage } from "../models/UniformImage.ts";
import { useEffect } from "react";
import { Uniform as UniformData } from "../models/Uniform.ts";

export default function Uniform() {
  const { id } = useParams();
  const { data: uniform, isLoading, isError } = useUniform(id!);

  useEffect(() => {
    console.log(uniform);
  }, [uniform]);

  if (isLoading) {
    return (
      <Layout loading={true}>
        Loading ...
      </Layout>
    );
  }

  if (isError) {
    return <Navigate to="/404" replace={true} />;
  }

  return (
    <Layout>
      {/* Top section with product title and info */}
      <div className="p-5">
        <h1 className="text-lg font-bold">{uniform?.modelo}</h1>
        <h2 className="my-1 text-sm font-semibold text-gray-500">
          {uniform?.clave}
          <LeagueLabel league={uniform?.liga.nombre} />
        </h2>
        <h3 className="font-bold text-sm">
          Disponibles: {uniform?.disponibles}
        </h3>
      </div>

      {/* Main content: Images and purchase details */}
      {/* 
          Mobile: Stacked in a single column.
          Desktop (md and up): Two columns with images on the left and details on the right.
      */}
      <div className="flex flex-col md:flex-row gap-8 p-5">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          {uniform?.fotos?.length === 1 ? (
            <img
              src={uniform?.fotos[0].url}
              key={uniform?.fotos[0].id}
              alt={uniform?.fotos[0].id}
              className="w-full h-full object-cover"
            />
          ) : (
            <ImagesSlide>
              {uniform?.fotos.map((image: UniformImage) => (
                <img
                  src={image.url}
                  key={image.id}
                  alt={image.id}
                  className="w-full h-full object-cover"
                />
              ))}
            </ImagesSlide>
          )}
        </div>

        {/* Purchase and details Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <SelectSize />

          <div className="flex flex-col gap-2 font-bold">
            <BuyUniformButton uniform={uniform!} />
            {/* Uncomment and implement when needed:
            <AddToFavoritesButton /> */}
          </div>
        </div>
      </div>

      {/* Related products section */}
      <YouMayAlsoLike
        currentUniformId={id!}
        leagueId={uniform!.liga.documentId}
      />
    </Layout>
  );
}

function BuyUniformButton({ uniform }: { uniform: UniformData }) {
  return (
    <a
      href={`https://wa.me/529513222076?text=Hola, me interesa comprar el uniforme modelo: ${uniform.modelo}, clave: ${uniform.clave} que vi en su catálogo`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full rounded-full text-center bg-slate-900 text-white py-3.5 px-4"
    >
      Comprar producto
    </a>
  );
}

// Uncomment this function if you wish to add favorites functionality in the future
// function AddToFavoritesButton() {
//   return (
//     <button
//       className="flex items-center gap-2 justify-center border-2 py-3.5 px-4 rounded-full"
//     >
//       Favoritos <Heart />
//     </button>
//   );
// }

function LeagueLabel({ league }: { league?: string }) {
  return (
    <span className="ml-2 text-xs uppercase bg-indigo-500 py-1 px-2 rounded-full text-white">
      {league}
    </span>
  );
}
