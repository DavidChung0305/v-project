import { create } from 'zustand'
import { persist, subscribeWithSelector } from 'zustand/middleware'


export const useVideoStore = create(
  persist(
    (set) => ({
      hotVideos:[],
      setHotVideos:(videos) => set({ hotVideos: videos }),
      dancerCards:[],
      setDancerCards:(newDancerCard) => set({ dancerCards: newDancerCard }),
      channels:[],
      setChannels:(subscribers) => set({channels:subscribers})
    }),
    {
      name: 'video', 
    },
  ),
)
