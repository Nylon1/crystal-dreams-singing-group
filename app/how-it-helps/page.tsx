import type { Metadata } from "next"; import { Heart, Smile, Sparkles, Users } from "lucide-react"; import { LayoutShell } from "@/components/LayoutShell"; import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "How Singing Helps Mental and Social Wellbeing", description: "Discover how Crystal Dreams Singing Group in Blackpool supports mental wellbeing, social connection, confidence and achievement through singing." };

const benefits = [ { icon: Heart, title: "Mental wellbeing", text: "Music can provide comfort, positivity and a gentle way to express emotion." }, { icon: Users, title: "Social wellbeing", text: "Group singing gives people a reason to come together, connect and feel part of something." }, { icon: Smile, title: "Confidence", text: "Finding your voice in a supportive space can help build confidence over time." }, { icon: Sparkles, title: "Achievement", text: "Taking part, improving and showing up can create a real sense of pride and progress." }, ];

export default function HowItHelpsPage() { return ( <LayoutShell> <PageHero
label="How the group helps"
title="Music can help people feel connected, encouraged and less alone."
text="Crystal Dreams Singing Group uses the joy of singing to support wellbeing, confidence, friendship and personal achievement."
/> <section className="bg-purple-950 px-4 py-20 text-white sm:px-6 lg:px-8"> <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4"> {benefits.map((benefit) => { const Icon = benefit.icon; return ( <div key={benefit.title} className="rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur"> <Icon className="h-7 w-7 text-amber-200" /> <h2 className="mt-5 font-display text-2xl font-bold">{benefit.title}</h2> <p className="mt-3 text-sm leading-6 text-purple-100">{benefit.text}</p> </div> ); })} </div> </section> </LayoutShell> ); }