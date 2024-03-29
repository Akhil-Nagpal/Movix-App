import React from 'react'
import './home.scss'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'

function Home() {
    return (
        <div className='homePage'>
            <HeroBanner />
            <Trending />
            <div style={{height: 1000}}></div>
        </div>
    )
}

export default Home