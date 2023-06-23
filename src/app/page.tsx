import Link from "next/link";

export default function Home() {
    return <>
        <Link href="/quotes" className="bg-red-500 px-4 mx-2 py-2 rounded-lg">Quotes</Link>
        <Link href="/favorites" className="bg-green-500 px-4 py-2 rounded-lg">Favorite Quotes</Link>
    </>
}
