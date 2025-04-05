import React from 'react'
import "./Home.css";
const Home = () => {
    return (
        <>
            <div className="parent-container">
                <div className="d-flex parts">
                    <div className="part1">
                        <h3>MERN Stack Developer</h3>
                        <div className="h-50">
                            <dotlottie-player
                                src="https://lottie.host/c3374d1b-d481-4c63-8bb8-1da0bc338b10/o454B92FLR.lottie"
                                background="transparent"
                                speed="1"
                                style="width: 300px; height: 300px"
                                loop
                                autoplay
                            ></dotlottie-player>
                        </div>
                    </div>
                    <div className="part2"></div>
                </div>
            </div>
        </>
    )
}

export default Home
