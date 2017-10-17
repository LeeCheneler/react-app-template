import loadRouteOne from 'modules/RouteOne/index.bundle'
import loadRouteTwo from 'modules/RouteTwo/index.bundle'

const routes = [
  {
    title: 'Route One',
    path: '/route-one',
    load: loadRouteOne
  },
  {
    title: 'Route Two',
    path: '/route-two',
    load: loadRouteTwo
  }
]

export default routes
