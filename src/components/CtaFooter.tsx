import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Clock, Users } from 'lucide-react'

const trustIndicators = [
  { icon: Shield, label: 'Bank-grade security' },
  { icon: Clock, label: '24/7 support' },
  { icon: Users, label: '50k+ teams' },
]

export function CtaFooter() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #007BFF 0%, #9D00FF 50%, transparent 70%)',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative mx-auto max-w-5xl px-4">
        {/* Glassmorphic Card */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-background/40 p-8 backdrop-blur-xl sm:p-12 lg:p-16">
          {/* Neon Accent Border */}
          <div
            className="absolute inset-0 rounded-3xl opacity-50"
            style={{
              background: 'linear-gradient(135deg, #007BFF 0%, #9D00FF 100%)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              padding: '1px',
            }}
          />

          {/* Content */}
          <div className="relative text-center">
            {/* Headline */}
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Ready to Transform Your
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Workflow Experience?
              </span>
            </h2>

            {/* Supporting Text */}
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg lg:text-xl">
              Join thousands of teams who've already streamlined their async workflows.
              Start your free trial today—no credit card required.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-[#007BFF] px-8 py-6 text-base font-semibold text-white transition-all hover:bg-[#0056b3] hover:shadow-[0_0_30px_rgba(0,123,255,0.5)] sm:text-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent px-8 py-6 text-base font-semibold backdrop-blur-sm hover:border-white/30 hover:bg-white/5 sm:text-lg"
              >
                Schedule Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
              {trustIndicators.map((indicator) => {
                const Icon = indicator.icon
                return (
                  <div
                    key={indicator.label}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Icon className="h-5 w-5 text-blue-400" strokeWidth={2} />
                    <span>{indicator.label}</span>
                  </div>
                )
              })}
            </div>

            {/* Secondary Links */}
            <div className="mt-8 flex items-center justify-center gap-6 text-sm">
              <a
                href="#pricing"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                View Pricing
              </a>
              <span className="text-muted-foreground/40">•</span>
              <a
                href="#faq"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                FAQs
              </a>
              <span className="text-muted-foreground/40">•</span>
              <a
                href="#contact"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Credits */}
      <div className="relative mt-16 text-center">
        <p className="text-sm text-muted-foreground/60">
          © 2026 FlowState. All rights reserved.
        </p>
      </div>
    </section>
  )
}
