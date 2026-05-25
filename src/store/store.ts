import { create } from 'zustand'
import { combine } from 'zustand/middleware'

import { Store } from '.'
import { CardFlattened } from '../models/card-flattened'
import { getPack } from '../api/endpoint';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const useAppStore = create<Store>(combine(
  {
    cards: [] as CardFlattened[],
    created: null as Date | null,
    expires: null as Date | null,
    loading: false
  },
  (set) => ({
    fetch: async () => {
      set(() => ({ loading: true }))
      await delay(1500)
      
      const response = await getPack()

      set(
        () => ({ ...response, loading: false })
      )
    }
  })
))
