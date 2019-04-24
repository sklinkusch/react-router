import React from 'react'
import { NavLink, Route } from 'react-router-dom'

export default function Topics({ match }) {
  return (
    <div>
      <h1>Topics</h1>
      <p>These are the topics.</p>
      <ul>
        <li>
          <NavLink activeClassName="selected" to={`${match.url}/components`}>components</NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to={"/topics/props"}>props</NavLink>
        </li>
      </ul>

      { /* Is this the best way? No! 
      <Route path="/topics/first" render={() => <h3>You selected the first topic</h3>} />
      <Route path="/topics/second" render={() => <h3>You selected the second topic</h3>} />*/}

      <Route path={match.path} exact render={() => <h3>Please select a topic</h3>} />
      <Route path={`${match.path}/:topic`} component={Topic} />
    </div>
  )
}

function Topic({ match }) {
  return <h3>You clicked: {match.params.topic}</h3>
}