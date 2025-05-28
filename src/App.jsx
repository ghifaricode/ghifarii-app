import React, { Suspense } from "react";
import "./assets/tailwind.css";
import { Route, Routes, useParams } from "react-router-dom";

import Loading from "./components/Loading";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout";


import ProductAvailabilityChecker from "./components/ProductAvailabiityChecker";
// Lazy-loaded pages
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Users = React.lazy(() => import("./pages/Users"));
const Notfound = React.lazy(() => import("./pages/NotFound"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));

// Auth Pages
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

// Guest Page
const Guest = React.lazy(() => import("./pages/Guest"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Layout untuk halaman utama (internal) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/users" element={<Users />} />
        </Route>

        {/* Layout untuk halaman otentikasi */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Layout untuk halaman guest publik */}
        <Route element={<GuestLayout />}>
          <Route path="/guest" element={<Guest />} />
          <Route path="/cek-produk" element={<ProductAvailabilityChecker />} />
        </Route>
        
        {/* Error Pages */}
        <Route path="/error/:errorCode" element={<ErrorPageWrapper />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Suspense>
  );
}

const ErrorPageWrapper = () => {
  const { errorCode } = useParams();

  const errorData = {
    400: {
      description: "Bad Request - Permintaan tidak valid.",
      image: "/img/400.png",
      color: "#FF4F03",
    },
    401: {
      description: "Unauthorized - Anda tidak diizinkan.",
      image: "/img/401.png",
      color: "#FFCF06",
    },
    403: {
      description: "Forbidden - Anda dilarang mengakses.",
      image: "/img/403.png",
      color: "#9105C6",
    },
  };

  const data = errorData[errorCode] || {
    description: "Unknown Error",
    image: "/img/default-error.png",
    color: "#000000",
  };

  return (
    <ErrorPage
      errorCode={errorCode}
      errorDescription={data.description}
      errorImage={data.image}
      errorColor={data.color}
    />
  );
};

export default App;
