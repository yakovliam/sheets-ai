import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import IndexPage from "./pages/index/IndexPage";
import FourOhFourPage from "./pages/404";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<IndexPage />} />
            <Route path="*" element={<FourOhFourPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
