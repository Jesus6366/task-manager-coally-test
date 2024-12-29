import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { ChakraProvider } from "@chakra-ui/react";
import { TaskProvider } from "./context/TaskContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </ChakraProvider>
  </StrictMode>
);
