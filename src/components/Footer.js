import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <div className="footer-wrapper">
  <p className="Footer">
    Show:
    {' '}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
  </div>
)

export default Footer
