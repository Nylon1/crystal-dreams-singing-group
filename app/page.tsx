import type { Metadata } from "next"; import { CheckCircle2, Heart, Mic2, Music2, ShieldCheck, Smile, Sparkles, Star, Users } from "lucide-react"; import { LayoutShell } from "@/components/LayoutShell"; import { SectionLabel } from "@/components/SectionLabel"; import { PrimaryButton, SecondaryButton } from "@/components/Buttons"; import { ContactPanel } from "@/components/ContactPanel"; import { ContactForm } from "@/components/ContactForm"; import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Crystal Dreams Singing Group Blackpool | Singing for Wellbeing", description: "Crystal Dreams Singing Group in Blackpool supports mental and social wellbeing through music, confidence, connection and the joy of singing.", };

const benefits = [ { icon: Heart, title: "Mental wellbeing", text: "A positive space where music, rhythm and singing can help lift mood and support emotional wellbeing." }, { icon: Users, title: "Social connection", text: "Meet others in a friendly Blackpool-based group where people can feel included, valued and supported." }, { icon: Smile, title: "Confidence building", text: "Singing together can help people find their voice, grow in confidence and enjoy a sense of achievement." }, { icon: Sparkles, title: "Joy through music", text: "Crystal Dreams celebrates the simple joy of singing in a calm, welcoming and uplifting environment." }, ];

const seoKeywords = [ "Singing group in Blackpool", "Wellbeing singing group Blackpool", "Community singing group Blackpool", "Mental wellbeing through music", "Confidence building singing group", "Social wellbeing support Blackpool", ];

export default function HomePage() { const structuredData = { "@context": "https://schema.org", "@type": "LocalBusiness", name: site.name, description: site.description, areaServed: site.location, address: { "@type": "PostalAddress", addressLocality: site.location, addressCountry: "GB", }, email: site.email, telephone: site.phone, founder: site.founder, url: site.domain, };

return ( <LayoutShell> <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

<section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40">
    <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-200/50 blur-3xl" />
    <div className="absolute right-0 top-36 h-96 w-96 rounded-full bg-amber-100/70 blur-3xl" />
    <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-purple-100/80 blur-3xl" />

    <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <SectionLabel>Blackpool wellbeing singing group</SectionLabel>
        <h1 className="mt-7 max-w-4xl font-display text-5xl font-bold tracking-tight text-purple-950 sm:text-6xl lg:text-7xl">
          Helping people feel better through music and the joy of singing.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
          Crystal Dreams Singing Group is a warm, supportive singing group in Blackpool created to help people with mental and social wellbeing, confidence, connection and self-respect through music.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PrimaryButton href="/contact">Enquire about joining</PrimaryButton>
          <SecondaryButton href="/how-it-helps">How singing helps</SecondaryButton>
        </div>
        <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
          {["Friendly support", "Confidence building", "Blackpool based"].map((item) => (
            <div key={item} className="flex items-center gap-2 rounded-2xl bg-white/75 px-4 py-3 text-sm font-bold text-purple-950 shadow-sm ring-1 ring-purple-100 backdrop-blur">
              <CheckCircle2 className="h-4 w-4 text-purple-700" /> {item}
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-purple-200 via-fuchsia-100 to-amber-100 blur-2xl" />
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/80 p-5 shadow-2xl shadow-purple-900/10 backdrop-blur">
          <div className="rounded-[2rem] bg-gradient-to-br from-purple-950 via-purple-800 to-fuchsia-700 p-8 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-100">Crystal Dreams</p>
                <h2 className="mt-3 font-display text-4xl font-bold">Sing. Connect. Grow.</h2>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/15 backdrop-blur">
                <Mic2 className="h-7 w-7" />
              </div>
            </div>
            <div className="mt-12 space-y-4">
              {[
                ["Mental wellbeing", "Music can create comfort, rhythm and positivity."],
                ["Social confidence", "A welcoming group where people can connect."],
                ["Achievement", "Feel proud, supported and encouraged."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl bg-white/12 p-5 ring-1 ring-white/15 backdrop-blur">
                  <p className="font-display text-xl font-bold">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-purple-50">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
      <div>
        <SectionLabel>About Crystal Dreams</SectionLabel>
        <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-purple-950 sm:text-5xl">
          A singing group with heart, purpose and community at its centre.
        </h2>
      </div>
      <div className="space-y-5 text-lg leading-8 text-slate-700">
        <p>
          Founded by Hannah Marie Blastland, Crystal Dreams Singing Group has been created to help people experience the positive power of music in a supportive and uplifting setting.
        </p>
        <p>
          The group is for people who want to build confidence, feel more connected, improve mental and social wellbeing, and enjoy singing with others in a friendly Blackpool community environment.
        </p>
      </div>
    </div>
  </section>

  <section className="bg-purple-950 px-4 py-20 text-white sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-purple-100 ring-1 ring-white/15">How the group helps</p>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Music can help people feel connected, encouraged and less alone.
          </h2>
        </div>
        <p className="text-lg leading-8 text-purple-100">
          Singing in a group can support emotional wellbeing, confidence and social connection. Crystal Dreams gives people a positive reason to come together, enjoy music and feel part of something uplifting.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <div key={benefit.title} className="rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur">
              <Icon className="h-7 w-7 text-amber-200" />
              <h3 className="mt-5 font-display text-2xl font-bold">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-6 text-purple-100">{benefit.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-gradient-to-br from-purple-50 via-white to-amber-50 p-8 ring-1 ring-purple-100 sm:p-10 lg:p-12">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionLabel>Local SEO focus</SectionLabel>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-purple-950">
            Built to help people in Blackpool find the group online.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            The website content is written around local search intent, clear service wording and people-first language, so visitors understand the group quickly and Google can understand the location and purpose.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {seoKeywords.map((keyword) => (
            <div key={keyword} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4 text-sm font-bold text-purple-950 shadow-sm ring-1 ring-purple-100">
              <ShieldCheck className="h-5 w-5 text-purple-700" />
              {keyword}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  <section className="px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div>
        <SectionLabel>Contact Crystal Dreams</SectionLabel>
        <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-purple-950 sm:text-5xl">
          Interested in joining or finding out more?
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          If you are based in or around Blackpool and would like to know more about Crystal Dreams Singing Group, contact Hannah by phone or email.
        </p>
        <div className="mt-8"><ContactPanel /></div>
      </div>
      <div className="rounded-[2.5rem] bg-white p-6 shadow-2xl shadow-purple-900/10 ring-1 ring-purple-100 sm:p-8">
        <p className="font-display text-3xl font-bold text-purple-950">Send an enquiry</p>
        <p className="mt-2 leading-7 text-slate-600">Use the form below to ask about the group or express interest in joining.</p>
        <div className="mt-7"><ContactForm /></div>
      </div>
    </div>
  </section>
</LayoutShell>

); }