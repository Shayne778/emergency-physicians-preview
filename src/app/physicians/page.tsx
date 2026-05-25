import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PhysicianCard } from "@/components/physician-card";
import { advancedProviders, physicians, prnAdvancedProviders, prnPhysicians } from "@/lib/content";

export const metadata: Metadata = {
  title: "Physicians",
  description: "Meet the emergency physicians in this private preview rebuild.",
};

export default function PhysiciansPage() {
  return (
    <>
      <PageHero eyebrow="Physician directory" title="A clearer way to meet the emergency physicians.">
        <p>Physician photos, credentials, roles, and professional highlights are organized for a cleaner roster experience.</p>
      </PageHero>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {physicians.map((physician) => (
            <PhysicianCard key={physician.slug} physician={physician} />
          ))}
        </div>
      </section>
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
          <TeamList title="PRN Physicians" items={prnPhysicians} />
          <TeamList title="Advanced Providers" items={advancedProviders} />
          <TeamList title="PRN Advanced Providers" items={prnAdvancedProviders} />
        </div>
      </section>
    </>
  );
}

function TeamList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6">
      <h2 className="text-xl font-black text-slate-950">{title}</h2>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="text-sm font-semibold leading-6 text-slate-700">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
