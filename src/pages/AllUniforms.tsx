import {Layout} from "../components/Layout.tsx";
import foto from "../assets/test.png"
import {Link} from "react-router-dom";
import {Heart} from "../components/icons/Heart.tsx";

function Categories() {

    return (
        <div className="flex font-bold gap-4 p-5 pb-2 items-center">
            <button className="hover:opacity-50 pb-2 border-b-2 border-b-black">Hombre</button>
            <button className="hover:opacity-50 pb-2">Mujer</button>
            <button className="hover:opacity-50 pb-2">Niño</button>
        </div>
    );
}

function FilterButton() {
    return (
        <button
            className="flex items-center gap-2 border-gray-400 border px-4 py-1 rounded-3xl hover:border-black"
        >Filtrar <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}
                      color={"#000000"} fill={"none"}>
            <path d="M3 7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M3 17H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M18 17L21 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M15 7L21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path
                d="M6 7C6 6.06812 6 5.60218 6.15224 5.23463C6.35523 4.74458 6.74458 4.35523 7.23463 4.15224C7.60218 4 8.06812 4 9 4C9.93188 4 10.3978 4 10.7654 4.15224C11.2554 4.35523 11.6448 4.74458 11.8478 5.23463C12 5.60218 12 6.06812 12 7C12 7.93188 12 8.39782 11.8478 8.76537C11.6448 9.25542 11.2554 9.64477 10.7654 9.84776C10.3978 10 9.93188 10 9 10C8.06812 10 7.60218 10 7.23463 9.84776C6.74458 9.64477 6.35523 9.25542 6.15224 8.76537C6 8.39782 6 7.93188 6 7Z"
                stroke="currentColor" strokeWidth="1.5"/>
            <path
                d="M12 17C12 16.0681 12 15.6022 12.1522 15.2346C12.3552 14.7446 12.7446 14.3552 13.2346 14.1522C13.6022 14 14.0681 14 15 14C15.9319 14 16.3978 14 16.7654 14.1522C17.2554 14.3552 17.6448 14.7446 17.8478 15.2346C18 15.6022 18 16.0681 18 17C18 17.9319 18 18.3978 17.8478 18.7654C17.6448 19.2554 17.2554 19.6448 16.7654 19.8478C16.3978 20 15.9319 20 15 20C14.0681 20 13.6022 20 13.2346 19.8478C12.7446 19.6448 12.3552 19.2554 12.1522 18.7654C12 18.3978 12 17.9319 12 17Z"
                stroke="currentColor" strokeWidth="1.5"/>
        </svg></button>
    )
}

export default function AllUniforms() {
    return (
        <Layout loading={false}>
            <h1 className="bg-white top-0 left-0 z-10 font-bold text-xl p-5 sticky">Uniformes</h1>

            <Categories/>
            <hr/>
            <div className="font-semibold p-5 flex items-center justify-between">
                <p className="text-gray-500">1600 resultados</p>
                <FilterButton/>
            </div>

            <div className="grid grid-cols-2 gap-x-2 w-full">
                <UniformCard/>
                <UniformCard/>
                <UniformCard/>
                <UniformCard/>
            </div>
        </Layout>
    )
}

function UniformCard() {
    const ultimasPiezas = Math.random() > 0.5;

    return <Link to="/uniforme/1"
        className="p-0 w-full flex flex-col flex-1 min-h-0 min-w-0 cursor-pointer">
        <img src={foto} alt="" className="h-52 object-cover"/>
        <div className="flex flex-col text-sm gap-1 p-3 bg-white">
            {ultimasPiezas && <h6 className="font-semibold text-orange-700">Ultimas piezas</h6>}
            <p className="font-bold">Liga libertadores</p>
            <p className="text-gray-500">Description del uniforme un poco detallada</p>
            <div className="flex items-center justify-between text-gray-500">
                <p>Disponible: <u>50</u></p>
                <div className="flex gap-1 items-center">
                    <AskForUniformButton/>
                    <Heart/>
                </div>
            </div>
        </div>
    </Link>
}

function AskForUniformButton() {
    return <button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"}
             fill={"none"}>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
            <path
                d="M10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 9.39815 13.8837 9.76913 13.6831 10.0808C13.0854 11.0097 12 11.8954 12 13V13.5"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M11.992 17H12.001" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>
    </button>
}