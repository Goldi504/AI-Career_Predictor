// import AppRoutes from "./routes/AppRoutes";

// function App() {
//   return <AppRoutes />;
// }

// export default App;

import { useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import FloatingAIButton from "./components/FloatingAIButton";

export default function App() {
  const location = useLocation();

  const token = localStorage.getItem("token");

  const showChat =
    token && !["/login", "/register","/chat"].includes(location.pathname);

  return (
    <>
      <AppRoutes />
      {showChat && <FloatingAIButton />}
    </>
  );
}