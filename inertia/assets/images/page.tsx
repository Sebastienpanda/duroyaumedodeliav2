"use client";

import AnimationWorld from "@/components/animationWorld/AnimationWorld";
import BannerAnim from "@/components/bannerAnim/bannerAnim";
import Elevage from "@/components/layout/Elevage";
import Header from "@/components/layout/Header";
import HeroBanner from "@/components/layout/HeroHeader/HeroBanner";
import Presentation from "@/components/layout/Presentation";
import Articles from "@/components/layout/articles/Articles";
import { Footer } from "@/components/layout/footer/Footer";
import LoaderLotus from "@/components/loader/lotus";
import Stars from "@/components/stars/Stars";
import { Disclosure } from "@headlessui/react";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const faqs = [
    {
        question: "Politique d'Elevage et Conditions",
        answer: "Le seul but de ces mariages inter-variétés étant d'améliorer la race en tenant compte de la santé, le club pourra délivrer une dérogation sous la condition que les reproducteurs soient au minimum de 3 points chacun à la grille de sélection du CCCE et sur présentation d'un dossier complet avant la saillie. Cette politique d'élevage a été approuvée par le conseil d'administration de la SCC. La SCC ne délivrera pas un certificat de naissance à des chiots issus d'un tel mariage si celui-ci n'a pas obtenu l'autorisation du CCCE.",
    },
    {
        question: "Le gêne dominant et récessif.",
        answer: "La qualité du poil du chihuahua va dépendre de deux gênes. Le gêne du poil court est un gêne dominant, et le gêne poil long est un gène dit récessif.",
    },
    {
        question: "Poil court ou long .",
        answer: "Deux chihuahuas à poil court peuvent produire un chiot poil long si les deux sujets sont porteur du gêne poil long, ils peuvent donc produire des chiots poil court, mais aussi poil long. Le gêne dominant 'poil court' s'il est présent cachera complètement le gêne récessif poil long. Ainsi un chien peut être poil court, alors le gêne dominant s'exprime et se voit dans le phénotype, et peut tout autant porter le gêne poil long en lui (caché) qu'il peut transmettre à sa descendance et qui peut alors s'exprimer dans ses progénitures.",
    },
    {
        question: "Le mariage poil court avec poil long interdit en France.",
        answer: "Un chihuahua à poil long est seulement porteur du gêne poil long qui est récessif, ainsi, le mariage de deux chiens à poil long donnera uniquement des chiots poils long. Il n'est génétiquement pas possible que deux chihuahuas poil long engendrent des chiots poil court. Par contre des chihuahuas poil court peuvent produire des chiots poil long. En France, le mariage de chihuahua Poil court / poil long est interdit sauf sur dérogation du club de race, sous certaines conditions.",
    },
];

export default function Home() {
    return (
        <>
            <Header />
            <HeroBanner />
            <main className="container">
                <Presentation />
                <Elevage />
                <BannerAnim />
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    className="mt-20"
                >
                    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                            <AnimationWorld text="Mariage" style="tracking-tight" elementHtml="h2" />
                            <AnimationWorld
                                text="Le mariage entre un chihuahua de la variété poil court et un chihuahua de la variété poil long n'étant pas autorisé par le Mexique, pays détenteur du standard, le CCCE a demandé et obtenu l'accord de la Commission d'élevage de la SCC ainsi que celui du Comité de la SCC en 2006 pour mettre en place une politique d'élevage sous le contrôle du Club contribuant à l'amélioration de la race."
                                elementHtml="p"
                            />
                            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                                {faqs.map((faq, index) => (
                                    <motion.div
                                        key={faq.question}
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                            delay: 0.1 + index / 10,
                                        }}
                                    >
                                        <Disclosure as="div" className="pt-6">
                                            {({ open }) => (
                                                <>
                                                    <dt>
                                                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                            <span className="text-base font-semibold leading-7">
                                                                {faq.question}
                                                            </span>
                                                            <span className="ml-6 flex h-7 items-center">
                                                                {open ? (
                                                                    <Minus className="h-6 w-6" aria-hidden="true" />
                                                                ) : (
                                                                    <Plus className="h-6 w-6" aria-hidden="true" />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </dt>
                                                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                        <AnimationWorld
                                                            text={faq.answer}
                                                            style="text-base leading-7 text-gray-600"
                                                            elementHtml="p"
                                                        />
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    </motion.div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </motion.div>
                <Articles />
            </main>
            <Stars styleOne="top-[580px] z-[20]" />
            <Footer />
            <LoaderLotus />
        </>
    );
}
