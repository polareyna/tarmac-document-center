import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Profile from '@/components/Profile'
import Browser from '@/components/Browser'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <Header/>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Profile/>
        <Browser/>
      </main>
    </>
  )
}
