import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import Link from 'next/link'; // Import the Link component

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
    <div>This is the new project I am working on right now </div>
      <Link href="/Info"> {/* Add the Link component */}
          <button>Go to Info Page</button>
      </Link>
  </>
  )
}
