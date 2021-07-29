import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import routes from '@/routes'
import { ReducerProvider } from '@/hooks/reducerContext'
import './App.css';


function App() {
  return (
    <ReducerProvider>
      <Router>
        <Switch>
          {routes.map(route => 
            <Route exact={true} path={route.path} component={route.component} />)}
        </Switch>
      </Router>
    </ReducerProvider>
    
  );
}

export default App;
