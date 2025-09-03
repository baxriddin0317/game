import { create } from 'zustand'

interface RouteState {
  pathname: string
  isHome: boolean
  setPathname: (pathname: string) => void
}

export const useRouteStore = create<RouteState>((set) => ({
  pathname: '/',
  isHome: false,
  setPathname: (pathname: string) => {
    const isHome = ['/', '/profile', '/server-info'].includes(pathname)
    set({ pathname, isHome })
  },
}))
