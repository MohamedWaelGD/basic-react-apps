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
                    bgBtnCss={'bg-indigo-500'}
                    bgBtnHoverCss={'hover:bg-indigo-600'}
                />
                <CounterCard
                    title={'Followers'}
                    counter={followers}
                    setCounter={setFollowers}
                    bgBtnCss={'bg-pink-500'}
                    bgBtnHoverCss={'hover:bg-pink-600'}
                />
                <CounterCard
                    title={'Downloads'}
                    counter={downloads}
                    setCounter={setDownloads}
                    bgBtnCss={'bg-blue-500'}
                    bgBtnHoverCss={'hover:bg-blue-600'}
                />
                <CounterCard
                    title={'Shares'}
                    counter={shares}
                    setCounter={setShares}
                    bgBtnCss={'bg-green-500'}
                    bgBtnHoverCss={'hover:bg-green-600'}
                />
            </div>
        </div>
    )
}
export default Counter
