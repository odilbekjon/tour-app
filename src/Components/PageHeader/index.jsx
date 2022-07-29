import React from 'react'
import { Link } from 'react-router-dom'
import './pageHeader.scss'

export const PageHeader = () => {
  return (
    <ul class="breadcrumb">
      <li><Link to='/'>Bosh sahifa</Link></li>
      <li><Link to='/cities'>Shaharlar</Link></li>
      <li>Toshkent</li>
    </ul>
  )
}
