import Counter from './apps/counter/Counter.jsx'
import Todo from './apps/todo/Todo.jsx'
import { useState } from 'react'

function App() {
    const [appSelected, setAppSelected] = useState('Counter')
    return (
        <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 p-6">
            <div className="flex items-center justify-center gap-2">
                <button
                    onClick={() => setAppSelected('Counter')}
                    className="cursor-pointer rounded-2xl bg-blue-500 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-600"
                >
                    Counter App
                </button>
                <button
                    onClick={() => setAppSelected('Todo')}
                    className="cursor-pointer rounded-2xl bg-blue-500 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-600"
                >
                    Todo App
                </button>
            </div>
            {appSelected === 'Counter' ? <Counter /> : <Todo />}
        </div>
    )
}

export default App
