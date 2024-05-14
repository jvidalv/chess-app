import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <header className="border-b bg-black">
        <nav className="max-w-4xl mx-auto py-4">
          <Link
            to="/"
            className="[&.active]:font-bold text-lg text-white hover:underline"
          >
            Wiki Chess
          </Link>
        </nav>
      </header>
      <main className="max-w-4xl mx-auto py-4">
        <Outlet />
      </main>
    </>
  ),
});
