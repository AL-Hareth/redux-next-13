"use client";

import { useSelector } from "react-redux";
import QuoteItem from "./QuoteItem";

export default function FavoritesQuotesList() {
    const favorites: string[] = useSelector((state: any) => state.favorites);
    return favorites.map(q => <QuoteItem key={q} quote={q} />);
}
