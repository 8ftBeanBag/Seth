import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen bg-gradient-to-r from-sky-300 to-sky-100">
      <div className='fixed top-12 left-12'>
        <button className='rounded-full border-white border-solid text-white border-2 px-6 py-4'>About</button>
      </div>
      <div className='flex flex-col items-center mx-auto my-24 p-64 gap-4 overflow-scroll'>
        <p className='text-center'>We can get through this together if you give it a chance ❤️</p>
        <div>
          <button className="py-12 px-12 bg-rose-900 text-white rounded-lg">Help Me</button>
        </div>
        <div className='flex gap-2'>
          <button className="block w-48 py-12 px-12 bg-rose-700 text-white rounded-lg">I'm in Danger</button>
          <button className="block w-48 py-12 px-12 bg-rose-700 text-white rounded-lg">Just want to talk</button>
        </div>
        <div className='flex gap-2'>
          <button className="block w-48 py-12 px-12 bg-rose-600 text-white rounded-lg">Feeling anxious</button>
          <button className="block w-48 py-12 px-12 bg-rose-600 text-white rounded-lg">Feeling depressed</button>
        </div>
        <div className='flex gap-2'>
          <button className="block w-48 py-12 px-12 bg-rose-400 text-white rounded-lg">Abusing subtances</button>
          <button className="block w-48 py-12 px-12 bg-rose-400 text-white rounded-lg">Helping someone else</button>
        </div>
      </div>
    </main>
  )
}
