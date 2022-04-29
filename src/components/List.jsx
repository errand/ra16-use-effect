import {useEffect, useState} from "react";

export default function List({userId, onClick: handleClick}) {

  const [list, setList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_LIST}/users.json`)
      .then(response => response.json())
      .then(data => {
        setList(data)
        setLoaded(true)
      })
  }, [])

  const listItems = list.map(item => <li className={userId === item.id ? 'item active' : 'item'} key={item.id} onClick={() => handleClick(item.id)}>{item.name}</li>)

  return loaded ? (
    <ul className={'list'}>
      {listItems}
    </ul>
  ) : <p>loading</p>
}
