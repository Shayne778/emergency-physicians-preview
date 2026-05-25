import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary: "bg-[#0b4f6c] text-white shadow-sm shadow-sky-900/15 hover:bg-[#083c53]",
  secondary: "border border-slate-200 bg-white text-slate-950 hover:border-cyan-200 hover:bg-cyan-50",
  ghost: "text-slate-700 hover:bg-slate-100",
};

export function ButtonLink({ href, children, className, variant = "primary", ...props }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
