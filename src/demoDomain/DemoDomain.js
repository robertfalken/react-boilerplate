import React from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'

function DemoDomain() {
  return (
    <div>
      <Title>Demo domain</Title>
      <p>
        This a boilerplate project to set up the essentials for a new React project.
      </p>
      <p>
        Remove this demoDomain folder and add your own business logic and components.
        But first, make sure to <Link to="redux">test redux/sagas</Link>.
      </p>
    </div>
  )
}


export default DemoDomain
