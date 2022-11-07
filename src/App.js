import { RouterProvider } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import "./App.css";
import router from "../src/Routes/Router";

function App() {
  return (
    <div className="container mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
