import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import SinglePost from './components/SinglePost';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import CreatePost from './components/CreatePost'
import {Router} from '@reach/router'

function App() {
  return (
    <div className="App">
      <Router>
      <Home path='/'/>
      <SinglePost path='/post/:id' />
      <Login path="/login"/>
      <Dashboard path="/dashboard/:userName"/>
      <CreatePost path='/dashboard/create-post' />
      </Router>
    </div>
  );
}

export default App;
