import { useQuery } from "@tanstack/react-query";
import { Uniform } from "../models/Uniform.ts";

const API_URL = import.meta.env.BASE_URL +  "/api"
type Response = { data: Uniform[] }

export const useGetUniforms = () => {

    const fetchUniforms = async () => {
        const response = await fetch(`${API_URL}/uniformes?populate=*`);
        const uniforms: Response = await response.json();
        return uniforms.data;
    }

    return useQuery<Uniform[], Error>({
        queryKey: ['uniformes'],
        queryFn: fetchUniforms
    });
}