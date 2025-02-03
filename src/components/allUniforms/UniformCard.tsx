import { Link } from "react-router-dom";
// import AskForUniformButton fxxrom "./AskForUniformButton.tsx";
// import {Heart} from "../icons/Heart.tsx";
import { Uniform } from "../../models/Uniform.ts";

const IMAGES_URL = import.meta.env.VITE_API_URL

export default function UniformCard({ uniform }: { uniform: Uniform }) {
    const { fotos, modelo, clave, disponibles, documentId } = uniform;
    const uniformLink = `/uniforme/${documentId}`

    return <div
        className="p-0 w-full flex flex-col flex-1 min-h-0 min-w-0 ">
        <Link to={uniformLink}>
            <img src={fotos && fotos.length > 0 ? IMAGES_URL + fotos[0].url : "/placeholder.png"} alt="" className="h-52 w-full object-top object-cover cursor-pointer" />
        </Link>

        <div className="flex flex-col text-sm gap-1 p-3 bg-white">
            <Link to={uniformLink} className="font-bold">{modelo}</Link>
            <p className="text-gray-500"> {clave}</p>
            <div className="flex items-center justify-between text-gray-500">
                <p>Disponible: <u>{disponibles}</u></p>
                {/* <div className="flex gap-1 items-center">
                    <AskForUniformButton/>
                    <Heart/> 
                </div> */}
            </div>
        </div>
    </div>
}