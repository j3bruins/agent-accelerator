import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HackathonAward } from "@/components/HackathonAward";
import { Templates } from "@/components/Templates";

const Index = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <HackathonAward />
        <Features />
        <Templates />
      </main>
    </>
  );
};

export default Index;