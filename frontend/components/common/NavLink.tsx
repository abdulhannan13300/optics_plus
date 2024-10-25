import Link from "next/link";
import cn from "classnames";

interface Props {
  isSelected?: boolean;
  isMobile?: boolean;
  isBanner?: boolean;
  href?: string;
  children: React.ReactNode;
  [rest: string]: any;
}

const NavLink = ({
  isSelected,
  isMobile,
  isBanner,
  href,
  children,
  ...rest
}: Props) => {
  const className = cn(rest.className, "rounded-md px-3 py-2 font-medium", {
    "bg-secondary": isSelected,
    "text-primary hover:bg-secondary ": !isSelected && !isBanner,
    "block text-base": isMobile,
    "text-sm": !isMobile,
    "text-primary": isBanner,
  });

  if (!href) {
    return (
      <span className={className} role="button" onClick={rest.onClick}>
        {children}
      </span>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
};
export default NavLink;
