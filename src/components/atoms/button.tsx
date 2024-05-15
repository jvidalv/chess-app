import { ButtonHTMLAttributes } from "react";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="bg-black text-white px-3 py-2 border border-transparent hover:bg-white hover:text-black transition hover:border-black"
      {...props}
    />
  );
};
