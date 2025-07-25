import React, { useState } from 'react'
import AddTodo from './AddTodo.jsx'
import TodoCard from './TodoCard.jsx'

const Todo = () => {
    const [todos, setTodos] = useState([
        {
            id: crypto.randomUUID(),
            title: 'Learning React with stunning UI',
            completed: false,
        },
        {
            id: crypto.randomUUID(),
            title: 'Finish TodoApp layout',
            completed: true,
        },
    ])

    function handleAddTodo(todoTitle) {
        setTodos((prevTodos) => [
            ...prevTodos,
            {
                id: crypto.randomUUID(),
                title: todoTitle,
                completed: false,
            },
        ])
    }

    function handleDeleteTodo(todoId) {
        setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todoId))
    }

    function handleToggleCheckTodo(todoId) {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === todoId
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        )
    }

    return (
        <div className="flex flex-col items-center p-6">
            <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl">
                <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
                    ✨ My Todo List
                </h1>

                {/* Input Field */}
                <AddTodo addTodo={handleAddTodo} />

                {/* Todo Cards */}
                <div className="space-y-4">
                    {todos.map((todo, index) => (
                        <TodoCard
                            key={index}
                            title={todo.title}
                            isCompleted={todo.completed}
                            deleteTodo={() => handleDeleteTodo(todo.id)}
                            toggleCheckTodo={() =>
                                handleToggleCheckTodo(todo.id)
                            }
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Todo
