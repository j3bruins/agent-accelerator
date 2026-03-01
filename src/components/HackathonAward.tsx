import hackathonImage from "@/assets/hackathon-award.jpeg";
import { Trophy } from "lucide-react";

export const HackathonAward = () => {
  return (
    <section className="container py-20">
      <div className="flex flex-col items-center text-center space-y-6 animate-fade-in">
        <div className="flex items-center gap-2 text-emerald-500">
          <Trophy className="h-6 w-6" />
          <span className="text-sm font-semibold uppercase tracking-widest">Award-Winning Platform</span>
          <Trophy className="h-6 w-6" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          2nd Place — Solana AI Hackathon 2025
        </h2>
        <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
          Founded by <span className="text-foreground font-semibold">Joseph Chicas</span>, Agent Accelerator
          competed against <span className="text-foreground font-semibold">400+ startups</span> and won
          <span className="text-emerald-500 font-semibold"> 2nd place</span> for Best AI Tooling in the
          Solana AI Hackathon powered by SendAI.
        </p>
        <div className="mt-4 w-full max-w-3xl overflow-hidden rounded-xl border border-border/50 shadow-2xl shadow-emerald-500/10">
          <img
            src={hackathonImage}
            alt="Agent Accelerator winning 2nd place at the Solana AI Hackathon 2025 Agent Token Tooling Track"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
