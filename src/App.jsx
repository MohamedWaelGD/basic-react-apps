import Counter from './apps/Counter/Counter.jsx'
import Todo from './apps/Todo/Todo.jsx'
import { useContext, useState } from 'react'
import Timer from './apps/Timer/Timer.jsx'
import { AuthContext } from './contexts/AuthContext.jsx'

function App() {
    const { isLoggedIn, user, login, logout } = useContext(AuthContext)
    const [appSelected, setAppSelected] = useState('Counter')
    return (
        <div className="flex min-h-screen flex-col items-center gap-3 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 p-6">
            {isLoggedIn ? (
                <div className="flex items-center gap-2">
                    <p className="text-lg font-bold">{user}</p>
                    <button
                        onClick={logout}
                        className="cursor-pointer rounded-2xl bg-red-500 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <button
                    onClick={login}
                    className="cursor-pointer rounded-2xl bg-green-500 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-green-600"
                >
                    Login
                </button>
            )}
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
                <button
                    onClick={() => setAppSelected('Timer')}
                    className="cursor-pointer rounded-2xl bg-blue-500 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-600"
                >
                    Timer App
                </button>
            </div>
            {(() => {
                switch (appSelected) {
                    case 'Counter':
                        return <Counter />
                    case 'Todo':
                        return <Todo />
                    case 'Timer':
                        return <Timer />
                }
            })()}
        </div>
    )
}

export default App
