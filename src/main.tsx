import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import PrivacyPage from "./pages/Privacy/index.tsx";
import { AppContextProvider } from "./hooks/useModal.tsx";


export const AppLayout = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        /* errorElement: <Error />, */
        children: [
          { index: true, element: <Home /> },
        ],
      },
      { path: 'privacy', element: <PrivacyPage /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
