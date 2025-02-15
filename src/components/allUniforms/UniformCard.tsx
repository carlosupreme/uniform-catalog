import { Link } from "react-router-dom";
import { Uniform } from "../../models/Uniform.ts";

export default function UniformCard({ uniform }: { uniform: Uniform }) {
    const { fotos, modelo, clave, disponibles, documentId } = uniform;
    const uniformLink = `/uniforme/${documentId}`;

    return (
        <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <Link to={uniformLink} className="block relative pb-[100%]">
                <img
                    src={fotos && fotos.length > 0 ? fotos[0].url : "/placeholder.png"}
                    alt={`Uniforme ${modelo}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </Link>

            <div className="p-4">
                <Link to={uniformLink} className="block font-bold text-lg mb-2 hover:text-blue-600 transition-colors duration-300">
                    {modelo}
                </Link>
                <p className="text-gray-600 text-sm mb-2">{clave}</p>
                <div className="flex items-center justify-between text-sm">
                    <p className="text-gray-700">
                        Disponible: <span className="font-semibold">{disponibles}</span>
                    </p>
                    <Link
                        to={uniformLink}
                        className=" text-black px-4 py-2 rounded hover:underline transition-colors duration-300"
                    >
                        Ver detalles
                    </Link>
                </div>
            </div>
        </div>
    );
}