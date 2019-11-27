import React, { useState } from 'react'

export default function PrimHead(props) {
  const [firstName, setFirstName] = useState("");





  return (
    <div>
      <h1>Primary Admin Header. Hello {props.first_name}</h1>
    </div>
  )
}
