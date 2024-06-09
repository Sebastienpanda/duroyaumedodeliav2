'use client'

import { motion } from 'framer-motion'
import AnimationWorld from '../animation/animation_world'
import Lotus from '../svg/lotux'

export default function Presentation() {
  const variant = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  }
  const transition = {
    duration: 0.5,
    ease: 'easeInOut',
  }

  return (
    <>
      <section id="presentation" className="mt-32 md:mb-[560px]">
        <div className="flex items-center gap-4 pb-8">
          <AnimationWorld
            text="ELEVAGE DU ROYAUME D'ODELIA"
            style="text-[#C9BA46] uppercase text-2xl md:text-4xl mr-5 span"
            elementHtml="h2"
          />
          <Lotus />
        </div>
        <p className="text-heading-500 text-base">
          Après le décès de ma femelle Yorkshire, j'ai accueilli Odélia, une adorable petite femelle
          Chihuahua, dans ma vie. Sa présence m'a inspiré le désir de créer un élevage familial
          dédié aux couleurs rares et classiques, exclusivement dans la variété à poil long, tous
          inscrits au LOF.
        </p>

        <div className="flex flex-col gap-8 mt-32 md:relative lg:max-w-[1100px] animParent">
          <motion.div
            className="circle relative lg:absolute xl:left-[200px]"
            variants={variant}
            initial="hidden"
            whileInView="visible"
            transition={transition}
          >
            <div className="md:absolute md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 md:left-1/2 md:w-[70%]">
              <p className="md:text-base">
                Chaque chiot est proposé vacciné, identifié par puce électronique et inscrit au LOF,
                garantissant une excellente santé. Sélectionnés avec soin et socialisés, ils
                partagent ma vie quotidienne, entre jeux, siestes, promenades et moments de détente
                dans le jardin, pour leur épanouissement optimal.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="circle circle2 relative lg:absolute lg:top-[0px] lg:-z-[2] lg:right-[10px] xl:right-[-16px] xl:top-[116px]"
            variants={variant}
            initial="hidden"
            whileInView="visible"
            transition={transition}
          >
            <div className="md:absolute md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 md:left-1/2 md:w-[70%]">
              <p className="md:text-base">
                Installée en Normandie, dans le 27 près de Honfleur, je privilégie la qualité à la
                quantité, veillant attentivement à chaque portée. Ma démarche est empreinte de
                sélectivité quant au choix des familles qui auront le bonheur d'accueillir mes
                précieux petits compagnons.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
