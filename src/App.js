import './App.css';
import Posts from './components/Posts'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import { data } from './data'

function App() {
  return (
    <div className="main">
      <Hero {...data.user} />
      <Navigation {...data.navigation} />
      <Posts content={data.content}/>
    </div>
  );
}

export default App;
