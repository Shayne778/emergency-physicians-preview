import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Clock3,
  FileText,
  HeartPulse,
  MapPin,
  ShieldCheck,
  Stethoscope,
  UsersRound,
} from "lucide-react";
import { PhysicianCard } from "@/components/physician-card";
import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { assetPath, locations, physicians, services, site, stats } from "@/lib/content";

const pathways = [
  {
    title: "Patient resources",
    description: "Billing, medical records, and common emergency department questions in one clear place.",
    href: "/contact",
    icon: FileText,
  },
  {
    title: "Emergency care",
    description: "Board-certified physicians and advanced providers caring for Cape Coral Hospital patients.",
    href: "/services",
    icon: HeartPulse,
  },
  {
    title: "Clinician careers",
    description: "Future employment information for emergency physicians, NPs, and PAs.",
    href: "/services",
    icon: UsersRound,
  },
];

const differentiators = [
  {
    title: "Patient first",
    description: "Care spans minor injuries and illnesses through life-threatening emergent care.",
  },
  {
    title: "Physician led",
    description: "An independent, physician-led group of board-certified emergency physicians.",
  },
  {
    title: "Hospital aligned",
    description: "CCEP works with Lee Health administration, nursing, and ancillary staff.",
  },
  {
    title: "Community focused",
    description: "Serving Cape Coral and surrounding communities for nearly four decades.",
  },
];

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-[#f3f8fa]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-18">
          <div className="flex flex-col justify-center">
            <p className="inline-flex w-fit rounded-md bg-white px-3 py-1 text-sm font-black uppercase tracking-wide text-[#0b4f6c] shadow-sm">
              Cape Coral Hospital Emergency Department
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-normal text-slate-950 sm:text-6xl">
              Patient first. Physician led. Community focused.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {site.name} is an independent, physician-led group caring for Cape Coral Hospital patients and the surrounding communities since 1985.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/physicians">
                Meet the team <ArrowRight size={17} />
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Billing and contact
              </ButtonLink>
            </div>
          </div>

          <div className="relative min-h-[560px]">
            <div className="absolute inset-x-8 top-10 h-[430px] rounded-md bg-[#0b4f6c]" />
            <div className="absolute left-0 top-0 w-[70%] overflow-hidden rounded-md bg-white shadow-xl">
              <Image
                src={assetPath("/scraped-assets/02-img-0299.webp")}
                alt="Cape Coral Hospital emergency department"
                width={760}
                height={560}
                priority
                className="h-[370px] w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[58%] overflow-hidden rounded-md border-8 border-[#f3f8fa] bg-white shadow-xl">
              <Image
                src={assetPath("/scraped-assets/03-homecollage.webp")}
                alt="Cape Coral Emergency Physicians collage"
                width={620}
                height={430}
                className="h-[260px] w-full object-cover"
              />
            </div>
            <div className="absolute right-5 top-8 rounded-md bg-[#f7b733] px-4 py-3 text-sm font-black text-[#07384c] shadow-lg">
              80K+ annual visits
            </div>
            <div className="absolute bottom-10 left-6 max-w-xs rounded-md bg-white p-5 shadow-xl">
              <p className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#0b4f6c]">
                <Stethoscope size={17} /> Since 1985
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                From a five-bed emergency department to one of Lee County&apos;s busiest emergency departments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
          {pathways.map((pathway) => {
            const Icon = pathway.icon;
            return (
              <Link
                key={pathway.title}
                href={pathway.href}
                className="group rounded-md border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-lg"
              >
                <div className="grid size-12 place-items-center rounded-md bg-cyan-50 text-[#0b4f6c]">
                  <Icon size={24} />
                </div>
                <h2 className="mt-5 text-xl font-black text-slate-950">{pathway.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{pathway.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0b4f6c]">
                  Learn more <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-[#07384c] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-cyan-200">About CCEP</p>
            <h2 className="mt-4 text-4xl font-black tracking-normal">High-quality emergency care, close to home.</h2>
            <p className="mt-5 text-base leading-7 text-slate-200">
              Rededicated in 2005 as the Weigner Taeni Center for Emergency Services, the emergency department includes a 15-room Fast Track area for minor care needs with physician and advanced provider support.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-md border border-white/15 bg-white/8 p-5">
                <p className="text-4xl font-black text-white">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold leading-5 text-cyan-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f8fa]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What sets CCEP apart" title="Simple strengths, clearly stated.">
            CCEP has a strong story. This site presents it with the clarity of a modern physician group website.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item) => (
              <article key={item.title} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
                <div className="grid size-10 place-items-center rounded-md bg-[#f7b733]/20 text-[#0b4f6c]">
                  <ShieldCheck size={21} />
                </div>
                <h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Physician team" title="Meet the physicians behind the care.">
              Physician biographies and headshots are organized into clean, easy-to-scan profile cards.
            </SectionHeading>
            <ButtonLink href="/physicians" variant="secondary" className="w-fit">
              View all physicians
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {physicians.slice(0, 4).map((physician) => (
              <PhysicianCard key={physician.slug} physician={physician} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f8fa]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionHeading eyebrow="Services" title="Emergency medicine, clearly organized.">
            CCEP&apos;s care model, hospital partnership, and employment information are presented in a compact format built for quick scanning.
          </SectionHeading>
          <div className="grid gap-4">
            {services.map((service) => (
              <article key={service.title} className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-black text-slate-950">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionHeading eyebrow="Access" title="Cape Coral Hospital Emergency Department.">
            The essential details are easy to find: address, hours, and office contact information.
          </SectionHeading>
          <div className="grid gap-4">
            {locations.map((location) => (
              <article key={location.name} className="rounded-md border border-slate-200 bg-[#f3f8fa] p-6">
                <div className="grid size-12 place-items-center rounded-md bg-white text-[#0b4f6c] shadow-sm">
                  <Building2 size={24} />
                </div>
                <h3 className="mt-5 text-xl font-black text-slate-950">{location.name}</h3>
                <div className="mt-4 grid gap-3 text-sm text-slate-600">
                  <p className="flex gap-2"><MapPin className="mt-0.5 shrink-0 text-[#0b4f6c]" size={17} /> {location.address}</p>
                  <p className="flex gap-2"><Clock3 className="mt-0.5 shrink-0 text-[#0b4f6c]" size={17} /> {location.hours}</p>
                  <p className="flex gap-2"><Stethoscope className="mt-0.5 shrink-0 text-[#0b4f6c]" size={17} /> {location.phone}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
