import type { Metadata } from "next";
import { Activity, ArrowRight, Hospital, ShieldCheck, UsersRound } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { employment, services, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Emergency medicine services and hospital partnership capabilities.",
};

const icons = [Activity, ShieldCheck, Hospital, UsersRound];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Clinical coverage and operational leadership for emergency care.">
        <p>CCEP&apos;s emergency care, hospital partnership, advanced provider support, and employment information are organized into clear, scannable sections.</p>
      </PageHero>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8">
          {services.map((service, index) => {
            const Icon = icons[index] ?? ShieldCheck;
            return (
              <article key={service.title} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <div className="grid size-12 place-items-center rounded-md bg-white text-sky-800 shadow-sm">
                  <Icon size={24} />
                </div>
                <h2 className="mt-6 text-2xl font-black text-slate-950">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                <ul className="mt-5 grid gap-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <ArrowRight size={15} className="text-cyan-700" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>
      <section id="careers" className="scroll-mt-32 border-t border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-cyan-200">Careers</p>
            <h2 className="mt-2 text-3xl font-black">Interested in future employment?</h2>
          </div>
          <ButtonLink href={`mailto:${site.email}`} variant="secondary">Email {site.email}</ButtonLink>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          {employment.map((role) => (
            <article key={role.title} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-black text-slate-950">{role.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{role.description}</p>
              <ul className="mt-5 grid gap-2">
                {role.details.map((detail) => (
                  <li key={detail} className="flex gap-2 text-sm font-semibold leading-6 text-slate-700">
                    <ArrowRight size={15} className="mt-1 shrink-0 text-cyan-700" />
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
