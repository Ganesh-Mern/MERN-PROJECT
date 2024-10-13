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
import SignUp from "./pages/auth/SignuUp";
import TicketId from "./pages/dashboardpage/TicketId";
import Billing from "./pages/dashboardpage/Billing";
import BlockSite from "./pages/dashboardpage/BlockSite";
import Admin from "./pages/dashboardpage/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="plans" element={<Plans />} />
          <Route path="plans/addplans" element={<AddPaln />} />
          <Route path="users" element={<Users />} />
          <Route path="emails" element={<Emails />} />
          <Route path="admin" element={<Admin />} />
          <Route path="billing" element={<Billing />} />
          <Route path="blocksites" element={<BlockSite />} />
          <Route path="ticketid" element={<TicketId />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
