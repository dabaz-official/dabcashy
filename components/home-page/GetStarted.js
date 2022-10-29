export default function GetStarted() {
  return (
    <section id="get-started" className="relative overflow-hidden bg-white py-32 bg-[url('/images/get-started-background.jpg')] bg-cover">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-blue-600 sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            It&apos;s time to take control of your finance. Buy our premium membership and save more money.
          </p>
          <a className="group inline-flex items-center justify-center rounded-xl py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700 focus-visible:outline-white mt-10 transition duration-200" href="#">
            Purchase
          </a>
        </div>
      </div>
    </section>
  )
}