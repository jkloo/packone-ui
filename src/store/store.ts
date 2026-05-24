import { create } from 'zustand'
import { combine } from 'zustand/middleware'

import { Store } from '.'

export const useAppStore = create<Store>(combine(
    {},
    (_, __) => ({
        hello: () => { console.log("hello") }
    })
))