import Link from "next/link";
import FavoritesQuotesList from "../components/FavoriteQuotesList";

export default function Favorites() {
    return <>
        <Link href="/quotes" className="bg-red-500 px-4 mx-2 py-2 rounded-lg">Quotes</Link>
        <FavoritesQuotesList />
    </>
}
