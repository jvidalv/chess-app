import { createFileRoute } from "@tanstack/react-router";

const RouteComponent = () => {
  const { username } = Route.useParams();
  return <div>Hello {username}!</div>;
};

export const Route = createFileRoute("/grandmaster/$username")({
  component: RouteComponent,
});
