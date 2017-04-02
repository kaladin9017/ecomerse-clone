import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

//
import Hello from './components/Hello';


// Navigation


//

const routes = [
  { path: '/',
    component: Hello,
    routes: [
      { path: '/category/:category',
        component: Hello
      }
    ]
  },
  { path: '/cart',
    component: Hello,
    routes: [
      { path: '/cart/:item',
        component: Hello
      }
    ]
  },
  { path: '/search',
    component: Hello,
    routes: [
      { path: '/search/:book',
        component: Hello
      }
    ]
  }
]

const RouteWithSubRoutes = (route) => (
  <Route exact path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)


const RouteConfig = () => (
  <Router>
    <div>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
    </div>
  </Router>
)

export default RouteConfig;
