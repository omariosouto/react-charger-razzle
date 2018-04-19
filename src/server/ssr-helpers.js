import Routes from '../routes'
import { matchPath } from 'react-router-dom'


export function extractActiveRouteInfoFromRoutes(url, router) {
  const routesArray = Routes().props.children.map( route => route )
 
  const activeRoute = routesArray.find((route, index) => {
    const routeInfoOnly = { path: route.props.path, exact: route.props.exact }
    if(matchPath(url, routeInfoOnly)) {
      return true
    }
    return false
  })

  let activeRouteInfo = {
    route: activeRoute, 
    params: matchPath(url, { path: activeRoute.props.path, exact: activeRoute.props.exact }).params
  }

  if(!activeRouteInfo.route) { // Set 404 Route
      activeRouteInfo = {
        route: routesArray.find( route => route.props.path.match(/\*/) ? route : false ),
      }
  }

  return activeRouteInfo
}


export function doRedirect(activeRoute, redirect) {
  if(activeRoute.props.render().props.to) {
      redirect(activeRoute.props.render().props.to)
  }
}

export function getCurrentComponent({ component }) {

  if(component.preload) { // Load Async
    return component.preload()
                    .then((component) => {
                      return component.default
                    })
  } else {
    return new Promise((resolve) => { // Load Sync
      resolve(component)
    })
  }
}

export async function extractInitialData(component, request) {
  let initialData = {};
  // console.log('extractInitialData', component)
  if(component.getInitialData) {
    initialData = await component.getInitialData(request)
  }

  return {
    component,
    initialData
  }
}
