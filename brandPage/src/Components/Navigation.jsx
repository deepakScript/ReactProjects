import React from 'react'

const Navigation = () => {
    return (
        <div>
            <div className='container'>
                <div className='logo'>
                    <img src="/images/brand_logo.png" alt="logo" />
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>

                <button>Login</button>

            </div>
        </div>
    )
}

export default Navigation;
