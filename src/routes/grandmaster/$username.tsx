import { createFileRoute } from "@tanstack/react-router";
import { useOneGrandmastersApi } from "../../domains/grandmaster.api.ts";

const RouteComponent = () => {
  const { username } = Route.useParams();
  const { data, isFetching, isError } = useOneGrandmastersApi(username);

  if (isError || (data && !data.username)) {
    return (
      <div className="border border-red-500 p-4 -mx-4 text-red-500 text-lg min-h-[228px]">
        Error!
      </div>
    );
  }

  if (!data || isFetching) {
    return (
      <div className="border border-black p-4 -mx-4 bg-gray-100 animate-pulse min-h-[228px]">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex justify-between border border-black p-4 -mx-4 min-h-[228px]">
      <div className="grid gap-1">
        <div>
          <label className="opacity-70">Username</label>
          <p className="font-bold text-lg">{data.username}</p>
        </div>
        <div>
          <label className="opacity-70">Followers</label>
          <p className="font-bold text-lg">{data.followers}</p>
        </div>
      </div>
      <div>
        <img src={data.avatar} alt={`Picture of ${username}`} />
      </div>
    </div>
  );
};

export const Route = createFileRoute("/grandmaster/$username")({
  component: RouteComponent,
});
