import LocalizedLink from '@/components/molecules/LocalizedLink'


export default function Home() {
  return (
  <>
    <div>This is the main header </div>
    
    
      <LocalizedLink href="/Info"> 
          <button>Go to Info Page</button>
      </LocalizedLink>
  </>
  )
}
