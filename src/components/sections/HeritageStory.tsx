'use client'

import { useRef, useEffect } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HeritageStory() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.heritage-content', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <motion.div style={{ y: y1 }} className="relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-600">
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-display">
                  L
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <motion.div
              style={{ y: y2 }}
              className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent-gold/20 rounded-full blur-3xl -z-10"
            />
          </motion.div>

          {/* Content */}
          <motion.div style={{ y: y2 }} className="heritage-content">
            <p className="text-sm uppercase tracking-widest text-accent-gold mb-4">
              Notre Histoire
            </p>
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              L'Art de l'Horlogerie
            </h2>
            <div className="space-y-4 text-lg text-neutral-700">
              <p>
                Luxonera incarne l'excellence horlogère depuis sa création.
                Spécialisés dans la distribution de montres de luxe, nous offrons
                une sélection rigoureuse des plus belles créations horlogères.
              </p>
              <p>
                Chaque montre de notre collection est choisie pour son artisanat
                exceptionnel, son design intemporель et sa précision mécanique.
                Nous croyons que porter une montre de luxe, c'est porter une œuvre
                d'art au poignet.
              </p>
              <p>
                Notre mission est de rendre accessible l'excellence horlogère
                à travers une expérience d'achat simple et personnalisée via WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-neutral-200">
              <div>
                <p className="text-3xl font-display text-accent-gold mb-2">100%</p>
                <p className="text-sm text-neutral-600">Authentiques</p>
              </div>
              <div>
                <p className="text-3xl font-display text-accent-gold mb-2">2 ans</p>
                <p className="text-sm text-neutral-600">Garantie</p>
              </div>
              <div>
                <p className="text-3xl font-display text-accent-gold mb-2">24/7</p>
                <p className="text-sm text-neutral-600">Service</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
