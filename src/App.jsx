import { RouterProvider } from "react-router-dom"
import router from "./routes/Routes"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


function App() {
 

  return (
    <>
    <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
  <RouterProvider router={router} />
    </>
  )
}

export default App
