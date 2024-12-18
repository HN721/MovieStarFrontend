import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // import QueryClient and QueryClientProvider
import AdminRoutes from "./pages/admin/AdminRoutes";
import Login from "./component/Login";
import Register from "./component/Register";
import Home from "./pages/Home";
import DetailMovie from "./component/DetailMovie";
import Seat from "./pages/Seat";
import Order from "./pages/Order";
import JadwalList from "./pages/ListJadwal";
import Account from "./component/User/Account";
import Ticket from "./pages/User/Ticket";
import AuthRoute from "./component/auth/AuthRoute";
import { getToken } from "./utils/getToken";
import AuthorizationRoute from "./component/auth/AuthorizationRoute";
import OrderAccount from "./pages/User/OrderAccount";

// Create an instance of QueryClient
const queryClient = new QueryClient();

const App = () => {
  const token = getToken();
  return (
    <QueryClientProvider client={queryClient}>
      {" "}
      {/* Wrap the app with QueryClientProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/detail/:id"
            element={
              <AuthRoute>
                <DetailMovie />
              </AuthRoute>
            }
          />
          <Route
            path="/detail/jadwal"
            element={
              <AuthRoute>
                <JadwalList />
              </AuthRoute>
            }
          />
          <Route
            path="account/order"
            element={
              <AuthRoute>
                <OrderAccount />
              </AuthRoute>
            }
          />
          <Route path="/account" element={<Account />} />
          <Route
            path="/ticket/:id"
            element={
              <AuthRoute>
                <Seat />
              </AuthRoute>
            }
          />
          <Route
            path="/order/:id"
            element={
              <AuthRoute>
                <Order />
              </AuthRoute>
            }
          />
          <Route path="/account/ticket/:id" element={<Ticket />} />

          <Route
            path="/admin/*"
            element={
              <AuthRoute>
                <AdminRoutes />
                {/* <AuthorizationRoute>
                 
                </AuthorizationRoute> */}
              </AuthRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/register"
            element={token ? <AdminRoutes /> : <Register />}
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
