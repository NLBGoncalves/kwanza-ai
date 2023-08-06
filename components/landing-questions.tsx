"use client"

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const tools = [
    {
      label: 'O conteúdo gerado possui direitos autorais?',
      title: 'Todo o conteúdo gerado, incluindo vídeos, imagens e textos, pertence a você. Como usamos inteligência artificial, o conteúdo é único e gerado instantaneamente.'
    },
    {
      label: 'Posso gerar conteúdo internacional?',
      title: 'Sim, nossa ferramenta suporta todos os idiomas'
    },
    {
      label: 'Existe um limite para o que posso gerar em meu plano?',
      title: 'No plano Pro, não há limite, o que é uma de suas grandes vantagens. Nos demais planos, há um limite de até 150.000 palavras.'
    },
    {
      label: 'Como o conteúdo é gerado com tanta precisão?',
      title: 'Temos modelos treinados para texto, bem como imagens. Os modelos do Kwanza.ai estão em constante evolução, pois usamos várias técnicas de Machine Learning, Deep Learning e Fine Tune. Resumindo: Você só se preocupa em gerar conteúdo, e nós cuidamos do resto :)'
    },
    {
      label: 'Tenho suporte após adquirir o CopyGenerator?',
      title: 'Dentro da ferramenta, nossa equipe está sempre disponível para atendê-lo em horário comercial. Além disso, como assinante, você pode sugerir novos recursos e melhorias.'
    },
    {
      label: 'Onde assisto as aulas oferecidas pelo Kwanza.ai?',
      title: 'Dentro da ferramenta, há uma seção “Aulas”. É de fácil acesso para você estudar e aplicar imediatamente 😄'
    },
  ]

export const LadingQuestions = () => {
    return (
        <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-white">
            Perguntas frequentes
        </h2>
        
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4 ">
        {tools.map((tool) => (
          <Card key={tool.title} className="p-4 border-black/5 bg-[#192339] flex items-center justify-between hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", )}>
              </div>
              
              <div >
                <div className="font-semibold text-white">
                {tool.label}
                </div>
                <p className="text-muted-foreground font-light text-sm md:text-lg ">
                    {tool.title}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
    )
}