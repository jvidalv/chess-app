import {
  createRootRoute,
  Link,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";

const RouteComponent = () => {
  const { username } = Route.useParams<{ username: string }>();

  return (
    <>
      <header className="border-b bg-black">
        <nav className="max-w-4xl mx-auto py-4 text-xl flex gap-2 items-center">
          <Link
            to="/"
            className="[&.active]:text-white transition text-gray-400 hover:underline"
          >
            Wiki Chess
          </Link>
          {!!username && (
            <>
              <span className="text-white">/</span>{" "}
              <span className="text-white">{username}</span>
            </>
          )}
        </nav>
      </header>
      <main className="max-w-4xl mx-auto py-4 min-h-screen">
        <ScrollRestoration />
        <Outlet />
      </main>
      <footer className="border-t border-black pt-4 pb-3">
        <div className="max-w-4xl mx-auto text-center">Josep Vidal @ 2024</div>
      </footer>
    </>
  );
};

export const Route = createRootRoute({
  component: RouteComponent,
});
