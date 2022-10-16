import { useDisconnect, useAddress, useMetamask } from "@thirdweb-dev/react";
import { NextPage } from "next";
import Link from "next/link";

const NftDropPage: NextPage = () => {

    const connectWithMetamask = useMetamask()
    const address = useAddress()
    const disconnect = useDisconnect()

    const connectHandler = () => {
        connectWithMetamask()
    }

    const disconnectHandler = () => {
        disconnect()
    }

    return (

        // Left Side

        <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">

            <div className="lg:col-span-4 bg-gradient-to-br from-red-600 to-blue-600">
                <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
                    <div className="bg-gradient-to-br from-zinc-500 to-slate-500 p-2 rounded-md">
                        <img className="w-44 rounded-xl object-cover lg:h-96 lg:w-72" src="https://lh3.googleusercontent.com/c23ogUs6fK2IqC015AierXXmp0zX0410WzLMXLPK1ZZ_3qaJIqr2Yxj1o2gwE6tI3ozdR97Q4VjcsQJPOcYZZwiFyHRWwYXp0n3562A" alt="nft-card" />
                    </div>

                    <div className="p-5 text-center space-y-2">
                        <h1 className="text-4xl font-bold text-white">NFT Collections</h1>
                        <h2 className="text-xl text-gray-300">A collections of NFT Apes in React</h2>
                    </div>
                </div>
            </div>

            {/* Right Side */}

            <div className="flex flex-1 flex-col p-12 lg:col-span-6">
                {/* header */}
                <header className="flex items-center justify-between">
                    <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">The NEW <span className="font-extrabold underline">NFT</span> Marketplace</h1>

                    <button className="rounded-full bg-black text-white px-4 py-2 text-sm font-bold lg:px-5 lg:py-3 lg:text-base" onClick={address ? disconnectHandler : connectHandler}> {address ? 'Sign out' : 'Sign in'} </button>
                </header>

                <hr className="my-2 border" />

                {address && <p className="text-center">You are logged with this address <span className="font-bold text-blue-500">{address.substring(0, 5)}...{address.substring(address.length - 5)}</span></p>}
                {/* Main */}

                <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg: justify-center">
                    <img className="w-80 object-cover pb-10 lg:h-40" src="https://sk.forbesmedia.cz/uploads/2022/05/nft-trh-prepad-forbes2.jpg" alt="" />

                    <h1 className="font-bold text-3xl lg:text-5xl lg:font-extrabold">NFT Drop Bored Apes | From 15 - 20 October</h1>

                    <p className="font-light pt-2 text-green-500 text-xl">13/20 NFT Claimed</p>
                </div>

                {/* Button */}

                <button className="mt-10 h-16 w-full bg-black text-white rounded-full font-semibold">
                    <Link href="/nft/cyber/claimed">Mint NFT (0.01 ETH)</Link>
                </button>
            </div>

        </div>
    )
}

export default NftDropPage