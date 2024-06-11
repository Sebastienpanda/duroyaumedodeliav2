'use client'

import { motion } from 'framer-motion'

export default function AnimationWorld({
  text,
  style,
  elementHtml = 'h1',
}: {
  text: string
  style?: any
  elementHtml: keyof JSX.IntrinsicElements
}) {
  const item = {
    hidden: {
      y: '200%',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  }
  const splitWords = text.split(' ')
  const words: any = []

  for (const items of splitWords) {
    words.push(items.split(''))
  }

  words.map((word: any) => {
    return word.push('\u00A0')
  })

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  }

  const tagMap: any = {
    p: 'p',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
  }

  let Tag = tagMap[elementHtml]

  if (!Tag) {
    Tag = 'div'
  }

  words.map((word: any) => {
    return word.push('\u00A0')
  })

  return (
    <motion.section initial="hidden" variants={container} whileInView="visible">
      <Tag
        className={` ${elementHtml === 'p' ? '' : 'text-[#C9BA46] uppercase text-3xl md:text-4xl'} ${
          style ? style : ''
        } `}
      >
        {words.map((_: any, index: any) => (
          <span key={index} className="whitespace-nowrap">
            {words[index].flat().map((element: any, i: any) => {
              return (
                <span className="overflow-hidden inline-block mr-1" key={i}>
                  <motion.span
                    className={`${elementHtml === 'p' ? 'inline-block' : 'inline-block span'}`}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              )
            })}
          </span>
        ))}
      </Tag>
    </motion.section>
  )
}
