import FavoriteButton from "./FavoriteButton";

export default function QuoteItem({ quote }: {
    quote: string;
}) {
    return <div className="my-3 p-3 rounded-lg bg-gray-800 text-xl flex justify-between">
        <p>{quote}</p>
        <FavoriteButton quote={quote} />
    </div>
}
