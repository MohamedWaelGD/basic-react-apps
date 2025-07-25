import React, { useState } from 'react'
import CounterCard from './CounterCard.jsx'

const Counter = () => {
    const [likes, setLikes] = useState(0)
    const [followers, setFollowers] = useState(0)
    const [downloads, setDownloads] = useState(0)
    const [shares, setShares] = useState(0)
    return (
        <div className="flex w-full flex-col items-center justify-center gap-4 p-6">
            <h1 className="text-4xl font-bold">🧮 Counter App</h1>
            <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <CounterCard
                    title={'Likes'}
                    counter={likes}
                    setCounter={setLikes}
                    color={'indigo'}
                />
                <CounterCard
                    title={'Followers'}
                    counter={followers}
                    setCounter={setFollowers}
                    color={'pink'}
                />
                <CounterCard
                    title={'Downloads'}
                    counter={downloads}
                    setCounter={setDownloads}
                    color={'blue'}
                />
                <CounterCard
                    title={'Shares'}
                    counter={shares}
                    setCounter={setShares}
                    color={'green'}
                />
            </div>
        </div>
    )
}
export default Counter
