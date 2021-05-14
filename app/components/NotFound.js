import React from "react"
import Page from "./Page"
import { Link } from "react-router-dom"

function NotFound(props) {
  return (
    <Page title="Not Found">
      <div className="text-center">
        <h2>We cannot find that page</h2>
        <p className="lead text-muted">
          Please go back to the <Link to="/">homepage</Link>
        </p>
      </div>
    </Page>
  )
}

export default NotFound
