import Routes from '../routes'
import { matchPath } from 'react-router-dom'


export function extractActiveRouteInfoFromRoutes(url, router) {
  const routesArray = Routes().props.children.map( route => route )
  const activeRoute = routesArray.find((route, index) => {
    const routeInfoOnly = { path: route.props.path, exact: route.props.exact }
    console.log(url, routeInfoOnly,matchPath(url, routeInfoOnly))
    if(matchPath(url, routeInfoOnly)) {
      return true
    }
    return false
  })
  
  if(activeRoute) {
    const activeRouteInfo = {
      route: activeRoute, 
      params: matchPath(url, { path: activeRoute.props.path, exact: activeRoute.props.exact }).params
    }
    return activeRouteInfo
  }

  if(!activeRoute) { // Set 404 Route
    const activeRouteInfo = {
      route: routesArray.find( route => {
      return route.props.path.match(/\*/) ? route : false
         }),
      }
    return activeRouteInfo
  }

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
