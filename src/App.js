import './App.css';
import List from './components/List'
import Details from './components/Details'
import {useState} from 'react'

function App() {
  const [id, setId] = useState(null)
  const [loaded, setLoaded] = useState(false)

  const handleClick = id => {
    setId(id)
    setLoaded(prevState => !prevState)
  }

  return (
    <>
        <List onClick={handleClick} />
        {loaded && <Details id={id} />}
    </>
  );
}

export default App;
