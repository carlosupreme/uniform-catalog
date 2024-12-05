import { useQuery } from "@tanstack/react-query";
import { Uniform } from "../models/Uniform.ts";

const API_URL = "http://127.0.0.1:1337/api"
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