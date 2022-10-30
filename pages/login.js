import Head from "next/head";

export default function Login() {
  return (
    <div className="h-screen">
      <Head>
        <title>Sign in - DabCashy</title>
        <link rel="icon" href="/logos/primary-logo.svg" />
      </Head>

      <main className="relative flex min-h-full justify-center md:px-12 lg:px-0">
        <div className="relative z-10 flex flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28">
          <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
            <div className="flex flex-col">
              <a aria-label="Home" href="/">
                <img
                  src="/logos/primary-logo-text.svg"
                  alt="Primary Logo with Text"
                  className="h-10 w-auto"
                />
              </a>
              <div className="mt-20">
                <h2 className="text-lg font-semibold text-gray-900">
                  Sign in to your account
                </h2>
                <p className="mt-2 text-sm text-gray-700">
                  Don&apos;t have an account?{" "}
                  <a className="font-medium text-blue-600 hover:underline transition duration-200" href="/register">
                    Sign up
                  </a>
                  .
                </p>
              </div>
            </div>
            <form action="sbumit" className="mt-10 grid grid-cols-1 gap-y-8">
              <div>
                <label for="email" className="mb-3 block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="block w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm transition duration-200"
                />
              </div>
              <div>
                <label for="password" className="mb-3 block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  className="block w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm transition duration-200"
                />
              </div>
              <div>
                <button className="group inline-flex items-center justify-center rounded-xl py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 w-full transition duration-200" type="submit">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
          <img 
            src="/images/login-background.jpg"
            alt="Login Background"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </main>
    </div>
  )
}