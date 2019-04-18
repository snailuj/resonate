import '../styles/solarized.css'
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  return <>
    <Link href="sevencups">
      <a>Seven Cups</a>
    </Link>
  </>
}

export default Home;
