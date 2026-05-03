import { Sparkles } from "lucide-react";

export function SectionLabel({ children }: { children: React.ReactNode }) { return ( <p className="inline-flex items-center gap-2 rounded-full border border-purple-200/70 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-purple-800 shadow-sm backdrop-blur"> <Sparkles className="h-3.5 w-3.5" /> {children} </p> ); }