import React from 'react'
import { Link } from 'react-router'

const About = () => {
    return (
        <div className="bg-white font-sans text-gray-800">
            {/* Header */}
            <section className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-16 text-center text-white">
                <h1 className="mb-4 text-5xl font-bold">About Us</h1>
                <p className="mx-auto max-w-3xl text-lg">
                    We build modern web experiences that are fast, responsive,
                    and delightful to use.
                </p>
            </section>

            {/* Our Story */}
            <section className="bg-gray-50 px-4 py-20">
                <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row">
                    <img
                        src="https://images.pexels.com/photos/32406265/pexels-photo-32406265.jpeg"
                        alt="Our Team"
                        className="w-full rounded-2xl shadow-lg md:w-1/2"
                    />
                    <div className="md:w-1/2">
                        <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
                        <p className="mb-4 text-gray-700">
                            Founded in 2024, StunningApp began with one goal in
                            mind: to create beautiful and efficient digital
                            experiences. Our team is made up of passionate
                            developers, designers, and creators who believe that
                            great software changes the world.
                        </p>
                        <p className="text-gray-700">
                            From small startups to large enterprises, we
                            collaborate with clients to bring their ideas to
                            life in a way that feels modern, fast, and scalable.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission and Values */}
            <section className="bg-white px-4 py-20">
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="mb-12 text-4xl font-bold">
                        Our Mission & Values
                    </h2>
                    <div className="grid gap-8 text-left md:grid-cols-3">
                        {[
                            {
                                title: 'Innovation 💡',
                                desc: 'We stay on the cutting edge, delivering creative solutions using the latest technologies.',
                            },
                            {
                                title: 'Transparency 🔍',
                                desc: 'We believe in open communication, honesty, and clarity in everything we do.',
                            },
                            {
                                title: 'Excellence 🚀',
                                desc: 'We strive to exceed expectations by crafting quality code and outstanding design.',
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="rounded-xl bg-gray-100 p-6 shadow transition duration-300 hover:shadow-lg"
                            >
                                <h3 className="mb-2 text-xl font-semibold">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Link to={'/'}>
                <footer className="bg-gray-900 py-8 text-center text-white">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} StunningApp — Built
                        with 💙 by passionate developers.
                    </p>
                </footer>
            </Link>
        </div>
    )
}
export default About
