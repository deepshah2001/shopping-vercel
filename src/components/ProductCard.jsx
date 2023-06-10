import React from 'react'

const ProductCard = ({ name, id, imgSrc, price, handler }) => {
        return (
          <div className='productCard'>
              <img src={imgSrc} alt={name} />
              <h4>{name}</h4>
              <h4>${price}</h4>
              <button onClick={()=>handler({name, id, price, quantity: 1, imgSrc})}>Add to Cart</button>
          </div>   
  )
}

export default ProductCard