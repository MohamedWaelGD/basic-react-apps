import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext.jsx'

const TodoCard = ({ title, isCompleted, deleteTodo, toggleCheckTodo }) => {
    const { isLoggedIn } = useContext(AuthContext)
    return (
        <div
            className={`flex items-center justify-between rounded-2xl border ${isCompleted ? `border-gray-300 bg-gray-100 p-4 text-gray-400 line-through shadow-inner` : `border-gray-200 bg-white p-4 shadow-md transition hover:shadow-xl`}`}
        >
            <div className="flex items-center gap-3">
                {isCompleted ? (
                    <button
                        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-green-500 bg-green-500 text-white disabled:cursor-not-allowed"
                        title="Completed"
                        disabled={!isLoggedIn}
                        onClick={toggleCheckTodo}
                    >
                        ✓
                    </button>
                ) : (
                    <button
                        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-blue-400 transition hover:bg-blue-100 disabled:cursor-not-allowed"
                        title="Mark as done"
                        disabled={!isLoggedIn}
                        onClick={toggleCheckTodo}
                    ></button>
                )}
                <span className={`text-lg ${!isCompleted && 'text-gray-800'}`}>
                    {title}
                </span>
            </div>
            <button
                className="cursor-pointer text-red-500 transition hover:text-red-700 disabled:cursor-not-allowed"
                title="Delete"
                disabled={!isLoggedIn}
                onClick={deleteTodo}
            >
                🗑️
            </button>
        </div>
    )
}
export default TodoCard
