import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { locations, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-[#062f42] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-12 place-items-center overflow-hidden rounded-md bg-white">
              <Image src={site.logo} alt="" width={42} height={42} className="h-10 w-10 object-contain" />
            </span>
            <p className="text-lg font-black">{site.name}</p>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">{site.tagline}</p>
          <p className="mt-4 inline-flex rounded-md bg-[#f7b733] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#062f42]">
            {site.previewNotice}
          </p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-slate-400">Explore</p>
          <div className="mt-4 grid gap-2 text-sm">
            <Link href="/physicians" className="text-slate-200 hover:text-white">Physicians</Link>
            <Link href="/services" className="text-slate-200 hover:text-white">Services</Link>
            <Link href="/locations" className="text-slate-200 hover:text-white">Locations</Link>
            <Link href="/about" className="text-slate-200 hover:text-white">About</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-slate-400">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-200">
            <a href={`tel:${site.phone}`} className="inline-flex items-center gap-2 hover:text-white"><Phone size={16} /> {site.phone}</a>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-white"><Mail size={16} /> {site.email}</a>
            <span className="inline-flex items-center gap-2"><MapPin size={16} /> {locations[0]?.address}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
