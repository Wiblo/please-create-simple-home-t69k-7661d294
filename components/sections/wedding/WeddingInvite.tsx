import { Container } from '@/components/layout/Container'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Clock, Heart } from 'lucide-react'
import Image from 'next/image'

export function WeddingInvite() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 dark:from-rose-950 dark:via-pink-950 dark:to-purple-950">
      {/* Hero background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?q=80&w=2070"
          alt="Beautiful pink and white roses"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90 dark:from-black/80 dark:via-black/60 dark:to-black/90" />
      </div>

      <SectionWrapper className="relative z-10">
        <Container className="max-w-5xl">
          {/* Floating floral decorations */}
          <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 -translate-x-8 -translate-y-8 opacity-80">
            <Image
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2070"
              alt="Decorative flowers"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 translate-x-8 -translate-y-8 opacity-80 scale-x-[-1]">
            <Image
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2070"
              alt="Decorative flowers"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 w-48 h-48 md:w-64 md:h-64 opacity-70">
            <Image
              src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=2070"
              alt="Decorative floral arrangement"
              fill
              className="object-contain"
            />
          </div>

          {/* Main invitation card */}
          <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-2 border-rose-200 dark:border-rose-800 rounded-3xl p-8 md:p-16 shadow-2xl">
            {/* Watercolor effect overlay */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-300 via-rose-300 to-transparent blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-300 via-pink-300 to-transparent blur-3xl" />
            </div>

            <div className="relative z-10 text-center space-y-10">
              {/* Elegant script header */}
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-rose-400 to-rose-400" />
                  <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                  <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent via-rose-400 to-rose-400" />
                </div>
                <p className="text-sm md:text-base text-rose-600 dark:text-rose-400 uppercase tracking-[0.3em] font-light">
                  Together with their families
                </p>
              </div>

              {/* Couple names with elegant styling */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-6xl md:text-8xl font-serif font-light text-balance bg-gradient-to-r from-rose-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Anne
                  </h1>
                  <div className="flex items-center justify-center gap-4">
                    <div className="relative w-8 h-8 animate-pulse">
                      <Image
                        src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=800"
                        alt="Rose"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-4xl md:text-5xl font-light text-rose-400">&</span>
                    <div className="relative w-8 h-8 animate-pulse">
                      <Image
                        src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=800"
                        alt="Rose"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h1 className="text-6xl md:text-8xl font-serif font-light text-balance bg-gradient-to-r from-purple-600 via-pink-500 to-rose-600 bg-clip-text text-transparent">
                    John
                  </h1>
                </div>
              </div>

              {/* Invitation message */}
              <div className="space-y-4 max-w-2xl mx-auto">
                <p className="text-xl md:text-2xl font-serif text-gray-700 dark:text-gray-300 text-balance italic">
                  Request the pleasure of your company
                </p>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 text-balance">
                  at the celebration of their marriage
                </p>
              </div>

              {/* Decorative floral divider */}
              <div className="flex items-center justify-center gap-2 py-6">
                <div className="relative w-6 h-6">
                  <Image
                    src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=800"
                    alt="Flower"
                    fill
                    className="object-contain opacity-60"
                  />
                </div>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
                <div className="relative w-8 h-8">
                  <Image
                    src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=800"
                    alt="Flower"
                    fill
                    className="object-contain opacity-80"
                  />
                </div>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
                <div className="relative w-6 h-6">
                  <Image
                    src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=800"
                    alt="Flower"
                    fill
                    className="object-contain opacity-60"
                  />
                </div>
              </div>

              {/* Wedding details with elegant cards */}
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  {/* Date card */}
                  <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950 dark:to-pink-950 rounded-2xl p-6 border border-rose-200 dark:border-rose-800 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-lg">
                        <Calendar className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-rose-600 dark:text-rose-400 uppercase tracking-wider font-medium">
                          Date
                        </p>
                        <p className="text-xl md:text-2xl font-serif font-medium mt-2 text-gray-800 dark:text-gray-200">
                          Saturday
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                          June 14th, 2026
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Time card */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-2xl p-6 border border-purple-200 dark:border-purple-800 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shadow-lg">
                        <Clock className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-purple-600 dark:text-purple-400 uppercase tracking-wider font-medium">
                          Time
                        </p>
                        <p className="text-2xl md:text-3xl font-serif font-medium mt-2 text-gray-800 dark:text-gray-200">
                          4:00 PM
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Ceremony begins
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Venue card - full width */}
                <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 dark:from-pink-950 dark:via-rose-950 dark:to-purple-950 rounded-2xl p-8 border border-pink-200 dark:border-pink-800 shadow-lg hover:shadow-xl transition-shadow max-w-3xl mx-auto">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 via-rose-400 to-purple-500 flex items-center justify-center shadow-lg">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-rose-600 dark:text-rose-400 uppercase tracking-wider font-medium">
                        Venue
                      </p>
                      <p className="text-2xl md:text-3xl font-serif font-medium mt-2 text-gray-800 dark:text-gray-200">
                        The Rosewood Gardens
                      </p>
                      <p className="text-base text-gray-600 dark:text-gray-400 mt-2">
                        125 Garden Lane, Bloomfield Estate
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-1 italic">
                        A stunning botanical venue surrounded by blooming gardens
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reception details with flower accent */}
              <div className="bg-gradient-to-r from-rose-100/50 via-pink-100/50 to-purple-100/50 dark:from-rose-900/30 dark:via-pink-900/30 dark:to-purple-900/30 rounded-2xl p-6 max-w-2xl mx-auto border border-rose-200/50 dark:border-rose-800/50">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="relative w-5 h-5">
                    <Image
                      src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=800"
                      alt="Flower"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-lg font-medium text-rose-700 dark:text-rose-300">
                    Reception to Follow
                  </p>
                  <div className="relative w-5 h-5">
                    <Image
                      src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=800"
                      alt="Flower"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Dinner, dancing, and celebration under the stars
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2 italic">
                  Cocktail hour • Garden dining • Live music • Dancing
                </p>
              </div>

              {/* RSVP button with gradient */}
              <div className="pt-8">
                <Button
                  size="lg"
                  className="text-lg px-10 py-6 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 shadow-2xl hover:shadow-rose-300 dark:hover:shadow-rose-900 transition-all duration-300 text-white border-0 hover:scale-105"
                >
                  RSVP by May 1st, 2026
                </Button>
              </div>

              {/* Footer with romantic quote */}
              <div className="pt-6 space-y-2">
                <p className="text-base md:text-lg font-serif italic text-gray-600 dark:text-gray-400 text-balance">
                  &ldquo;Love is the flower you&rsquo;ve got to let grow&rdquo;
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Please join us as we begin our journey together
                </p>
              </div>

              {/* Dress code */}
              <div className="pt-4 pb-2">
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Dress Code: Garden Formal
                </p>
              </div>
            </div>
          </div>

          {/* Additional floating floral elements */}
          <div className="absolute bottom-12 left-8 w-24 h-24 md:w-32 md:h-32 opacity-60 animate-pulse hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=800"
              alt="Decorative rose"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-12 right-8 w-24 h-24 md:w-32 md:h-32 opacity-60 animate-pulse hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=800"
              alt="Decorative rose"
              fill
              className="object-contain"
            />
          </div>
        </Container>
      </SectionWrapper>
    </div>
  )
}
