import { Link } from "react-router-dom";
import { useGetUniformsByLeague } from "../../hooks/useGetUniformsByLeague";
import { Uniform } from "../../models/Uniform";

export default function YouMayAlsoLike({ leagueId, currentUniformId }: { leagueId: string, currentUniformId: string }) {
    const { data, isLoading } = useGetUniformsByLeague(leagueId);

    return (
        <>
            {(data?.uniformes.length && data?.uniformes.length > 1) && (
                <div className="px-4 my-10 flex flex-col gap-5">
                    <h4 className="font-semibold text-xl">TAMBIEN TE PODRÍA GUSTAR </h4>
                    {isLoading ? <SkeletonLoader /> : <UniformList
                        except={currentUniformId}
                        uniforms={data?.uniformes} />}
                </div>
            )}
        </>
    )
}


function UniformList({ uniforms, except }: { uniforms?: Uniform[], except: string }) {
    const IMAGES_URL = import.meta.env.BASE_URL;

    return <div className="flex gap-3 overflow-x-auto">
        {uniforms?.filter(
            (uniform: Uniform) => uniform.documentId !== except
        ).map((uniform: Uniform) => (
            <Link
                to={`/uniforme/${uniform.documentId}`}
                key={uniform.documentId}
                className="mb-4 w-64 flex flex-col gap-2 text-sm min-w-64 overflow-hidden">
                <img src={IMAGES_URL + uniform.fotos[0].url} alt="" className="rounded-lg w-full aspect-square object-cover" />
                <div>
                    <h4 className="font-bold">{uniform.modelo}</h4>
                    <h5 className="opacity-80">Disponibles {uniform.disponibles}</h5>
                </div>
            </Link>
        ))}
    </div>
}

function SkeletonLoader() {
    return (
        <div className="flex gap-3 overflow-x-auto">
            <div className="mb-4w-64 flex flex-col gap-2 text-sm min-w-64">
                <div className="animate-pulse bg-gray-300 rounded-lg w-full h-40"></div>
                <div>
                    <div className="animate-pulse mb-2 bg-gray-300 rounded-lg w-1/2 h-4"></div>
                    <div className="animate-pulse bg-gray-300 rounded-lg w-1/3 h-4"></div>
                </div>
            </div>
            <div className="mb-4  w-64 flex flex-col gap-2 text-sm min-w-64">
                <div className="animate-pulse bg-gray-300 rounded-lg w-full h-40"></div>
                <div>
                    <div className="animate-pulse mb-2 bg-gray-300 rounded-lg w-1/2 h-4"></div>
                    <div className="animate-pulse bg-gray-300 rounded-lg w-1/3 h-4"></div>
                </div>
            </div>
        </div>
    )
}