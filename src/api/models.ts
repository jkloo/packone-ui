import { CardFlattened } from "../models/card-flattened"

export type APIResponse = {
  cards: CardFlattened[]
  created: Date
  expires: Date
}