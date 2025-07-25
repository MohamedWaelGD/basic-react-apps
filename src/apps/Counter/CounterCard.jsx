import React from 'react'
import clsx from 'clsx'

const CounterCard = ({ title, color, counter, setCounter }) => {
    const colorsClasses = {
        bgBtn: `bg-${color}-500`,
        bgBtnHover: `hover:bg-${color}-600`,
    }
    return (
        <div className="bg-opacity-80 transform rounded-2xl bg-white p-6 shadow-2xl backdrop-blur-lg transition-transform hover:scale-105">
            <h3 className="mb-2 text-xl font-bold text-gray-700">{title}</h3>
            <p className={`mb-4 text-5xl font-extrabold`}>{counter}</p>
            <div className="flex space-x-4">
                <button
                    className={clsx(
                        'cursor-pointer rounded-xl px-4 py-2 text-white transition',
                        colorsClasses.bgBtn,
                        colorsClasses.bgBtnHover
                    )}
                    onClick={() => {
                        setCounter((prev) => prev + 1)
                    }}
                >
                    +
                </button>
                <button
                    className="cursor-pointer rounded-xl bg-gray-200 px-4 py-2 text-gray-700 transition hover:bg-gray-300"
                    onClick={() => {
                        setCounter(0)
                    }}
                >
                    Reset
                </button>
                <button
                    className="cursor-pointer rounded-xl bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
                    onClick={() => {
                        setCounter((prev) => prev - 1)
                    }}
                >
                    -
                </button>
            </div>
        </div>
    )
}
export default CounterCard
