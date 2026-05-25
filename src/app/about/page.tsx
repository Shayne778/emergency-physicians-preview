import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description: "About the emergency physician group and its approach to care.",
};

const principles = [
  "Cape Coral Emergency Physicians has served Cape Coral Hospital since 1985.",
  "The group grew with Cape Coral from a five-bed emergency department to one of Lee County's busiest emergency departments.",
  "The emergency room was rededicated in 2005 as the Weigner Taeni Center for Emergency Services.",
  "Physicians and advanced providers care for minor injuries, illnesses, and life-threatening emergencies.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About the group" title="Board-certified emergency physicians serving Cape Coral for decades.">
        <p>
          Since 1985, Cape Coral Emergency Physicians has delivered high-quality emergency services to Cape Coral and surrounding communities.
        </p>
      </PageHero>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-black text-slate-950">From a five-bed emergency department to more than 80,000 patients a year.</h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Cape Coral Hospital now operates one of the busiest emergency departments in Lee County. This site keeps the original story intact while making the information easier to read, navigate, and trust.
            </p>
          </div>
          <div className="grid gap-4">
            {principles.map((principle) => (
              <div key={principle} className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5">
                <CheckCircle2 className="mt-0.5 shrink-0 text-sky-800" size={20} />
                <p className="text-sm font-semibold leading-6 text-slate-700">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
