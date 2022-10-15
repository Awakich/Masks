import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-center text-4xl font-bold'>Welcome to NFT Challenge</h1>
      <button className='text-2xl font-bold my-5 bg-blue-500 rounded-full p-5 text-white'>
        <Link href="/nft/cyber">Show More</Link>
      </button>
    </div>
  )
}

export default Home
