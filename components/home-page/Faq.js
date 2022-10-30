const topThree = [
  { 
    id: 1,
    question: 'What is budget & expense management?', 
    answer: 'In business accounting, it is a process of overseeing and tracking income and expenses. In real life, it is a process of taking control over your money and assets.'
  },
  { 
    id: 2,
    question: 'What is DabCashy?', 
    answer: 'DabCashy is a bit different from what the real companies are using, which makes it easy for non-professional to use. And it is actually a money tracker, where you can track your money and usage.' 
  },
]
const middleThree = [
  { 
    id: 1,
    question: 'What if I forget my password?', 
    answer: 'Considering the privacy of users, we do not allow user to change or reset their password. So make sure you remember your password.' 
  },
  { 
    id: 2,
    question: 'Can I pay for my subscription via Payoneer?', 
    answer: 'We are happy to take your money in all forms, but unfortunately you need to pay via PayPal and Stripe. Other payment platforms are not supported. We are still working on supporting more payment platforms.' 
  },
]

export default function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden bg-[url('/images/faq-background.jpg')] bg-cover py-20 sm:py-32 h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 id="faq-title" className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can&apos;t find what you&apos;re looking for,{" "}
            <a href="mailto:support@dabcashy.com" className="underline underline-offset-2 hover:text-blue-600 transition duration-200">
              email
            </a> 
            {" "}our support team.
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          <li>
            <ul className="flex flex-col gap-y-8">
              {topThree.map((item) => (
                <li key={item.id}>
                  <h3 className="font-display text-lg leading-7 text-slate-900">
                    {item.question}
                  </h3>
                  <p className="mt-4 text-sm text-slate-700">
                    {item.answer}
                  </p>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <ul className="flex flex-col gap-y-8">
              {middleThree.map((item) => (
                <li key={item.id}>
                  <h3 className="font-display text-lg leading-7 text-slate-900">
                    {item.question}
                  </h3>
                  <p className="mt-4 text-sm text-slate-700">
                    {item.answer}
                  </p>
                </li>
              ))}
            </ul>
          </li>
          <li></li>
        </ul>
      </div>
    </section>
  )
}