import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import IndexPage from "./pages/index/IndexPage";
import CompanyPage from "./pages/company/CompanyPage";
import AccountPage from "./pages/account/AccountPage";

function App() {
  return (
    // Default font is Times New Roman
    <div className="font-['Roboto_Mono']">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<IndexPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/company" element={<CompanyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
