import { useQuery } from "@tanstack/react-query";
import {League} from "../models/League.ts";

const API_URL =  import.meta.env.BASE_URL +  "/api"
type Response = { data: League[] }

export const useGetLeagues = () => {
    const fetchLeagues = async () => {
        const response = await fetch(`${API_URL}/ligas`);
        const leagues: Response = await response.json();
        return leagues.data;
    }
    return useQuery<League[], Error>({
        queryKey: ['ligas'],
        queryFn: fetchLeagues
    });
}