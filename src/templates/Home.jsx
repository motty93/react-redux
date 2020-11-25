import React from 'react'
import { getUserId, getUserName } from '../reducks/users/selectors'
import { useSelector } from 'react-redux'

const Home = () => {
  const selector = useSelector(state => state)
  const uid = getUserId(selector)
  const name = getUserName(selector)

  return (
    <div>
      <h2>Home</h2>
      <p>{uid}</p>
      <p>{name}</p>
    </div>
  )
}

export default Home
