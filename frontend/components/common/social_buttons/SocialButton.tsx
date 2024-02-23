import React from "react";
import cn from "classnames";

interface Props {
  provider: "google" | "facebook";
  children: React.ReactNode;
  [rest: string]: any;
}

export default function SocialButton({ provider, children, ...rest }: Props) {
  const className = cn(
    "flex-1 text-white rounded-md px-3 mt-3 py-2 font-medium",
    {
      "bg-red-400 hover:bg-red-300": provider === "google",
      "bg-blue-400 hover:bg-blue-300": provider === "facebook",
    }
  );

  return (
    <button className={className} {...rest}>
      <span className="flex justify-center items-center">{children}</span>
    </button>
  );
}
