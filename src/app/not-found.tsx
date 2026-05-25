import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-[60vh] place-items-center bg-white px-4 py-20">
      <div className="max-w-xl text-center">
        <p className="text-sm font-black uppercase tracking-wide text-sky-800">Page not found</p>
        <h1 className="mt-4 text-4xl font-black text-slate-950">This preview page is not available.</h1>
        <p className="mt-4 text-slate-600">Use the navigation to return to the physician directory, services, or contact information.</p>
        <ButtonLink href="/" className="mt-8">Return home</ButtonLink>
      </div>
    </main>
  );
}
