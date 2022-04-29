import {useEffect, useState} from "react";

export default function Details({userId}) {

  const [card, setCard] = useState(null)
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log(userId)
      fetch(`${process.env.REACT_APP_LIST}/${userId}.json`)
        .then(response => response.json())
        .then(result => {
          setCard(result)
          setLoaded(true)
        })
  }, [userId])

    return loaded ? card && (
      <ul className="details">
        <li><img className="details-img" src={card.avatar + `${'?img=' + userId}`} alt="user avatar" /></li>
        <li>{card.name}</li>
        <li>City: {card.details.city}</li>
        <li>Company: {card.details.company}</li>
        <li>Position: {card.details.position}</li>
      </ul>
    ) : <p>loading</p>
}

/**/
