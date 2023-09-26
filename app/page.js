import HelpButton from './HelpButton'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen flex justify-center">
      <div className='flex flex-col items-center py-32 gap-4'>
        <Link href="/help"><button className='block w-44 py-12 px-12 text-white rounded-lg font-mont bg-bitter'>Help Me</button></Link>
        <div className='flex gap-2'>
          <HelpButton title={'Just want to talk'}></HelpButton>
          <HelpButton title={'Feeling anxious'}></HelpButton>
          <HelpButton title={'Feeling depressed'}></HelpButton>
          <HelpButton title={'Abusing substances'}></HelpButton>
          <HelpButton title={'Helping someone else'}></HelpButton>
        </div>
      </div>
    </main>
  )
}
