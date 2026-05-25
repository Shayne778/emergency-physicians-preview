import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="border-b border-slate-200 bg-[#f3f8fa]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-wide text-[#0b4f6c]">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-normal text-slate-950 sm:text-5xl">{title}</h1>
        <div className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{children}</div>
      </div>
    </section>
  );
}
