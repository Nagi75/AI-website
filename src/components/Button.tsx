import React from "react";

interface ButtonProps {
  className?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  px?: string;
  variant?: "gradient" | "white";
}

const Button = ({
  className = "",
  href,
  onClick,
  children,
  px = "px-6",
  variant = "gradient",
}: ButtonProps) => {
  const baseClasses = `
    inline-flex items-center justify-center h-11 ${px}
    rounded-full text-xs font-bold uppercase font-code
    transition duration-300 ease-in-out
    ${className}
  `;

  const variantClasses =
    variant === "white"
      ? "bg-white text-black hover:bg-gray-100 border border-gray-300"
      : "text-white bg-gradient-to-r from-[#10F2FF] via-[#B139FE] to-[#FFDB3D] hover:opacity-90";

  const fullClassName = `${baseClasses} ${variantClasses}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={fullClassName}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={fullClassName}>
      {children}
    </button>
  );
};

export default Button;
