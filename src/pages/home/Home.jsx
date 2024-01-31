import React from 'react'
import './home.scss'
import HeroBanner from './heroBanner/HeroBanner'

function Home() {
    return (
        <div className='homePage'>
            <HeroBanner />

            <div style={{height: 1000}}></div>
        </div>
    )
}

export default Home