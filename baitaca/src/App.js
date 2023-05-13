import React, { Children } from 'react';
import {  Grommet } from 'grommet';
import { theme } from "./theme.js";
import { AppHome } from "./components/appHome.js"
import { AppAbout } from './components/appAbout.js';


//dotenv.config();

const RouterContext = React.createContext({})

const Router = ({ children }) => {
  const [path, setPath] = React.useState("/")

  React.useEffect(() => {
    const onPopState = () => setPath(document.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const push = nextPath => {
    if (nextPath !== path) {
      window.history.pushState(undefined, undefined, nextPath)
      setPath(nextPath)
      window.scrollTo(0, 0)
    }
  }

  return (
    <RouterContext.Provider value={{ path, push }}>
      {children}
    </RouterContext.Provider>
  )
}

const Routes = ({ children }) => {
  const { path: contextPath } = React.useContext(RouterContext)
  let found
  Children.forEach(children, child => {
    if (!found && contextPath === child.props.path) found = child
  })
  return found
}

const Route = ({ Component, path }) => {
  const { path: contextPath } = React.useContext(RouterContext)
  return contextPath === path ? <Component /> : null
}

function App() {
  return (
    <Grommet theme={theme} full>
      <Router>
        <Routes>
          <Route path="/" Component={AppHome} />
          <Route path="/about" Component={AppAbout} />
        </Routes>
      </Router>
    </Grommet>
  );
}

export default App;
