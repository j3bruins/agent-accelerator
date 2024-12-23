import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="container flex flex-col items-center justify-center space-y-8 py-24 text-center animate-fade-in">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
        Build AI Agents with{" "}
        <span className="text-emerald-500">SOL</span>
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Create, deploy, and manage AI agents on Solana using our decentralized platform.
      </p>
      <div className="flex gap-4">
        <Button 
          size="lg" 
          className="bg-white text-black hover:bg-gray-100"
          onClick={() => navigate("/create-agent")}
        >
          Start Building
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          onClick={() => navigate("/marketplace")}
        >
          View Templates
        </Button>
      </div>
    </div>
  );
};