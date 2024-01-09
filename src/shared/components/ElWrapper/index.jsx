import React from 'react'

const ElWrapper = ({ children }) => {
    return (
        <div className='main-page'>
            <div className='test'>
                <main className='main'>
                    <div className='home-page-content'>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ElWrapper;