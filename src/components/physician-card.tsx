import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Physician } from "@/lib/content";
import { initials } from "@/lib/utils";

export function PhysicianCard({ physician }: { physician: Physician }) {
  return (
    <Link
      href={`/physicians/${physician.slug}`}
      className="group grid min-h-full overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] bg-slate-100">
        <Image
          src={physician.image}
          alt={`${physician.name}, ${physician.credentials}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute left-4 top-4 rounded-md bg-white/90 px-2.5 py-1 text-xs font-bold text-[#0b4f6c] shadow-sm">
          {initials(physician.name)}
        </div>
      </div>
      <div className="grid gap-4 p-5">
        <div>
          <h3 className="text-lg font-bold text-slate-950">{physician.name}</h3>
          <p className="mt-1 text-sm font-semibold text-[#0b4f6c]">{physician.credentials}</p>
          <p className="mt-1 text-sm text-slate-600">{physician.role}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {physician.specialties.slice(0, 2).map((specialty) => (
            <span key={specialty} className="rounded-md bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-[#0b4f6c]">
              {specialty}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-bold text-[#0b4f6c]">
          View profile <ArrowRight size={16} className="transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
