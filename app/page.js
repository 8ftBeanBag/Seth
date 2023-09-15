import Image from 'next/image'
export default function Home() {
  return (
    <main className="min-h-screen min-w-screen bg-gradient-to-r from-sky-300 to-sky-100 flex justify-center">
      <div className='fixed top-12 left-12'>
        <button className='rounded-full border-white border-solid text-white border-2 px-6 py-4'>About</button>
      </div>
      <div className='flex flex-col items-center py-32 gap-4 w-96'>
        <h1 className='text-center font-sans'>We can get through this together if you give it a chance ❤️</h1>
        <div>
          <button className="py-12 px-12 bg-rose-900 text-white rounded-lg">Help Me</button>
        </div>
        <div className='flex gap-2'>
          <button className="block w-44 py-12 px-12 bg-rose-700 text-white rounded-lg">I'm in Danger</button>
          <button className="block w-44 py-12 px-12 bg-rose-700 text-white rounded-lg">Just want to talk</button>
          <button className="block w-44 py-12 px-12 bg-rose-600 text-white rounded-lg">Feeling anxious</button>
          <button className="block w-44 py-12 px-12 bg-rose-600 text-white rounded-lg">Feeling depressed</button>
          <button className="block w-44 py-12 px-12 bg-rose-400 text-white rounded-lg">Abusing subtances</button>
          <button className="block w-44 py-12 px-12 bg-rose-400 text-white rounded-lg">Helping someone else</button>  
        </div>
      </div>
    </main>
  )
}
