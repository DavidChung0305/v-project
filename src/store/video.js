import { create } from 'zustand'
import { persist, subscribeWithSelector } from 'zustand/middleware'


export const useVideoStore = create(
  persist(
    (set) => ({
      hotVideos:[],
      setHotVideos:(videos) => set({ hotVideos: videos }),
      dancerCards:[],
      setDancerCards:(newDancerCard) => set({ dancerCards: newDancerCard }),
      likeVideos:[],
      setLikeVideos:(videos) => set({likeVideos:videos}),
      allVideos:[],
      setAllVideos:(videos) => set({allVideos:videos}),
      searchVideos:[],
      setSearchVideos:(videos) => set({searchVideos:videos})
    }),
    {
      name: 'video', 
    },
  ),
)
