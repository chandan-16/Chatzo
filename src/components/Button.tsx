import React from "react";
import Spinner from "./Spinner";

type ButtonProps = {
  text?: string;
  className?: string;
  secondary?: boolean;
  onClick?: () => void;
  loading?: boolean;
};

export default function Button({
  className,
  secondary,
  onClick,
  text = "Button",
  loading = false,
}: ButtonProps) {
  return (
    <button
      className={`py-2 px-9 items-center flex justify-center gap-3 cursor-pointer rounded-lg text-white border-2 hover:bg-my-pink transition-all hover:drop-shadow-lg ${secondary ? "bg-my-pink" : "bg-my-blue"} ${className} ${loading && "cursor-wait"}`}
      onClick={onClick}
      disabled={loading}
    >
      {loading && <Spinner />}

      {text}
    </button>
  );
}
