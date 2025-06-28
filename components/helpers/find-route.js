import { customRoutes } from '../../routes'

export function findRoute(route) {
  let routeObject = {}

  customRoutes.find((currentRoute) => {
    if (currentRoute.patterns.indexOf(route) !== -1) {
      routeObject = currentRoute
    }
  })

  return routeObject
}
