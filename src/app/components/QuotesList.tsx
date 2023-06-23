import { store } from "@/redux/store";
import QuoteItem from "./QuoteItem";

export default function QuotesList() {

    const quotes = store.getState().quotes;

    return quotes.map(q => <QuoteItem key={q} quote={q} />);
}
