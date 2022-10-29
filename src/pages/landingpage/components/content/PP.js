import React from 'react'
import { useParams } from 'react-router-dom'

const PP = () => {
   const {id} = useParams();
  return (
    <div style={{"textAlign":"center"}}>PP : {id}</div>
  )
}

export default PP;