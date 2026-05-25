import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { physicians } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return physicians.map((physician) => ({ slug: physician.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const physician = physicians.find((item) => item.slug === slug);

  if (!physician) {
    return { title: "Physician" };
  }

  return {
    title: `${physician.name}, ${physician.credentials}`,
    description: physician.bio,
  };
}

export default async function PhysicianProfilePage({ params }: Props) {
  const { slug } = await params;
  const physician = physicians.find((item) => item.slug === slug);

  if (!physician) {
    notFound();
  }

  return (
    <article className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-16">
        <div>
          <ButtonLink href="/physicians" variant="ghost" className="mb-5 px-0">
            <ArrowLeft size={17} /> Back to physicians
          </ButtonLink>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-100">
            <Image
              src={physician.image}
              alt={`${physician.name}, ${physician.credentials}`}
              fill
              priority
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-black uppercase tracking-wide text-sky-800">{physician.role}</p>
          <h1 className="mt-4 text-5xl font-black tracking-normal text-slate-950">{physician.name}</h1>
          <p className="mt-3 text-xl font-bold text-slate-600">{physician.credentials}</p>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">{physician.bio}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {physician.specialties.map((specialty) => (
              <span key={specialty} className="rounded-md bg-cyan-50 px-3 py-1.5 text-sm font-bold text-cyan-900">
                {specialty}
              </span>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-black text-slate-950">Profile highlights</h2>
            <div className="mt-5 grid gap-3">
              {physician.highlights.map((highlight) => (
                <p key={highlight} className="flex gap-3 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-sky-800" size={18} />
                  {highlight}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4">
            {physician.details.map((section) => (
              <section key={section.title} className="rounded-lg border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-black text-slate-950">{section.title}</h2>
                <ul className="mt-4 grid gap-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#0b4f6c]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
