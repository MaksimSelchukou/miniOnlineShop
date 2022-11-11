import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./components/pages/home/Home";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  </React.StrictMode>
);
