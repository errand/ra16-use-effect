import './App.css';
import List from './components/List'
import Details from './components/Details'
import {useState} from 'react'

function App() {
  const [userId, setUserId] = useState(0)

  const handleClick = id => {
    setUserId(id)
  }

  return (
    <div className={'wrapper'}>
        <List userId={userId} onClick={handleClick} />
        {userId !== 0 && <Details userId={userId} />}
    </div>
  );
}

export default App;
