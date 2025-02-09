import React, { useEffect, useState } from 'react'
import { products } from '../constant/products'
function Products() {
    const [data, setData] = useState('')
    useEffect(() => {
        setData(products.slice(4, 5))
    }, [])
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center p-20 bg-secondary">
            {products.map((ele, ind) => (
                ele.name ? (
                    <div key={ind} className='bg-accent2 hover:bg-accent2/90 duration-500 border border-primary cursor-pointer p-10'>
                        <h1 className='text-primary font-bold font-neogrotesque text-3xl'>{ele.name}</h1>
                        <p className='text-secondary font-medium font-neogrotesque text-lg'>{data}</p>
                        <img src={ele.image} alt={ele.name || "Product Image"} className="w-full h-auto rounded-md object-cover scale-75 hover:scale-100 duration-700" />
                    </div>
                ) : null
            ))}
        </div>
    )
}
export default Products