import React from 'react'

const ProductCard = ({name,price,inStock}) => {
  return (
    <div style={{border:"1px solid black",padding:"10px",margin:"10px"}}>
        <h2>Name : {name}</h2>
        <p>Price : {price}</p>
        <p>In Stock : {inStock}</p>
    </div>
  )
}

export default ProductCard