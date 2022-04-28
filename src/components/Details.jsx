import {useEffect, useState} from "react";

export default function Details({id}) {

  const [card, setCard] = useState(null)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_LIST}/${id}.json`)
      .then(response => response.json())
      .then(result => console.log(result))
      .then(data => setCard(data))

    return () => setCard(null)

  }, [id])

  if(!id) {
    return <p className="loading">Loading...</p>
  }
  return (
    <ul className="details">
      {console.log(card)}
      <li><img src={card.avatar} alt={card.name}></img></li>
      <li>{card.name}</li>
      <li>City: {card.details.city}</li>
      <li>Company: {card.details.company}</li>
      <li>Position: {card.details.position}</li>
    </ul>
  )

}
