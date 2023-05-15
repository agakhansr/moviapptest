import React from 'react'
import Link from 'next/link'

const MenuItem = ({ mn }) => {
  return (
    <Link href={mn.url}>{mn.name}</Link>
  )
}

export default MenuItem
