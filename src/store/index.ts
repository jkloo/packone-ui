import { CardFlattened } from "../models/card-flattened"

export interface Store {
    cards: CardFlattened[]
    loading: boolean
    created: Date | null
    expires: Date | null
    fetch: () => Promise<void>
}
