import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";

import "./App.css";

export default function App() {
  return (
    <AuthProvider>
     <RoutesApp/>
    </AuthProvider>
  )
}