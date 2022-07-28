import React from 'react'
import { CTAButton } from '../global/userinterface/CTAButton';
import ProductTile from './ProductTile';
import { KStoreTitle } from '../global/userinterface/KStoreTitle';

const StoreRow = (props) => {


  const { newestItems, sectionTitle } = props
  const newestProducts = newestItems.map((product) => ProductTile(product))

  return (


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:grid-flow-row mt-12 lg:mt-24  items-center flex-col md:items-start mx-12 xl:mx-0  ">
          {newestProducts}
    </div>


  )


}

export default StoreRow
