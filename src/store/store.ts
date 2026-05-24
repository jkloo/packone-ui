import { create } from 'zustand'
import { combine } from 'zustand/middleware'

import { Store } from '.'
import { CardFlattened } from '../models/card-flattened'

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const useAppStore = create<Store>(combine(
  {
    cards: [] as CardFlattened[],
    loading: false
  },
  (set) => ({
    fetch: async () => {
      set(
        () => ({ loading: true })
      )
      await delay(1500)
      const response = await fetch("http://localhost:3000/api/pack")
      const cards = await response.json() as CardFlattened[]

      set(
        () => ({ cards, loading: false })
      )
    }
  })
))
