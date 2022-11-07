import { RouterProvider } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import "./App.css";
import router from "../src/Routes/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container mx-auto">
      <ToastContainer position="top-center"></ToastContainer>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
