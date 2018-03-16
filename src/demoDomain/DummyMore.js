import React from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'

function DummyMore() {
  return (
    <div>
      <Title>
        Another route
      </Title>
      <p>
        <Link to="/">
          Back
        </Link>
      </p>
    </div>
  )
}

export default DummyMore
