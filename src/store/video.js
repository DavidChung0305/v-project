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
      setChannels:(subscriber) => set({channels:subscriber}),
      subList:[],
      setSubList:(subscribers) => set({subList: subscribers})
    }),
    {
      name: 'video', 
    },
  ),
)
