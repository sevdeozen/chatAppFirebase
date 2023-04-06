import { useEffect, useRef, useState } from "react";
import Auth from "./components/Auth";
import "./styles/style.css";
import Chat from "./components/Chat";
function App() {
  const [token, setToken] = useState(null);
  const [room, setRoom] = useState(null);
  const inputRef = useRef(null);
  useEffect(() => {
    const permanentToken = localStorage.getItem("token");
    const temporaryToken = sessionStorage.getItem("token");
    permanentToken ? setToken(permanentToken) : setToken(temporaryToken);
  }, []);
  if (!token) return <Auth setToken={setToken} />;
  return (
    /*valudation */

    <div className="container">
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room-container">
          <h1>Chat Room</h1>
          <p>Which chat room do you want to enter?</p>
          <input type="text" ref={inputRef} />
          <button onClick={() => setRoom(inputRef.current.value)}>
            Enter the chat room
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
