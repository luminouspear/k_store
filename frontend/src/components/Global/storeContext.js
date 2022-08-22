import React from "react"
import GetProductsForStore from './utils/getProductsForStore';

const StoreContext = React.createContext(GetProductsForStore())

const StoreProvider = StoreContext.Provider
const StoreConsumer = StoreContext.StoreConsumer

export {StoreProvider,StoreConsumer}