import { createFileRoute } from "@tanstack/react-router";
import { useOneGrandmastersApi } from "../../domains/grandmaster.api.ts";
import { format } from "date-fns/format";
import { fromUnixTime } from "date-fns/fromUnixTime";
import { hoursSinceEpochTime } from "../../utils/time.ts";
import { useEffect, useRef } from "react";
import { Button } from "../../components/atoms/button.tsx";

const RouteComponent = () => {
  const ref = useRef<HTMLSpanElement>(null);

  const { username } = Route.useParams();
  const { data, isRefetching, isError } = useOneGrandmastersApi(username);

  useEffect(() => {
    if (data?.last_online && ref.current) {
      const interval = setInterval(() => {
        if (ref?.current?.innerHTML) {
          ref.current.innerHTML = hoursSinceEpochTime(data.last_online);
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [data?.last_online, isRefetching]);

  if (isError) {
    return (
      <div className="border border-red-500 p-4 -mx-4 text-red-500 text-lg min-h-[228px]">
        Error! Not found :(
      </div>
    );
  }

  if (!data) {
    return (
      <div className="border border-black p-4 -mx-4 bg-gray-100 animate-pulse min-h-[228px]">
        Loading...
      </div>
    );
  }

  const countryEndpointSplit = data?.country?.split("/");
  const country = countryEndpointSplit?.[countryEndpointSplit.length - 1];

  return (
    <div className="flex justify-between border border-black p-4 -mx-4 min-h-[228px]">
      <div className="grid gap-1">
        <div>
          <label className="opacity-70">Username</label>
          <p className="font-bold text-lg">{data.username}</p>
        </div>
        <div>
          <label className="opacity-70">League</label>
          <p className="font-bold text-lg">{data.league}</p>
        </div>
        <div>
          <label className="opacity-70">Followers</label>
          <p className="font-bold text-lg">{data.followers}</p>
        </div>
        <div>
          <label className="opacity-70">Status</label>
          <p className="font-bold text-lg">{data.status}</p>
        </div>
        <div>
          <label className="opacity-70">Country</label>
          <p className="font-bold text-lg">{country ?? "--"}</p>
        </div>
        <div>
          <label className="opacity-70">Joined</label>
          <p className="font-bold text-lg">
            {format(fromUnixTime(data.joined), "dd.LL.y")}
          </p>
        </div>
        <div>
          <label className="opacity-70">Last online</label>
          <p className="font-bold text-lg text">
            {format(fromUnixTime(data.last_online), "dd.LL.y")} /{" "}
            <span ref={ref} className="text-gray-500">
              {hoursSinceEpochTime(data.last_online)}
            </span>
          </p>
        </div>
        <a href={data.url} target="_blank" rel="noreferrer" className="mt-4">
          <Button>View in chess.com</Button>
        </a>
      </div>
      {!!data.avatar && (
        <div>
          <img src={data.avatar} alt={`Picture of ${username}`} />
        </div>
      )}
    </div>
  );
};

export const Route = createFileRoute("/grandmaster/$username")({
  component: RouteComponent,
});
