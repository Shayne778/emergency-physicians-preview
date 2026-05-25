import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-black uppercase tracking-wide text-[#0b4f6c]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">{title}</h2>
      {children ? <div className="mt-4 text-base leading-7 text-slate-600">{children}</div> : null}
    </div>
  );
}
