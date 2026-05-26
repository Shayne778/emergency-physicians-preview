"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/physicians", label: "Physicians" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/services#careers", label: "Careers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="bg-[#07384c] text-white">
        <div className="mx-auto flex min-h-12 max-w-7xl flex-col justify-center gap-2 px-4 py-2 text-sm font-bold sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-base lg:px-8">
          <span className="leading-5">Independent emergency physicians serving Cape Coral since 1985</span>
          <a href={`tel:${site.phone}`} className="inline-flex w-fit shrink-0 items-center rounded-md bg-[#f7b733] px-4 py-1.5 text-sm font-black text-[#07384c]">
            Call {site.phone}
          </a>
        </div>
      </div>
      <div className="mx-auto flex min-h-24 max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4" onClick={() => setOpen(false)}>
          <span className="grid h-14 w-20 shrink-0 place-items-center overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-slate-200 sm:h-16 sm:w-24">
            <Image src={site.logo} alt="" width={86} height={56} className="h-12 w-16 object-contain sm:h-14 sm:w-20" />
          </span>
          <span className="min-w-0">
            <span className="block max-w-[13rem] text-lg font-black leading-5 tracking-wide text-slate-950 sm:max-w-none sm:text-2xl sm:leading-7">
              Cape Coral Emergency Physicians
            </span>
            <span className="mt-1 block text-xs font-semibold leading-4 text-slate-500 sm:text-sm">Independent emergency medicine group</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-base font-bold text-slate-700 hover:bg-cyan-50 hover:text-[#0b4f6c]">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="grid size-10 shrink-0 place-items-center rounded-md border border-slate-200 text-slate-800 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={cn("border-t border-slate-200 bg-white md:hidden", open ? "block" : "hidden")}>
        <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-4" aria-label="Mobile navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-3 text-base font-semibold text-slate-800 hover:bg-slate-100"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
