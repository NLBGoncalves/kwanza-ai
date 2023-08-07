"use client";

import styles from "@/app/style";
import Image from "next/image";
import people01 from "/public/people01.jpg"
import quotes from "/public/quotes.svg"

const feedback = [
  {
    id: "feedback-1",
    content:
      "O dinheiro é apenas uma ferramenta. Ele o levará aonde você quiser, mas não o substituirá como motorista.",
    name: "Nilson Gonçalves",
    title: "Fundador & Líder",
   
  },
  {
    id: "feedback-1",
    content:
      "O dinheiro é apenas uma ferramenta. Ele o levará aonde você quiser, mas não o substituirá como motorista.",
    name: "Nilson Gonçalves",
    title: "Fundador & Líder",
   
  },
  {
    id: "feedback-1",
    content:
      "O dinheiro é apenas uma ferramenta. Ele o levará aonde você quiser, mas não o substituirá como motorista.",
    name: "Nilson Gonçalves",
    title: "Fundador & Líder",
   
  },
];

export const LandingContent = () => {
  return (
    <section id="equipa" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative p-5`}>

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        A nossa equipa <br className="sm:block hidden" /> de desenvolvimento
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px] text-zinc-400`}>
          Tudo o que você precisa para realizar tarefas em sua indústria e 
          dinamizar os seus negócios em qualquer lugar do planeta.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
    {feedback.map((item) => (
      <div key={item.title} className="flex justify-between flex-col px-10 py-12 rounded-[20px] bg-[#09101d]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <Image  alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" src={quotes} />
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
        {item.content}
      </p>
  
      <div className="flex flex-row">
        <Image src={people01} className="w-[48px] h-[48px] rounded-full" alt={""} />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {item.name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite text-zinc-400">
            {item.title}
          </p>
        </div>
      </div>
    </div>
    ))}
    </div>
  </section>
  )
}