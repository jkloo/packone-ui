import { CardFlattened } from "../models/card-flattened"

export type Store = {
    cards: CardFlattened[]
    loading: boolean
    fetch: () => Promise<void>
}