import {RouterProvider} from "react-router-dom"
import { mainRoute } from "./router/mainRoute"
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from "redux-persist/es/persistStore"
import { Provider } from "react-redux"
import { store } from "./global/store"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

let persistor = persistStore(store)
const queryClient = new QueryClient()

const App = () => {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

    <QueryClientProvider client={queryClient}>
    <RouterProvider router={mainRoute} />
    </QueryClientProvider>

    </PersistGate> 
    </Provider> 
  )
}

export default App