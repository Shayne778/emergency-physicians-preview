import type { Metadata } from "next";
import { Clock3, ExternalLink, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { locations } from "@/lib/content";

export const metadata: Metadata = {
  title: "Locations",
  description: "Emergency department locations and contact information.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero eyebrow="Locations" title="Emergency access details without the clutter.">
        <p>Cape Coral Emergency Physicians serves patients at Cape Coral Hospital Emergency Department.</p>
      </PageHero>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          {locations.map((location) => (
            <article key={location.name} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-black text-slate-950">{location.name}</h2>
              <div className="mt-6 grid gap-4 text-sm text-slate-700">
                <p className="flex gap-3"><MapPin className="mt-0.5 shrink-0 text-sky-800" size={18} /> {location.address}</p>
                <p className="flex gap-3"><Phone className="mt-0.5 shrink-0 text-sky-800" size={18} /> {location.phone}</p>
                <p className="flex gap-3"><Clock3 className="mt-0.5 shrink-0 text-sky-800" size={18} /> {location.hours}</p>
              </div>
              <a
                href={location.mapHref}
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-bold text-sky-800 shadow-sm hover:bg-sky-50"
                target="_blank"
                rel="noreferrer"
              >
                Open map <ExternalLink size={15} />
              </a>
            </article>
          ))}
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm">
            <iframe
              title="Map to Cape Coral Hospital Emergency Department"
              src="https://www.google.com/maps?q=636%20Del%20Prado%20Blvd%20S%2C%20Cape%20Coral%2C%20FL%2033990&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
