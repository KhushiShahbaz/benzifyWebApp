import React from 'react'

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full z-50 px-4 h-20">
            <nav className="flex items-center justify-between rounded-full bg-gradient-to-r from-black/30 via-black/50 to-black/30 backdrop-blur-md px-6 py-2">
                {/* Left Buttons */}
                <div className="flex space-x-6">
                    {["About", "Services"].map((item) => (
                        <button
                            key={item}
                            className="border border-white text-white px-5 py-1 rounded-full hover:bg-white hover:text-black transition duration-300"
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Logo */}
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 tracking-wide">
                        BENZIFY
                    </h1>
                </div>

                {/* Right Buttons */}
                <div className="flex space-x-6">
                    {["Blogs", "Contact"].map((item) => (
                        <button
                            key={item}
                            className="border border-white text-white px-5 py-1 rounded-full hover:bg-white hover:text-black transition duration-300"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </nav>
        </div>
    );
}
