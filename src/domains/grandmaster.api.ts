import { useQuery } from "@tanstack/react-query";

export const useAllGrandmastersApi = () => {
  return useQuery({
    queryKey: ["grandmasters"],
    queryFn: (): Promise<string[]> =>
      fetch("https://api.chess.com/pub/titled/GM")
        .then((r) => r.json())
        .then((d) => d?.players),
  });
};

export const useOneGrandmastersApi = (username: string) => {
  return useQuery({
    queryKey: ["grandmaster", username],
    queryFn: (): Promise<{
      avatar: string;
      player_id: number;
      url: string;
      name: string;
      username: string;
      followers: number;
      country: string;
      last_online: number;
      joined: number;
      status: string;
      is_streamer: boolean;
      verified: boolean;
      league: string;
      streaming_platforms: string[];
    }> =>
      fetch(`https://api.chess.com/pub/player/${username}`).then((r) =>
        r.json(),
      ),
  });
};
