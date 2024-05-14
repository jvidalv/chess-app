import { createFileRoute } from "@tanstack/react-router";

const RouteComponent = () => {
  return <div className="text-2xl">Hello</div>;
};

export const Route = createFileRoute("/")({
  component: RouteComponent,
});
