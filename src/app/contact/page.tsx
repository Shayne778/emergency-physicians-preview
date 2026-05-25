import type { Metadata } from "next";
import { Building2, ExternalLink, Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { billing, contact, faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact information for the emergency physician group preview site.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Simple contact paths for patients, hospitals, and partners.">
        <p>Administrative contacts, billing support, medical records guidance, and common patient billing questions are grouped in one place.</p>
      </PageHero>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          <a href={`tel:${contact.office}`} className="rounded-lg border border-slate-200 bg-slate-50 p-6 hover:border-sky-200 hover:bg-sky-50">
            <Phone className="text-sky-800" size={28} />
            <h2 className="mt-5 text-2xl font-black text-slate-950">Administrative office</h2>
            <p className="mt-2 text-lg font-bold text-slate-700">{contact.office}</p>
            <p className="mt-2 text-sm text-slate-600">Fax: {contact.fax}</p>
          </a>
          <a href={`mailto:${contact.email}`} className="rounded-lg border border-slate-200 bg-slate-50 p-6 hover:border-sky-200 hover:bg-sky-50">
            <Mail className="text-sky-800" size={28} />
            <h2 className="mt-5 text-2xl font-black text-slate-950">Email</h2>
            <p className="mt-2 text-lg font-bold text-slate-700">{contact.email}</p>
            <p className="mt-2 text-sm text-slate-600">{contact.administrators}</p>
          </a>
        </div>
      </section>
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <article className="rounded-lg border border-slate-200 bg-white p-6">
            <Building2 className="text-sky-800" size={28} />
            <h2 className="mt-5 text-2xl font-black text-slate-950">Billing company</h2>
            <p className="mt-3 text-sm font-semibold text-slate-700">{billing.company}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{billing.address}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{billing.phone}</p>
            <a href={billing.website} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sky-800">
              PhysicianBillPay.com <ExternalLink size={15} />
            </a>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-black text-slate-950">Additional billing and records</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">{billing.additionalSupport}</p>
            <p className="mt-4 text-sm leading-6 text-slate-600">{billing.records}</p>
          </article>
        </div>
      </section>
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-950">FAQ</h2>
          <div className="mt-8 grid gap-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-black text-slate-950">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
