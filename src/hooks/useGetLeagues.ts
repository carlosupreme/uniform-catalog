import { useQuery } from "@tanstack/react-query";
import {League} from "../models/League.ts";

const API_URL = "http://127.0.0.1:1337/api"
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