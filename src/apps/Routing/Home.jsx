import React from 'react'
import { NavLink } from 'react-router'

const Home = () => {
    return (
        <div className="bg-white font-sans text-gray-800">
            {/* Hero Section */}
            <section className="relative flex h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 px-4 text-white">
                <div className="max-w-4xl text-center">
                    <h1 className="mb-4 text-5xl font-extrabold drop-shadow-lg md:text-6xl">
                        Welcome to{' '}
                        <span className="text-yellow-300">StunningApp</span>
                    </h1>
                    <p className="mb-8 text-xl opacity-90 md:text-2xl">
                        Build fast. Look modern. Feel awesome.
                    </p>
                    <div className="flex justify-center gap-4">
                        <NavLink to={'/about'}>
                            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 shadow-lg transition hover:scale-105">
                                Get Started 🚀
                            </button>
                        </NavLink>
                        <button className="rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-600">
                            Learn More 📘
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-gray-100 py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="mb-12 text-center text-4xl font-bold">
                        Features
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                title: 'Fast Performance',
                                emoji: '⚡',
                                desc: 'Blazing fast load times and optimized code.',
                            },
                            {
                                title: 'Modern UI',
                                emoji: '🎨',
                                desc: 'Beautiful components built with Tailwind CSS.',
                            },
                            {
                                title: 'Responsive',
                                emoji: '📱',
                                desc: 'Perfectly adapts to any device size.',
                            },
                        ].map((feature, i) => (
                            <div
                                key={i}
                                className="rounded-2xl bg-white p-6 text-center shadow transition duration-300 hover:shadow-xl"
                            >
                                <div className="mb-4 text-5xl">
                                    {feature.emoji}
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-8 text-white">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <p className="mb-2">
                        &copy; {new Date().getFullYear()} StunningApp. All
                        rights reserved.
                    </p>
                    <div className="flex justify-center gap-4 text-sm text-gray-400">
                        <a href="#" className="hover:text-white">
                            Privacy
                        </a>
                        <a href="#" className="hover:text-white">
                            Terms
                        </a>
                        <a href="#" className="hover:text-white">
                            Contact
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Home
