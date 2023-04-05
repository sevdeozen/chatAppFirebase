import { useEffect, useState } from "react";
import Auth from "./components/Auth";
import "./styles/style.css";
function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const permanentToken = localStorage.getItem("token");
    const temporaryToken = sessionStorage.getItem("token");
    permanentToken ? setToken(permanentToken) : setToken(temporaryToken);
  }, []);
  if (!token) return <Auth setToken={setToken} />;
  return (
    /*valudation */

    <div className="container">
      <h1>Chat Room</h1>
    </div>
  );
}

export default App;
