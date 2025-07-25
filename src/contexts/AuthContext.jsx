import { createContext, useState } from 'react'

export const AuthContext = createContext({
    user: '',
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const login = () => {
        setIsLoggedIn(true)
        setUser('Mohamed Wael')
    }
    const logout = () => {
        setIsLoggedIn(false)
        setUser('')
    }

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
