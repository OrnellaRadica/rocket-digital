import React from "react";
import classnames from "classnames";
import Link from "next/link";

export interface ButtonProps {
  onClick?: () => void;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  children: string;
  variant?: "primary" | "secondary" | "gray";
  type?: "button" | "submit";
  className?: string;
  ariaLabel: string;
  icon?: JSX.Element;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  type = "button",
  onClick,
  href,
  className,
  ariaLabel,
  target,
  icon,
}) => {
  const classesButton = classnames({
    "text-[16px] leading-[18px] font-semibold items-center rounded-full px-8 py-4 capitalize hover:-translate-y-0.5 ease-in-out transition-all hover:shadow-lg	":
      true,
    "text-white bg-primary border border-primary active:bg-primary/40 active:text-primary":
      variant === "primary",
    "text-primary bg-transparent border border-primary active:bg-primary/40":
      variant === "secondary",
    "text-white bg-secondary border border-secondary active:bg-gray-400 active:text-secondary":
      variant === "gray",
    "flex gap-4 justify-center items-center": icon !== null,
    [`${className}`]: className ? true : false,
  });

  if (href) {
    return (
      <Link href={href} className={classesButton} target={target}>
        {children} {icon ? icon : null}
      </Link>
    );
  }
  return (
    <button
      aria-label={ariaLabel || "action button"}
      onClick={onClick}
      type={type}
      className={classesButton}
    >
      {children}
      {icon ? icon : null}
    </button>
  );
};

export default Button;
