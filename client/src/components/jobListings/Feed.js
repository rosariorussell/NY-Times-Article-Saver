import React, { Component } from 'react'
import JobListing from './JobListing'

export default class Feed extends Component {
  render() {
    return (
      <div>
        <h1>Job Listings</h1>
        <JobListing />

      </div>
    )
  }
}
