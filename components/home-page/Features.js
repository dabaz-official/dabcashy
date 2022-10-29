import FeatureTabs from "./FeatureTabs";

export default function Features() {
  return (
    <section id="features" aria-label="Features" className="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32">
      <img alt="Background of features section" src="/images/features-background.jpg" className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]" loading="lazy" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Simplify your budget & expense management.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Take a simple step to record your income and spending everyday.
          </p>
        </div>
        <FeatureTabs />
      </div>
    </section>
  )
}