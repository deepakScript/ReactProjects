import React from 'react'
import "@lottiefiles/lottie-player";
import "./Home.css";
const Home = () => {
    return (
        <>
            <div className="parent-container">
                <div className="d-flex parts">
                    <div className="part1">
                        <h3>MERN Stack Developer</h3>
                        <div>
                            <lottie-player
                                src="/path/to/your/animation.lottie"
                                background="transparent"
                                speed="1"
                                loop
                                autoplay
                                style={{ width: '300px', height: '300px' }}
                            ></lottie-player>
                        </div>
                    </div>
                    <div className="part2"></div>
                </div>
            </div>
        </>
    )
}

export default Home
