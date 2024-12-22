import { League } from "./League.ts";
import {UniformImage} from "./UniformImage.ts";

export interface Uniform {
    documentId: string,
    modelo: string,
    clave: string,
    disponibles: number,
    fotos: UniformImage[],
    liga: League,
    categoria: string
}

