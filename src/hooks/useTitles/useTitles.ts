import { useState, useEffect } from "react";
import axios from "axios";
import { Title } from "./type"

export function useTitles() {
  const [titles, setTitles] = useState<Title[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const response = await axios.get<Title[]>("http://localhost:3001/titles");
        setTitles(response.data);
      } catch (error) {
        console.error("Erro ao buscar titulos:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPlayers();
  }, []);

  return { titles, isLoading };
}