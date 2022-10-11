import { RouterProvider } from "react-router";
import "./App.css";
import { router } from "./router";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
