import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/comp/Nav'
import MainSection from '@/comp/MainSection'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='main__container'>
       <Nav />
       <MainSection />
    </main>
  )
}
