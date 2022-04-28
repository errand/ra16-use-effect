import {useEffect, useState} from 'react'

export default function List() {
  const [list ,setList] = useState();

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
  })
}
