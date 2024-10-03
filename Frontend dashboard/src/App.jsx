import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Layout from "./components/layout/Layout";
import Overview from "./pages/dashboardpage/Overview";
import Plans from "./pages/dashboardpage/Plans";
import Users from "./pages/dashboardpage/Users";
import Emails from "./pages/dashboardpage/Emails";
import AddPaln from "./components/add plan/AddPaln";
import Settings from "./pages/dashboardpage/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="overview" element={<Overview />} />
          <Route path="plans" element={<Plans />} />
          <Route path="addplan" element={<AddPaln />}></Route>
          <Route path="users" element={<Users />} />
          <Route path="emails" element={<Emails />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
