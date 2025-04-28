import { useState, useEffect } from "react";
import axios from "axios";
import { Player } from "./type"

export function usePlayers() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const response = await axios.get<Player[]>("http://localhost:3001/players");
        setPlayers(response.data);
      } catch (error) {
        console.error("Erro ao buscar jogadores:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPlayers();
  }, []);

  return { players, isLoading };
}