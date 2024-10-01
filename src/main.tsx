import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CombinedProviders } from "./provider/CombineProvider.tsx";
// import { UserProvider } from "./context/UserContext";

createRoot(document.getElementById("root")!).render(
  <CombinedProviders>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CombinedProviders>
);
