import React from 'react'
import ProductTile from './ProductTile';

const StoreRow = (props) => {


  const { productData } = props
  const ProductTiles = productData.map((product) => ProductTile(product))

  console.log(`productData: ${productData}`)

  return (


    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:grid-flow-row mt-12 lg:mt-24  items-center flex-col md:items-start mx-12 xl:mx-0  ">
      {ProductTiles}
    </div>


  )


}

export default StoreRow
