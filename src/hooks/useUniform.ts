import { useQuery } from "@tanstack/react-query";
import { Uniform } from "../models/Uniform.ts";

const API_URL = import.meta.env.BASE_URL +  "/api"
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