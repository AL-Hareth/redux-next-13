"use client";

import { addQuote, removeQuote } from "@/redux/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";

export default function FavoriteButton({ quote }: {
    quote: string;
}) {

    const favorites: string[] = useSelector((state: any) => state.favorites);
    const dispatch = useDispatch();

    return favorites.includes(quote)
        ? <button
            className="rounded-lg bg-yellow-900 px-4 py-2"
            onClick={() => dispatch(removeQuote(quote))}
        >Un favorite</button>
        : <button
            className="rounded-lg bg-zinc-900 px-4 py-2"
            onClick={() => dispatch(addQuote(quote))}
        >favorite</button>
}
