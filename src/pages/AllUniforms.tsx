import { Layout } from "../components/Layout.tsx";
import CategorySelector from "../components/allUniforms/CategorySelector.tsx";
import UniformCard from "../components/allUniforms/UniformCard.tsx";
import BasicModal from "../components/ui/BasicModal.tsx";
import { useGetUniforms } from "../hooks/useGetUniforms.ts";
import { Uniform } from "../models/Uniform.ts";

export default function AllUniforms() {

    const {data, isPending} = useGetUniforms();

    return (
        <Layout loading={isPending}>
            <h1 className="bg-white top-0 left-0 z-10 font-bold text-xl p-5 sticky">Uniformes</h1>
            <CategorySelector/>
            <hr/>
            <div className="font-semibold p-5 flex items-center justify-between">
                <p className="text-gray-500">{data?.length} resultados</p>
                <BasicModal/>
            </div>
            <div className="grid grid-cols-2 gap-x-2 w-full">
                {data?.map((uniform: Uniform) => (<UniformCard key={uniform.documentId} uniform={uniform}/>))}
            </div>
        </Layout>
    )
}

