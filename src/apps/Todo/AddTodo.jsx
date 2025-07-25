import React, { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext.jsx'

const AddTodo = ({ addTodo }) => {
    const { isLoggedIn } = useContext(AuthContext)
    const [input, setInput] = useState('')

    function addTodoItem() {
        addTodo(input)
        setInput('')
    }

    return (
        <div className="mb-8 flex flex-col gap-1">
            <div className="flex items-center gap-4">
                <input
                    type="text"
                    placeholder="Add a new todo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 rounded-2xl border border-gray-300 px-5 py-3 shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    className="cursor-pointer rounded-2xl bg-blue-500 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-stone-500"
                    disabled={!input || !isLoggedIn}
                    onClick={addTodoItem}
                >
                    Add
                </button>
            </div>
            {!isLoggedIn && (
                <p className="text-sm text-red-500">
                    You have to login, So you can do actions todo list
                </p>
            )}
        </div>
    )
}
export default AddTodo
