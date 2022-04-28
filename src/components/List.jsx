import {useEffect, useState} from "react";

export default function List({onClick: handleClick}) {

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_LIST}/users.json`)
      .then(response => response.json())
      .then(data => setList(data))
  }, [])

  const listItems = list.map(item => <div key={item.id} onClick={() => handleClick(item.id)}>{item.name}</div>)

  return (
    <div className={'list'}>
      {listItems}
    </div>
  );
}
