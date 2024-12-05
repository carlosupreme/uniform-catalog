import { useQuery } from "@tanstack/react-query";
import { Uniform } from "../models/Uniform.ts";

const API_URL = "http://127.0.0.1:1337/api"
type Response = { data: Uniform }

export const useUniform = (id: string) => {

    const fetchUniform = async () => {
        const response = await fetch(`${API_URL}/uniformes/${id}?populate=*`);
        const uniform: Response = await response.json();
        return uniform.data;
    }

    return useQuery<Uniform, Error>({
        queryKey: ['uniforme' + id],
        queryFn: fetchUniform
    });
}