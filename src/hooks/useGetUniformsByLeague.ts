import { useQuery } from "@tanstack/react-query";
import { League } from "../models/League.ts";

const API_URL =  import.meta.env.VITE_API_URL +  "/api";
type Response = { data: League }

export const useGetUniformsByLeague = (id: string) => {

    const fetchLeague = async () => {
        const response = await fetch(`${API_URL}/ligas/${id}?populate[uniformes][populate][0]=fotos`);
        const league: Response = await response.json();

        return league.data;
    }

    return useQuery<League, Error>({
        queryKey: ['liga', id],
        queryFn: fetchLeague
    });
}