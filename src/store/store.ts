import { create } from 'zustand'
import { combine } from 'zustand/middleware'

import { Store } from '.'
import { CardFlattened } from '../models/card-flattened'
import { getPack } from '../api/endpoint';
import { APIResponse } from '../api/models';

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
      await delay(1000)
      const response = await getPack()
      set(() => ({ ...response, loading: false }))
    },
    update: async (response: APIResponse) => {
      set(() => ({ loading: true }))
      await delay(1000)
      set(() => ({ ...response, loading: false }))
    }
  })
))
