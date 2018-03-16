import React from 'react'
import { Link } from 'react-router-dom'

function DummyMore() {
  return (
    <div>
      <h1>
        Another route
      </h1>
      <p>
        <Link to="/">
          Back
        </Link>
      </p>
    </div>
  )
}

export default DummyMore
