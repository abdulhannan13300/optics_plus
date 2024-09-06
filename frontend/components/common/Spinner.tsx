import React from "react";
import cn from "classnames";
import { ImSpinner10 } from "react-icons/im";

interface Props {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
}

const Spinner = ({ sm, md, lg }: Props) => {
  const className = cn(
    "flex justify-center align-center w-full animate-spin text-white-300 fill-white-300 mr-2",
    {
      "w-4 h-4": sm,
      "w-6 h-6": md,
      "w-8 h-8": lg,
    }
  );

  return (
    <div role="status">
      <ImSpinner10 className={className} />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
