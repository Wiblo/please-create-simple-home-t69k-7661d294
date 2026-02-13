'use client'

import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Clock } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function WeddingInvite() {
  return (
    <div className="min-h-dvh relative bg-[#faf9f7]">
      {/* Full-bleed hero section with dramatic botanical image */}
      <div className="relative h-dvh overflow-hidden">
        {/* Background image with parallax-ready setup */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070"
            alt="Elegant garden roses"
            fill
            className="object-cover"
            priority
          />
          {/* Sophisticated gradient overlay - lighter at top for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#faf9f7]" />
        </motion.div>

        {/* Hero content - asymmetric layout */}
        <Container className="relative h-full flex flex-col justify-end pb-16 md:pb-24">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            {/* Small caps intro */}
            <p className="text-white/90 text-xs md:text-sm uppercase tracking-[0.4em] font-light mb-6">
              Wedding Invitation
            </p>

            {/* Names - dramatic scale contrast */}
            <h1 className="text-white mb-3">
              <span className="block text-7xl md:text-9xl font-light tracking-tight leading-[0.9] text-balance">
                Anne
              </span>
            </h1>
            <div className="flex items-center gap-6 mb-3 ml-2">
              <div className="h-[1px] w-16 bg-white/60" />
              <span className="text-white/80 text-2xl md:text-3xl font-light italic">
                and
              </span>
              <div className="h-[1px] w-16 bg-white/60" />
            </div>
            <h1 className="text-white mb-12">
              <span className="block text-7xl md:text-9xl font-light tracking-tight leading-[0.9] text-balance">
                John
              </span>
            </h1>

            {/* Date emphasis */}
            <div className="inline-block bg-white/95 backdrop-blur-sm px-8 py-4 rounded-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/60 mb-1">
                Saturday
              </p>
              <p className="text-2xl md:text-3xl tabular-nums font-light text-foreground">
                June 14, 2026
              </p>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="h-12 w-[1px] bg-white/40 animate-[pulse_2s_ease-in-out_infinite]" />
              <span className="text-white/60 text-xs uppercase tracking-wider">
                Scroll
              </span>
            </div>
          </motion.div>
        </Container>
      </div>

      {/* Details section - editorial grid layout */}
      <div className="bg-[#faf9f7]">
        <Container className="py-24 md:py-32">
          {/* Invitation copy - centered, elegant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-24"
          >
            <p className="text-xl md:text-2xl font-light text-foreground/80 leading-relaxed text-pretty">
              Together with their families, Anne and John request the pleasure
              of your company at the celebration of their marriage
            </p>
          </motion.div>

          {/* Details grid - asymmetric, magazine-style */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Left column - Time and Date */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-5 space-y-12"
            >
              {/* Date detail card */}
              <div className="border-l-2 border-foreground/20 pl-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-foreground/60" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-foreground/50 mb-2">
                      Date
                    </p>
                    <p className="text-3xl font-light text-foreground mb-1 tabular-nums">
                      14.06.2026
                    </p>
                    <p className="text-base text-foreground/70">Saturday</p>
                  </div>
                </div>
              </div>

              {/* Time detail card */}
              <div className="border-l-2 border-foreground/20 pl-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-foreground/60" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-foreground/50 mb-2">
                      Time
                    </p>
                    <p className="text-3xl font-light text-foreground mb-1 tabular-nums">
                      16:00
                    </p>
                    <p className="text-base text-foreground/70">
                      Ceremony begins
                    </p>
                  </div>
                </div>
              </div>

              {/* Small botanical accent image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative h-64 rounded-sm overflow-hidden hidden md:block"
              >
                <Image
                  src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=800"
                  alt="Rose detail"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Right column - Venue (larger emphasis) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-7"
            >
              {/* Large venue image */}
              <div className="relative h-96 md:h-[500px] rounded-sm overflow-hidden mb-8">
                <Image
                  src="https://images.unsplash.com/photo-1519167758481-83f29da8c86e?q=80&w=2070"
                  alt="Garden venue"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Venue text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5" />
                    <p className="text-xs uppercase tracking-[0.3em]">Venue</p>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-light mb-3 text-balance">
                    The Rosewood Gardens
                  </h2>
                  <p className="text-lg text-white/90 mb-1">
                    125 Garden Lane
                  </p>
                  <p className="text-base text-white/80">Bloomfield Estate</p>
                </div>
              </div>

              {/* Venue description */}
              <div className="pl-6 border-l-2 border-foreground/20">
                <p className="text-base font-light text-foreground/70 leading-relaxed text-pretty">
                  A stunning botanical venue surrounded by blooming gardens,
                  providing an enchanting setting for our celebration under the
                  stars.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Reception section - dark inversion for drama */}
      <div className="bg-foreground text-background py-24 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.4em] text-background/60 mb-6">
                Following the Ceremony
              </p>
              <h2 className="text-5xl md:text-6xl font-light mb-8 text-balance">
                Reception & Celebration
              </h2>
              <div className="h-[1px] w-32 bg-background/30 mx-auto mb-8" />
            </div>

            {/* Reception details grid */}
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-2xl font-light mb-2">5:00 PM</p>
                <p className="text-sm text-background/70 uppercase tracking-wider">
                  Cocktail Hour
                </p>
              </div>
              <div>
                <p className="text-2xl font-light mb-2">6:30 PM</p>
                <p className="text-sm text-background/70 uppercase tracking-wider">
                  Garden Dining
                </p>
              </div>
              <div>
                <p className="text-2xl font-light mb-2">8:00 PM</p>
                <p className="text-sm text-background/70 uppercase tracking-wider">
                  Live Music
                </p>
              </div>
              <div>
                <p className="text-2xl font-light mb-2">9:00 PM</p>
                <p className="text-sm text-background/70 uppercase tracking-wider">
                  Dancing
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg font-light text-background/80 italic text-balance">
                Dinner, dancing, and celebration under the stars
              </p>
            </div>
          </motion.div>
        </Container>
      </div>

      {/* RSVP section - clean, minimal */}
      <div className="bg-[#faf9f7] py-24 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-foreground/50 mb-6">
              Please Respond By
            </p>
            <p className="text-4xl md:text-5xl font-light mb-12 tabular-nums">
              May 1, 2026
            </p>

            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 px-12 py-6 text-base uppercase tracking-[0.2em] rounded-none transition-all duration-300 hover:scale-105"
            >
              RSVP
            </Button>

            <div className="mt-16 space-y-4">
              <p className="text-sm text-foreground/60 uppercase tracking-wider">
                Dress Code: Garden Formal
              </p>
              <div className="h-[1px] w-24 bg-foreground/20 mx-auto" />
              <p className="text-base font-light text-foreground/70 italic text-balance">
                Please join us as we begin our journey together
              </p>
            </div>
          </motion.div>
        </Container>
      </div>

      {/* Final botanical image - full bleed footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative h-[50vh] md:h-[60vh]"
      >
        <Image
          src="https://images.unsplash.com/photo-1465146633011-14f8e0781093?q=80&w=2070"
          alt="Garden flowers"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f7] via-transparent to-transparent" />
      </motion.div>
    </div>
  )
}
