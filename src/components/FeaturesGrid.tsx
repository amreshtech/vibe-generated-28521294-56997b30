import { Zap, Lock, Workflow } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Execute workflows at blazing speeds with optimized async processing and intelligent task scheduling.',
    accentColor: '#007BFF',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description:
      'Bank-grade encryption and compliance standards ensure your data stays protected at every step.',
    accentColor: '#9D00FF',
  },
  {
    icon: Workflow,
    title: 'Smart Automation',
    description:
      'AI-powered workflow orchestration that learns from your patterns and optimizes task execution.',
    accentColor: '#007BFF',
  },
]

export function FeaturesGrid() {
  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Built for Modern Teams
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Everything you need to streamline async workflows and boost productivity
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-background/40 p-8 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-background/50"
              >
                {/* Neon Glow Effect on Hover */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${feature.accentColor}, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div className="relative mb-6 inline-flex">
                  <Icon
                    className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.5}
                    style={{ color: feature.accentColor }}
                  />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold tracking-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
