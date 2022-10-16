import { NextPage } from "next"
import Link from "next/link"

const ClaimedPage: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center space-y-5">
            <h1 className="text-7xl font-extrabold">Congratulations!</h1>
            <p className="text-2xl font-light">You claimed a NFT</p>
            <button className="text-xl bg-black text-white px-10 py-4 rounded-full">
                <Link href="/nft/cyber">Back</Link>
            </button>
        </div>
    )
}

export default ClaimedPage