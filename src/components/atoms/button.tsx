import { PropsWithChildren } from "react";

export const Button = ({ children }: PropsWithChildren) => {
  return (
    <button className="bg-black text-white px-3 py-2 border border-transparent hover:bg-white hover:text-black transition hover:border-black">
      {children}
    </button>
  );
};
