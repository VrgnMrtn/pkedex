import { PokmonProviers } from "@/context/PokmonProviders"

export const metadata = {
  title: "Pkedex",
  description: 'Generated  by Vercel',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className='bg-gradient-to-r from-secondary ...'>
      <body>
        <div className='w-11/12'>
          <PokmonProviers>
            {children}
          </PokmonProviers>
        </div>
      </body>
    </html>
  )
}