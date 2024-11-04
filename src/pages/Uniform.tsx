import {Layout} from "../components/Layout.tsx";
import {Heart} from "../components/icons/Heart.tsx";
import "react-multi-carousel/lib/styles.css";
import ImagesSlide from "../components/uniform/ImagesSlide.tsx";
import test from "../assets/test.png";
import YouMayAlsoLike from "../components/YouMakeAlsoLike.tsx";
import SelectSize from "../components/uniform/SelectSize.tsx";

export default function Uniform() {
    return (
        <Layout loading={false}>
            <div className="p-5">
                <h1 className="text-lg font-bold">Uniforme </h1>
                <h2 className="font-semibold text-gray-500 mb-2">Description del uniforme mas detallada</h2>
                <h3 className="font-bold text-sm">Dsiponibles: 50</h3>
            </div>

            <div className="w-full flex flex-col gap-4">
                <ImagesSlide>
                    <img src={test} alt="" className="w-full object-cover min-w-full"/>
                    <img src={test} alt="" className="w-full object-cover min-w-full"/>
                    <img src={test} alt="" className="w-full object-cover min-w-full"/>
                    <img src={test} alt="" className="w-full object-cover min-w-full"/>
                </ImagesSlide>
                <SelectSize/>

                <div className="px-4 flex flex-col gap-2 font-bold">
                    <button
                        className="w-full rounded-full bg-slate-900 text-white py-3.5 px-4">
                        Comprar producto
                    </button>
                    <AddToFavoritesButton/>
                </div>
            </div>

            <YouMayAlsoLike/>
        </Layout>

    )
}

function AddToFavoritesButton() {
    return <button
        className="flex items-center gap-2 justify-center border-2 py-3.5 px-4 rounded-full">
        Favoritos <Heart/>
    </button>;
}
