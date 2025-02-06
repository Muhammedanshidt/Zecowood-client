import React from 'react'
import Factory from "../assets/plywoodfactory.jpeg"
function Products() {
    return (
        <div className="flex flex-col justify-center items-center bg-accent text-secondary h-screen">
            <div className="relative w-96 h-96">
                {/* Background Layer */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${Factory})`, opacity: .5 }}
                ></div>

                {/* Text Layer */}
                <div className="relative z-10 flex justify-center items-center h-full">
                    <h1 className="text-red-600 text-4xl text-center">Welcome</h1>
                </div>
            </div>
        </div>
    )
}

export default Products