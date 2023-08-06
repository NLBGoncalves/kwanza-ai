"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, ImageIcon, VideoIcon } from "lucide-react";
import { FacebookIcon, AreaChart, PenSquare, PieChart } from "lucide-react";
import { cn } from "@/lib/utils";


const routes = [
    {
      icon: AreaChart,
      color: "text-sky-500",
      title: "Artigos otimizados para SEO",
      description: "Usando nossos modelos supertreinados mais o poder do famoso GPT-4, seus artigos gerados serão únicos e bem posicionados nos buscadores",
    },
    {
      icon: FacebookIcon,
      color: "text-sky-500",
      title: "Anúncios do Facebook para vendas",
      description: "Use nosso modelo treinado com base no GPT-4 para criar anúncios totalmente otimizados para vendas na plataforma do Facebook.",
    },
    {
      icon: PieChart,
      color: "text-emerald-500",
      title: "Anúncios do Google para vendas",
      description: "Use nosso modelo treinado com base no GPT-4 para criar anúncios totalmente otimizados para vendas na plataforma do Google.",
    },
    {
        icon: VideoIcon,
      color: "text-orange-700",
      title: "Gerador de Vídeo Inteligente",
      description: "Gere seu script ou crie o seu próprio e nosso sistema faz o resto para você! Usamos vozes neurais e legendas inteligentes, bem como imagens para o seu vídeo. Crie conteúdos audiovisuais infinitos!",
    },
    {
      icon: PenSquare,
      color: "text-emerald-500",
      title: "Legendas Inteligentes",
      description: "As legendas são um grande trunfo para qualquer vídeo. Nosso sistema não apenas gera vozes neurais (as mais humanas possíveis), mas também legendas inteligentes para você.",
    },
    {
      icon: ImageIcon,
      color: "text-pink-700",
      title: "Imagens exclusivas usando IA",
      description: "Gere belas imagens usando vários modelos de inteligência artificial treinados (Midjourney, Dall.e). Com nosso próprio ajuste fino, seus resultados serão ainda melhores e mais precisos.",
    },
];

export const LandingServices = () => {
    return(
        <div className="px-10 pb-20 grid lg:grid-rows-10 sm:grid-rows-1 md:grid-rows-1 md:grid-flow-col">
        <div className="p-3">
            <h2 className=" text-4xl text-white font-extrabold mb-10">O que oferecemos para você?</h2>
            <p className="text-white  p-2">O Kwanza.ai é uma ferramenta avançada que permite uma produção de conteúdo rápida, eficiente e precisa.  </p> 
            <p className="text-white p-2">
            Com ele, você pode criar conteúdo de alta qualidade sem precisar passar por processos manuais.
            ⭐ Descubra todos os recursos.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 md:row-span-10 md:col-span-10 h-[30%]">
            {routes.map((route) => (
            <Card key={route.description} className="bg-[#192339] w-[110%] border-none text-white">
            <CardHeader>
            <CardTitle className="flex items-center gap-x-2">
                <div>
                    <div className={cn("p-2  rounded-md w-[15%] m-2")}>
                    <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                    </div>          
                <p className="text-lg"> </p>
                <p className="text-lg">{route.title}</p>
                </div>
            </CardTitle>
            <CardContent className="pt-4 px-0">
                {route.description}
            </CardContent>
            </CardHeader>
        </Card>
          ))}
        </div>
        </div>
    )
}
