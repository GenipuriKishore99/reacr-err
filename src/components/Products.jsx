import React from 'react'

const Products = (props) => {
    console.log()
  return (
    <div>
        <p>Products data</p>
        <h2>data:{props.data.name}</h2>
        <p>{props}</p>
    </div>
  )
}

export default Products