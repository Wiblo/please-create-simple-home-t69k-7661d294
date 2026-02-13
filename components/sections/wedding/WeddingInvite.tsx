import { Container } from '@/components/layout/Container'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Clock } from 'lucide-react'

export function WeddingInvite() {
  return (
    <SectionWrapper className="bg-gradient-to-b from-background via-secondary/20 to-background">
      <Container className="max-w-4xl">
        <div className="relative">
          {/* Decorative floral corner elements */}
          <div className="absolute -top-8 -left-8 md:-top-12 md:-left-12 w-24 h-24 md:w-32 md:h-32 opacity-20">
            <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
              <path
                fill="currentColor"
                d="M100,20 Q120,40 100,60 Q80,40 100,20 M60,40 Q80,60 60,80 Q40,60 60,40 M140,40 Q160,60 140,80 Q120,60 140,40"
              />
              <circle cx="100" cy="50" r="8" fill="currentColor" />
              <circle cx="60" cy="60" r="6" fill="currentColor" />
              <circle cx="140" cy="60" r="6" fill="currentColor" />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M100,60 Q90,80 85,100 M100,60 Q110,80 115,100"
              />
            </svg>
          </div>
          <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 w-24 h-24 md:w-32 md:h-32 opacity-20 rotate-180">
            <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
              <path
                fill="currentColor"
                d="M100,20 Q120,40 100,60 Q80,40 100,20 M60,40 Q80,60 60,80 Q40,60 60,40 M140,40 Q160,60 140,80 Q120,60 140,40"
              />
              <circle cx="100" cy="50" r="8" fill="currentColor" />
              <circle cx="60" cy="60" r="6" fill="currentColor" />
              <circle cx="140" cy="60" r="6" fill="currentColor" />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M100,60 Q90,80 85,100 M100,60 Q110,80 115,100"
              />
            </svg>
          </div>

          {/* Main invitation card */}
          <div className="bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Subtle floral background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-primary blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-32 h-32 rounded-full bg-primary blur-3xl" />
            </div>

            <div className="relative z-10 text-center space-y-8">
              {/* Header */}
              <div className="space-y-2">
                <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-light">
                  Together with their families
                </p>
              </div>

              {/* Names */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-serif font-light text-balance text-primary">
                  Anne & John
                </h1>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px w-12 bg-primary/30" />
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-primary"
                    fill="currentColor"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <div className="h-px w-12 bg-primary/30" />
                </div>
              </div>

              {/* Invitation text */}
              <div className="space-y-3 max-w-2xl mx-auto">
                <p className="text-lg md:text-xl text-foreground font-light text-balance">
                  Request the honor of your presence at their wedding celebration
                </p>
              </div>

              {/* Wedding details */}
              <div className="space-y-6 pt-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="text-base md:text-lg font-medium">
                        Saturday, June 14th, 2026
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">Time</p>
                      <p className="text-base md:text-lg font-medium">
                        4:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Venue</p>
                    <p className="text-base md:text-lg font-medium">
                      The Rosewood Gardens
                    </p>
                    <p className="text-sm text-muted-foreground">
                      125 Garden Lane, Bloomfield Estate
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative divider */}
              <div className="flex items-center justify-center gap-3 py-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                </div>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
              </div>

              {/* Reception info */}
              <div className="space-y-2">
                <p className="text-base text-muted-foreground">
                  Reception to follow ceremony
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Dinner, dancing, and celebration under the stars
                </p>
              </div>

              {/* RSVP button */}
              <div className="pt-6">
                <Button
                  size="lg"
                  className="text-base px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  RSVP by May 1st, 2026
                </Button>
              </div>

              {/* Footer note */}
              <div className="pt-4">
                <p className="text-sm text-muted-foreground italic">
                  Please join us as we begin our journey together
                </p>
              </div>
            </div>
          </div>

          {/* Additional decorative flowers */}
          <div className="absolute top-1/2 -left-4 w-16 h-16 opacity-10 hidden md:block">
            <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
              <circle cx="50" cy="50" r="8" fill="currentColor" />
              <circle cx="50" cy="30" r="12" fill="currentColor" />
              <circle cx="70" cy="50" r="12" fill="currentColor" />
              <circle cx="50" cy="70" r="12" fill="currentColor" />
              <circle cx="30" cy="50" r="12" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute top-1/2 -right-4 w-16 h-16 opacity-10 hidden md:block">
            <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
              <circle cx="50" cy="50" r="8" fill="currentColor" />
              <circle cx="50" cy="30" r="12" fill="currentColor" />
              <circle cx="70" cy="50" r="12" fill="currentColor" />
              <circle cx="50" cy="70" r="12" fill="currentColor" />
              <circle cx="30" cy="50" r="12" fill="currentColor" />
            </svg>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
