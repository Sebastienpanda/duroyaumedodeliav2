'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import AnimationWorld from '~/components/animation/animation_world'
import Lotus from '~/components/svg/lotux'

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
      <section id="elevages" className="animCard mt-32 md:mt-[700px]">
        <div className="flex items-center pb-8 gap-4">
          <AnimationWorld text="Notre élévage" elementHtml="h1" />
          <Lotus />
        </div>
        <motion.div className="cursor-pointer flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center">
          {chiens.map((file) => (
            <motion.a
              href={`/elevage/${file.slug}`}
              key={file.id}
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
              className="rounded-lg overflow-hidden block md:w-1/3 lg:w-1/4"
            >
              <img
                className="w-full h-full object-cover"
                src={`/public/uploads/${file.thumbnail}`}
                alt="Gallery de chiot"
              />
            </motion.a>
          ))}
        </motion.div>
      </section>
    </>
  )
}
