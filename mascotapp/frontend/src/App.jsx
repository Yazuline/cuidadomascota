import Navbar from "../src/components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes/MyRoutes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;
