import { useRouteStore } from '@/contexts/RouteStore'

export const useIsHome = () => {
  const { isHome } = useRouteStore()
  return isHome
}
