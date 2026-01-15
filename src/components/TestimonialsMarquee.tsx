import { Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote: 'FlowState transformed how our team handles async work. We ship faster and with more confidence than ever before.',
    author: 'Sarah Chen',
    role: 'Engineering Manager',
    company: 'TechCorp',
  },
  {
    id: 2,
    quote: 'The automation capabilities saved us countless hours. It\'s like having an extra team member who never sleeps.',
    author: 'Michael Rodriguez',
    role: 'CTO',
    company: 'StartupXYZ',
  },
  {
    id: 3,
    quote: 'Finally, a workflow tool that actually understands how modern development teams work. Absolutely game-changing.',
    author: 'Emily Watson',
    role: 'Product Lead',
    company: 'InnovateLabs',
  },
  {
    id: 4,
    quote: 'We reduced our deployment time by 60% in the first month. FlowState pays for itself instantly.',
    author: 'David Kim',
    role: 'DevOps Engineer',
    company: 'CloudScale',
  },
  {
    id: 5,
    quote: 'The best part? Our junior developers can orchestrate complex workflows without breaking a sweat.',
    author: 'Jessica Martinez',
    role: 'Senior Developer',
    company: 'CodeCraft',
  },
  {
    id: 6,
    quote: 'Intuitive, powerful, and reliable. Everything we needed in a workflow automation platform.',
    author: 'Alex Thompson',
    role: 'Head of Engineering',
    company: 'DataFlow Inc',
  },
]

export function TestimonialsMarquee() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Section Header */}
      <div className="container mx-auto mb-12 px-4 text-center lg:mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Loved by Teams Worldwide
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          See what developers and engineering leaders are saying about FlowState
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Fade Edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent sm:w-32 lg:w-48" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent sm:w-32 lg:w-48" />

        {/* Scrolling Track */}
        <div className="flex gap-6 overflow-hidden">
          {/* First set of testimonials */}
          <div className="flex min-w-full shrink-0 animate-marquee gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={`first-${testimonial.id}`} testimonial={testimonial} />
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex min-w-full shrink-0 animate-marquee gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={`second-${testimonial.id}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  testimonial: {
    id: number
    quote: string
    author: string
    role: string
    company: string
  }
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="group relative w-80 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-background/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-background/50 sm:w-96 sm:p-8">
      {/* Subtle Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Quote Icon */}
      <div className="relative mb-4 inline-flex">
        <Quote
          className="h-8 w-8 text-blue-400 transition-transform duration-300 group-hover:scale-110"
          strokeWidth={1.5}
        />
      </div>

      {/* Quote Text */}
      <p className="relative mb-6 text-sm leading-relaxed text-foreground/90 sm:text-base">
        "{testimonial.quote}"
      </p>

      {/* Author Info */}
      <div className="relative border-t border-white/10 pt-4">
        <p className="font-semibold text-foreground">{testimonial.author}</p>
        <p className="text-sm text-muted-foreground">
          {testimonial.role} at {testimonial.company}
        </p>
      </div>
    </div>
  )
}
