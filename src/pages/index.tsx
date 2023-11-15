import LocalizedLink from '@/components/molecules/LocalizedLink'
import { Inter } from 'next/font/google'
// import Header from '@/components/Header/Header'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
    <div>This is the new project I am working on right now </div>
      <LocalizedLink href="/Info"> {/* Add the Link component */}
          <button>Go to Info Page</button>
      </LocalizedLink>
  </>
  )
}
