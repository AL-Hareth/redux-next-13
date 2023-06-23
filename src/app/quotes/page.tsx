import { addQuotes } from "@/redux/quotesSlice";
import { store } from "@/redux/store";
import Link from "next/link";
import QuotesList from "../components/QuotesList";

export default async function Quotes() {
    const res = await fetch("https://api.quotable.io/quotes/");
    const data: string[] = (await res.json()).results.map((q: any) => q.content);

    store.dispatch(addQuotes(data));

    return <>
        <Link href="/favorites" className="bg-green-500 px-4 py-2 rounded-lg">Favorite Quotes</Link>
        <QuotesList />
    </>;

}
