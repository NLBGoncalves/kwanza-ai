"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import herobg from '/public/herobg.png'
import { Button } from "@/components/ui/button";
import { Background } from "./background";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <>
   
    {/*<Background/>*/}
    <div className="text-white font-bold py-36 text-center space-y-5" style={{background: `url(${herobg})`}}>
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold ">
        <h1>A melhor ferramenta de IA para</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "Artigos otimizados para SEO.",
                "Legendas Inteligentes.",
                "Imagens exclusivas usando IA.",
                "Gerador de Vídeo Inteligente.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Crie conteúdo usando IA 10 vezes mais rápido.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Comece a Gerar Gratuitamente
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        Não é necessário cartão de crédito.
      </div>
      </div>
     
      </>
  );
};