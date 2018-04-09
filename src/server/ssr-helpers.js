import Routes from '../routes'

export function getActiveRouteFromRoutes(url, router) {
  const routesArray = Routes().props.children.map( route => route )
  let activeRoute = routesArray.find( route => route.props.path.match(new RegExp(`${url}`)) ? route : false )
  
  if(!activeRoute) { // Set 404 Route
      activeRoute = routesArray.find( route => route.props.path.match(/\*/) ? route : false )
  }

  return activeRoute
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

export async function extractInitialData(component) {
  let initialData = {};

  if(component.getInitialData) {
    initialData = await component.getInitialData()
  }

  return {
    component,
    initialData
  }
}