'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import AnimationWorld from '~/components/animation/animation_world'
import Lotus from '~/components/svg/lotux'
import Footer from '~/components/layout/footer'
import Header from '~/components/layout/header'

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

export default function All() {
  const [chiens, setChiens] = useState<Chien[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const chiensResponse = await fetch('/all')
        if (!chiensResponse.ok) {
          throw new Error('Failed to fetch users')
        }
        const chiensData = await chiensResponse.json()
        setChiens(chiensData)

        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Header />
      <main className="container">
        <section id="elevages" className="mt-40">
          <div className="flex items-center pb-8 gap-4">
            <AnimationWorld text="Tout nos animaux" elementHtml="h1" />
            <Lotus />
          </div>
          <section className="mt-32"></section>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
          >
            {chiens.map((file) => (
              <li key={file.id}>
                <motion.a
                  href={`/elevages/${file.slug}`}
                  initial={{
                    opacity: 0,
                    x: file.id % 2 === 0 ? 50 : -50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                  viewport={{ once: true }}
                  className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 transition-opacity duration-300 ease-in-out"
                >
                  <img
                    className="pointer-events-none object-cover group-hover:opacity-75 w-[512px] h-[300px]"
                    src={`/uploads/${file.thumbnail}`}
                    width={512}
                    height={80}
                    alt={file.slug}
                  />
                  <button type="button" className="absolute inset-0 focus:outline-none">
                    <span className="sr-only">Voir plus de détails pour {file.name}</span>
                  </button>
                </motion.a>
                <p className="pointer-events-none mt-2 block truncate text-base text-gray-900">
                  {file.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}
