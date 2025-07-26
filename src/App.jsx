import Counter from './apps/Counter/Counter.jsx'
import Todo from './apps/Todo/Todo.jsx'
import { useContext, useState } from 'react'
import Timer from './apps/Timer/Timer.jsx'
import { AuthContext } from './contexts/AuthContext.jsx'
import RoutingPage from './apps/Routing/RoutingPage.jsx'

function App() {
    const { isLoggedIn, user, login, logout } = useContext(AuthContext)
    const apps = ['Counter', 'Todo', 'Timer', 'Router']
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
                {apps.map((app, index) => (
                    <button
                        key={index}
                        onClick={() => setAppSelected(app)}
                        className="cursor-pointer rounded-2xl bg-blue-500 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-600"
                    >
                        {app}
                    </button>
                ))}
            </div>
            {(() => {
                switch (appSelected) {
                    case 'Counter':
                        return <Counter />
                    case 'Todo':
                        return <Todo />
                    case 'Timer':
                        return <Timer />
                    case 'Router':
                        return <RoutingPage />
                }
            })()}
        </div>
    )
}

export default App
