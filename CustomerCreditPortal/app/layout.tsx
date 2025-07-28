import './styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Providers } from './providers'
import { Navigation } from './components/navigation'

export const metadata = {
  title: 'Customer Credit Portal',
  description: 'Customer Credit Portal - Next.js Application for Vercel deployment with PostgreSQL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Providers>
          <div className="min-h-screen bg-background">
            <header className="border-b">
              <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold text-foreground">
                    Customer Credit Portal
                  </h1>
                  <Navigation />
                </div>
              </div>
            </header>
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}