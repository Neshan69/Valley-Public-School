import { Link } from "react-router-dom";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  to?: string;
  children: ReactNode;
};

const buttonBase = "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
const buttonVariants = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  secondary: "bg-white/10 text-white hover:bg-white/20",
  ghost: "text-brand-700 hover:bg-brand-50",
};

export function Button({ variant = "primary", to, children, className = "", ...rest }: ButtonProps) {
  const classes = `${buttonBase} ${buttonVariants[variant]} ${className}`;
  return to ? <Link to={to} className={classes}>{children}</Link> : <button className={classes} {...rest}>{children}</button>;
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-lg border border-brand-100 bg-white p-6 shadow-sm ${className}`}>{children}</div>;
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}
