import React from 'react'
import ProductTile from './ProductTile';

const StoreRow = (props) => {

  const { products, loading, error, count } = props



  const ProductTiles = (loading)
     ? (<h2>Loading...</h2>)
     : error ? (<h2>{error}</h2>)
     :  (products?.map((product) => ProductTile(product)).slice(0,count))



  return (


    <div className="flex-col items-center mx-12 mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:grid-flow-row lg:mt-24 md:items-start xl:mx-0">
      {ProductTiles}
    </div>


  )


}

export default StoreRow
