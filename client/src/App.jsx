import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import OrderConfirm from "./pages/OrderConfirm"
import { Provider } from "react-redux"
import { store } from "./app/store"
import Dishes from "./pages/Dishes"
import { Toaster } from "@/components/ui/toaster"

function App() {

  return (
    <section className="h-[100vh] w-[100vw] overflow-hidden">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/order-confirm" element={<OrderConfirm />} />
        </Routes>
      </Provider>
      <Toaster />
    </section>
  )
}

export default App
