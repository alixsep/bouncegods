import React, { Suspense } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
// import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';

const Home = React.lazy(() => import('./pages/Home'));
const Error404 = React.lazy(() => import('./pages/Error404'));

const App = () => {
  return (
    <Router basename='/'>
      <Suspense fallback={<Loader />}>
        {/* <CustomCursor /> */}
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/'>
            <Error404 />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
