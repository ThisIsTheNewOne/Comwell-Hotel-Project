import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import Link from 'next/link'; // Import the Link component

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    <Header /> {/* Use the Header component */}
    <div>This is the new project I am working on right now </div>
    <Link href="/Info"> {/* Add the Link component */}
        <button>Go to Info Page</button>
      </Link>
    </main>
  )
}
