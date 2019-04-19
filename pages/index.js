import '../styles/solarized.css'
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  return <>
    <div className="container">
      <nav>
        <Link prefetch href="full"><a>Full Resume</a></Link>
        <Link prefetch href="blank"><a>Blank Sample</a></Link>
      </nav>
    </div>
  </>
}

export default Home;
