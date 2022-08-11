import React from 'react'
import ProductTile from './ProductTile';

const StoreRow = (props) => {

  const { products, loading, error } = props
  
  const ProductTiles = loading
    ? (<h2>Loading...</h2>)
    : error ? (<h2>{error}</h2>)
    : (products.map((product) => ProductTile(product)))



  return (


    <div className="grid flex-col items-center gap-12 mx-12 mt-12 md:grid-cols-2 lg:grid-cols-3 lg:grid-flow-row lg:mt-24 md:items-start xl:mx-0">
      {ProductTiles}
    </div>


  )


}

export default StoreRow
