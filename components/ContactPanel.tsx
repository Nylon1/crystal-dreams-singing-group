
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function ContactPanel() {
  return (
    <div className="space-y-4">
      <a
        href={"tel:" + site.phone}
        className="flex items-center gap-4 rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-purple-100 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-900/5"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-900">
          <Phone className="h-5 w-5" />
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
            Phone
          </p>
          <p className="font-display text-xl font-bold text-purple-950">
            {site.displayPhone}
          </p>
        </div>
      </a>

      <a
        href={"mailto:" + site.email}
        className="flex items-center gap-4 rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-purple-100 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-900/5"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-800">
          <Mail className="h-5 w-5" />
        </div>

        <div className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
            Email
          </p>
          <p className="break-all font-display text-xl font-bold text-purple-950">
            {site.email}
          </p>
        </div>
      </a>

      <div className="flex items-center gap-4 rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-purple-100">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-100 text-fuchsia-800">
          <MapPin className="h-5 w-5" />
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
            Location
          </p>
          <p className="font-display text-xl font-bold text-purple-950">
            {site.location}
          </p>
        </div>
      </div>
    </div>
  );
}