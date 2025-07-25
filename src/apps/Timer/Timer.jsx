import React, { useEffect, useReducer } from 'react'

const ACTIONS = {
    PLAY: 'play',
    PAUSE: 'pause',
    RESET: 'reset',
    TICK: 'tick',
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.TICK:
            if (state.isPlaying) {
                return {
                    ...state,
                    timer: state.timer + 1,
                }
            }

            return state
        case ACTIONS.PLAY:
            return {
                ...state,
                isPlaying: true,
            }
        case ACTIONS.PAUSE:
            return {
                ...state,
                isPlaying: false,
            }
        case ACTIONS.RESET:
            return {
                timer: 0,
                isPlaying: false,
            }
        default:
            return state
    }
}

const Timer = () => {
    const [timerState, dispatch] = useReducer(reducer, {
        timer: 0,
        isPlaying: false,
    })

    const seconds = (timerState.timer % 60).toString().padStart(2, '0')
    const minutes = Math.floor(timerState.timer / 60) % 60
    const minutesDisplay = (minutes % 60).toString().padStart(2, '0')
    const hours = Math.floor(minutes / 60)
        .toString()
        .padStart(2, '0')

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch({ type: ACTIONS.TICK })
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className="flex items-center justify-center p-6">
            <div className="w-full max-w-sm rounded-2xl border border-white/20 bg-white p-10 text-center shadow-2xl backdrop-blur-lg">
                <h1 className="mb-6 text-4xl font-semibold tracking-wide">
                    ⏱ Focus Timer
                </h1>

                <div className="mb-8 font-mono text-6xl font-bold select-none">
                    {`${hours}:${minutesDisplay}:${seconds}`}
                </div>

                <div className="flex items-center justify-center gap-6">
                    <button
                        onClick={() => dispatch({ type: ACTIONS.PLAY })}
                        className="cursor-pointer rounded-full bg-green-600 px-6 py-3 text-xl text-white shadow-md transition-all duration-200 hover:bg-green-700"
                    >
                        ▶️
                    </button>

                    <button
                        onClick={() => dispatch({ type: ACTIONS.PAUSE })}
                        className="cursor-pointer rounded-full bg-red-600 px-6 py-3 text-xl text-white shadow-md transition-all duration-200 hover:bg-red-700"
                    >
                        ⏸
                    </button>

                    <button
                        onClick={() => dispatch({ type: ACTIONS.RESET })}
                        className="cursor-pointer rounded-full bg-gray-600 px-6 py-3 text-xl text-white shadow-md transition-all duration-200 hover:bg-gray-700"
                    >
                        🔄
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Timer
