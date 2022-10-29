import DropdownMenu from "./DropdownMenu"

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
]

export default function Header() {
  return (
    <header className="py-5">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <a aria-label="Home" className="/">
              <img 
                src="/logos/primary-logo-text.svg"
                alt="Primary Logo with Text"
                className="h-9 w-auto hidden md:block"
              />
              <img 
                src="/logos/primary-logo.svg"
                alt="Primary Logo"
                className="h-9 w-auto block md:hidden"
              />
            </a>
            <div className="hidden md:flex md:gap-x-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <a className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition duration-200" href="/login">
                Sign in
              </a>
            </div>
            <a className="group inline-flex items-center justify-center rounded-xl py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-700 active:text-blue-100 focus-visible:outline-blue-600 transition duration-200" href="/register">
              <span>
                Get started{" "}
                <span className="hidden lg:inline">today</span>
              </span>
            </a>
            <div className="-mr-1 md:hidden">
              <DropdownMenu />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}