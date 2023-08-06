"use client"

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import styles from "@/app/style";

export const LandingCta = () => {

    const { isSignedIn } = useAuth();

    return(
        <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-[#09101d] sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Experimenta os nossos serviços agora!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-zinc-400`}>
        Tudo o que você precisa para começar com a automação no seu setor de trabalho
        e expandir seus negócios em qualquer lugar do planeta.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Comece a Gerar Gratuitamente
          </Button>
        </Link>
    </div>
  </section>
    )
}

