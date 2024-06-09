import ChiensController from '#controllers/chiens_controller'
import { InferPageProps } from '@adonisjs/inertia/types'
import { Disclosure } from '@headlessui/react'
import { Head } from '@inertiajs/react'
import { motion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'
import adnone from '~/assets/images/adnone.jpg'
import adntwo from '~/assets/images/adntwo.jpg'
import certif from '~/assets/images/certif.jpg'
import example from '~/assets/images/exemple.jpg'
import materiel from '~/assets/images/materiel.jpg'
import porte from '~/assets/images/porte-monnaie.png'
import soinsExemple from '~/assets/images/soinsExemple.jpg'
import soinsExemple2 from '~/assets/images/soinsExemple2.jpg'
import AnimationWorld from '~/components/animation/animation_world'
import Female from '~/components/female/female'
import Header from '~/components/layout/header'
import Male from '~/components/male/male'

type Props = InferPageProps<ChiensController, 'show'>

type Chien = {
  id: number
  name: string
  slug: string
  couleurs: string
  puce: string
  tatouage: string
  sexe: string
  lof: string
  cotation: string
  adn: string
  tares: string
  reproduction: string
  description: string
  thumbnail: string
  reserved: string
  vendu: string
  prix: string
}

const faqs = [
  {
    question: 'Comment préparer son coin?',
    answer:
      "Lorsque le chiot entre à la maison, il faut qu'il trouve un coin prêt pour lui, avec un petit tapis, un coussin ou un panier (cela dépend de sa taille), deux écuelles (en acier de préférence) et quelques jouets à ronger. Mieux vaut ne jamais utiliser de panier en osier, très facile à ronger pour le chiot : les morceaux d'osier, engloutis, peuvent provoquer des lésions de l'appareil digestif. Rappelons que contrairement à ce qu'on pourrait croire, ce ne sont pas les petits chiens à poil long qui ont le plus besoin d'une couche moelleuse : ce sont au contraire les chiens de grande taille à poil court. Le poids de ces chiens, en effet, pesant sur leurs articulations non protégées par du poil, peut entraîner des cals inesthétiques (et gênants), en particulier sur les coudes.",
  },
  {
    question: "Qu'elles jouets utiliser ?",
    answer:
      "Eléments indispensables à son éducation, à son éveil, au renforcement de votre complicité, les jouets devront être de qualité. Au début de son existence, votre chiot découvre chaque objet et risque de les détruire en les mordillant. Il existe un choix incroyable de jouets pour chiens allez dans votre animalerie locale ou sur Internet : Vous trouverez des anneaux, des balles, des cordes et des cordes à tirer.  Il ne faut pas toujours laisser à disposition du chiot les jouets tels que balles, petites souris, boudin en mousse, etc. Ils ne doivent être utilisés qu'en présence du maître, de façon à représenter une récompense attendue. En créant une attente du jeu chez le chiot, on pourra lui apprendre n'importe quel exercice ; en revanche, si le chien s'habitue à penser à ces balles comme à des objets « banals », dont il peut disposer comme bon lui semble, il ne sera pas spécialement disposé à « travailler » pour les obtenir. Les jouets à ronger peuvent en revanche être laissés à la disposition du chiot, mais rappelons : - qu'il faut choisir des jouets adaptés à la taille du chien (s'ils son nt trop gros, les chiots de petite taille ne parviendront même pas à les saisir). - qu'un os en cuir, par exemple, fournit des calories, comme n'importe quel autre aliment et il faut donc en tenir compte dans la ration journalière.",
  },
  {
    question: 'Bols à eau et à nourriture ?',
    answer:
      'Choisissez des bols à eau et à nourriture en inox ou en céramique avec un fond lesté. Les bols en plastique finiront probablement mâchés, et les marques de dents deviennent un nid à bactéries. Un bol lourd sera également plus difficile à renverser par accident (par vous et votre chien).',
  },
  {
    question: 'Barrières ?',
    answer:
      "Les escaliers, les balcons et les mares doivent être hors de portée d'un chiot curieux  et une barrière stratégiquement placée vous permettra de ne pas avoir à superviser. Une barrière peut aussi vous aider à protéger vos meubles ou vos objets personnels de « l'instinct mâcheur » irrésistible de votre chiot.",
  },
  {
    question: 'Un collier et une laisse ?',
    answer:
      " Vous ne pourrez pas sortir votre nouveau chiot tant qu'il n'a pas reçu tous ses vaccins.  Vous pouvez passer cette période à l'habituer à porter son collier et une laisse. Ainsi, cela ne sera pas un problème lorsqu'il sera temps d'explorer le monde extérieur. Les colliers et les laisses existent en différentes matières. Les colliers ajustables en nylon ou en cuir souple sont recommandés, car ils s'allongent en même temps que le chiot grandit. Ajustez la boucle de telle manière que vous puissiez confortablement mettre deux doigts entre le collier et le cou de votre chiot. Contrôlez régulièrement l'ajustement du collier ; vous serez étonné de la vitesse à laquelle le chiot grandit. Si vous avez un très petit chien, comme un petit terrier ou une très petite race, vous préfèrerez peut-être utiliser un harnais  cela permet de protéger plus facilement les cous délicats. (N'oubliez pas de vous assurer que votre chien porte toujours une médaille).",
  },
  {
    question: 'La première nourriture de votre chien ?',
    answer:
      "L'arrivée dans sa nouvelle maison est un énorme changement pour votre chien. Alors, vous pouvez faire un petit geste : lui donner un bol de la nourriture à laquelle il est habitué. Votre chien se sentira bien accueilli et en sécurité. Après cela, vous pouvez décider de la nourriture que vous voulez lui donner. En mélangeant la nouvelle nourriture et l'ancienne, petit à petit, sur une semaine, vous pouvez changer l'alimentation d'un chien pour ce que vous estimez être le meilleur pour lui.",
  },
  {
    question: 'Première visite de votre chiot chez le vétérinaire ?',
    answer:
      "Demandez aux propriétaires de chiens voisins de vous recommander un vétérinaire. Dès que votre chien est habitué à vous et à sa nouvelle maison, emmenez-le passer une visite. En plus du contrôle général, vous devrez parler des vers, des vaccins et de la puce electronique. Prenez des récompenses et félicitez votre chien. Avec le bon vétérinaire et une attitude positive, une visite chez le vétérinaire peut être amusante pour votre chien, plutôt qu'effrayante.",
  },
]

export default function Show(props: Props) {
  const { chien } = props as { chien: Chien }
  return (
    <>
      <Head>
        <title>{`${chien.slug} | Du Royaume D'Odelia`}</title>
        <meta
          name="description"
          content="Elevage Du Royaume D'Odelia, chiens de race Chihuahua, chiens, chien, chiots, chiot, localisation géographique: 27260 Chapelle Bayvel"
        />
      </Head>
      <Header activate={false} />
      <main className="container">
        <section>
          <div className="mt-40">
            <div
              className={
                chien.sexe === 'Male'
                  ? 'flex flex-col md:flex-row gap-4 md:gap-0 items-center md:justify-between p-4 rounded-lg border border-[#B0DEFC] relative mb-24 h-[380px]'
                  : 'block rounded-lg border relative border-[#f9aad4] mb-24 h-[148px] p-4'
              }
            >
              <AnimationWorld
                text={chien.slug}
                elementHtml="h1"
                style={chien.sexe === 'Male' ? '' : 'text-center'}
              />
              {chien.reproduction === 'Oui' && (
                <div className="text-center">
                  <p className="text-black text-lg danger">
                    Ramsès est un chien reproducteur qui sert exclusivement pour mon élévage, ils
                    sont des soins en ostéopathie et hydrothérapie
                  </p>
                </div>
              )}
              {chien.sexe === 'Male' ? <Male /> : <Female />}
            </div>
            {chien.sexe === 'Male' ? (
              <div className="md:flex md:flex-col md:justify-center md:items-center md:gap-8">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -75 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                >
                  <AnimationWorld
                    text="Voici une réprésentation des soins apportés"
                    elementHtml="h2"
                    style="mt-32 mb-8 text-center"
                  />
                  <div className="flex flex-col justify-center gap-8 md:flex-row">
                    <img
                      className="h-[300px] w-full md:w-1/4 object-cover rounded-lg"
                      src={soinsExemple}
                      alt={chien.slug}
                    />
                    <img
                      className="h-[300px] w-full md:w-1/4 object-cover rounded-lg"
                      src={soinsExemple2}
                      alt={chien.slug}
                    />
                  </div>
                </motion.div>
              </div>
            ) : (
              ''
            )}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              className="mt-32 lg:mt-0"
            >
              <AnimationWorld text="Informations complémentaire" style="my-8" elementHtml="h2" />
              <div className="md:flex md:gap-8">
                <div className="md:flex-1">
                  <img
                    className="w-full h-[189px] md:h-[500px] object-cover rounded-lg"
                    src={`/inertia/public/uploads/${chien.thumbnail}`}
                    alt={chien.slug}
                  />
                  <p className="underline decoration-wavy decoration-[#C9BA46] mb-20">
                    Pédigré des parents sur demande
                  </p>
                </div>
                <table className="table-auto w-full md:h-1/2 md:flex-1">
                  <tbody>
                    <tr>
                      <td className="border-[2px]  border-amber-700 px-4 py-2">Couleur:</td>
                      <td className="border-[2px]  border-amber-700 px-4 py-2">{chien.couleurs}</td>
                    </tr>
                    <tr>
                      <td className="border-[2px]   border-amber-700 px-4 py-2">Puce:</td>
                      <td className="border-[2px]  border-amber-700 px-4 py-2">{chien.puce}</td>
                    </tr>
                    <tr>
                      <td className="border-[2px]   border-amber-700 px-4 py-2">Tatouage:</td>
                      <td className="border-[2px]  border-amber-700 px-4 py-2">
                        {chien.tatouage === '' ? '' : chien.tatouage}
                      </td>
                    </tr>
                    <tr>
                      <td className="border-[2px]   border-amber-700 px-4 py-2">LOF:</td>
                      <td className="border-[2px]  border-amber-700 px-4 py-2">{chien.lof}</td>
                    </tr>
                    <tr>
                      <td className="border-[2px]   border-amber-700 px-4 py-2">Cotation:</td>
                      <td className="border-[2px]  border-amber-700 px-4 py-2">{chien.cotation}</td>
                    </tr>
                    <tr>
                      <td className="border-[2px]   border-amber-700 px-4 py-2">ADN:</td>
                      <td className="border-[2px]  border-amber-700 px-4 py-2">{chien.adn}</td>
                    </tr>
                    <tr>
                      <td className="border-[2px]   border-amber-700 px-4 py-2">Tares:</td>
                      <td className="border-[2px]  border-amber-700 px-4 py-2">{chien.tares}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            className="mt-20"
          >
            <AnimationWorld text="Adns" style="tracking-tight" elementHtml="h2" />
            <section className="mt-20">
              <div className="flex flex-col items-center lg:flex-row gap-8">
                <div>
                  <img src={certif} alt="Adns" />
                </div>
                <div>
                  <img src={adnone} alt="Page one" />
                </div>
                <div>
                  <img src={adntwo} alt="Page two" />
                </div>
              </div>
              <AnimationWorld text="Test adns" style="tracking-tight mt-20" elementHtml="h2" />
              <section className="flex flex-col items-center lg:flex-row gap-8">
                <div>
                  <img src={materiel} alt="Page one" />
                </div>
                <div>
                  <img src={example} alt="Page one" />
                </div>
              </section>
            </section>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            className="mt-20"
          >
            <AnimationWorld
              text="Certificat d'engagement"
              style="tracking-tight"
              elementHtml="h2"
            />
            <section className="mt-20">
              <div>
                <iframe
                  src="https://www.centrale-canine.fr/sites/default/files/2022-10/CertificatEngagement_FINALweb_liensVF2.pdf"
                  width={500}
                  className="w-full"
                  height={700}
                />
              </div>
            </section>
          </motion.div>
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
                <AnimationWorld
                  text="Nécessaire pour l'arriver de votre chiot"
                  style="tracking-tight"
                  elementHtml="h2"
                />
                <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                  {faqs.map((faq) => (
                    <div key={faq.question}>
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
                              <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
          >
            <AnimationWorld text="Prix et paiement" style="tracking-tight" elementHtml="h2" />
            <div className="flex gap-4 flex-col lg:flex-row items-center">
              <img src={porte} alt="Porte monnaie" />
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
              >
                <p className="mt-5">
                  <strong>LOF = chien de race ou pure race</strong>
                  <br />
                  <strong>
                    Seul un chien inscrit au LOF a le droit à l'appellation "chiens de race " ou
                    "pur race" qui justifie le prix de vente plus élévés que d'un chien croisé,
                    d'apparence ou de type.
                  </strong>
                </p>
                <br />
                <p>
                  un chiot de mon élevage est vendu entre <strong>2000 et 4500 euros</strong> les
                  prix varient selon la couleur l' age le sexe et la qualité.
                </p>
                <br />
                <p>
                  le paiement : un premier virement sera demander pour la réservation du chiot et le
                  reste de la somme au <strong>8 semaines du chiot</strong>. paiement en virement
                  bancaire ou espèce possible uniquement. <strong>Pas chèque !</strong>
                </p>
                <br />
                <p>
                  les femelles sont généralement plus chères que les males certains chiots peuvent
                  également etre vendus au dessus ou en dessous de cette fourchette de prix de façon
                  exeptionnelle.
                </p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            className="mt-32"
          >
            <AnimationWorld text="Mediation" style="tracking-tight" elementHtml="h2" />
            <div className="flex gap-4 flex-col lg:flex-row items-center">
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
              >
                <p className="mt-5">
                  <strong>Mediavet</strong>
                  <br />
                  <strong>
                    On intervient en tant que médiateur dans tout type de litige entrant dans son
                    domaine de compétence
                  </strong>
                </p>
                <br />
                <p>
                  Médiavet est par ailleurs Médiateur de la consommation, agrée par la Commission
                  d'évaluation et de contrôle de la médiation de la consommation , depuis le 12
                  décembre 2017
                </p>
                <br />
                <p>
                  La médiation est un processus amiable et confidentiel de résolution des conflits
                  au cours duquel un tiers , indépendant et impartial , assiste les parties pour les
                  aider à trouver une solution
                </p>
                <br />
                <p>
                  Voici nos informations de contact : <br />
                  <strong>Mediavet</strong>
                  <br />
                  <strong>Adresse : 126 chemin de l'abreuvoir</strong>
                  <br />
                  <strong>38410 Saint Martin d'Uriage</strong>
                  <br />
                  <strong>Mail : contact@mediavet.net</strong>
                  <br />
                  <strong>Tel : 07 56 82 29 22</strong>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  )
}
