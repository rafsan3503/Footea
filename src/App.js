import { RouterProvider } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import "./App.css";
import router from "../src/Routes/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="container mx-auto font-poppins">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Footea - Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <ToastContainer position="top-center"></ToastContainer>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
