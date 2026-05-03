import type { Metadata } from "next"; import { LayoutShell } from "@/components/LayoutShell"; import { PageHero } from "@/components/PageHero"; import { ContactPanel } from "@/components/ContactPanel"; import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact Crystal Dreams Singing Group", description: "Contact Crystal Dreams Singing Group in Blackpool by phone or email to ask about joining or finding out more." };

export default function ContactPage() { return ( <LayoutShell> <PageHero
label="Contact"
title="Interested in joining or finding out more?"
text="If you are based in or around Blackpool and would like to know more about Crystal Dreams Singing Group, contact Hannah by phone or email."
/> <section className="px-4 pb-20 sm:px-6 lg:px-8"> <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start"> <ContactPanel /> <div className="rounded-[2.5rem] bg-white p-6 shadow-2xl shadow-purple-900/10 ring-1 ring-purple-100 sm:p-8"> <p className="font-display text-3xl font-bold text-purple-950">Send an enquiry</p> <p className="mt-2 leading-7 text-slate-600">Use the form below to ask about the group or express interest in joining.</p> <div className="mt-7"><ContactForm /></div> </div> </div> </section> </LayoutShell> ); }
