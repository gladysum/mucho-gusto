import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Chat from './Chat'

const routes = [
  { path: '/',
    exact: true,
    main: Home
  },
  { path: '/chat',
    main: Chat
  }
]

const App = () => (
  <Router>
    <div>
      <div>
        <Nav />
      </div>
      <div>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
)

export default App