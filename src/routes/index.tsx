import { createFileRoute, Link } from "@tanstack/react-router";
import { useAllGrandmastersApi } from "../domains/grandmaster.api.ts";

const RouteComponent = () => {
  const { data } = useAllGrandmastersApi();

  return (
    <div className="flex gap-2 flex-wrap">
      {!data && "Loading..."}
      {data?.map((username) => (
        <Link
          key={username}
          to={`/grandmaster/$username`}
          params={{ username }}
          className="border border-black px-2 py-1 hover:bg-black hover:text-white transition"
        >
          {username}
        </Link>
      ))}
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: RouteComponent,
});
