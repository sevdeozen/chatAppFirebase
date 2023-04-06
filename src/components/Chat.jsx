import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db, auth } from "../firebase/FirebaseConfig";

const Chat = ({ room }) => {
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "messages");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });
  };

  useEffect(() => {
    const queryMessage = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    onSnapshot(queryMessage, (snapshot) => {
      let tempMessages = [];
      snapshot.forEach((doc) =>
        tempMessages.push({ ...doc.data(), id: doc.id })
      );
      setMessages(tempMessages);
    });
  }, []);

  return (
    <div className="chat">
      <header>
        <p>{auth.currentUser.displayName} </p>
        <h2>{room}</h2>
        <a href="/">Another room</a>
      </header>

      <div className="messages">
        {messages.map((message) => (
          <>
            {auth.currentUser.displayName === message.user ? (
              <p className="user-message">{message.text}</p>
            ) : (
              <p className="message">
                <span>{message.user}: </span>
                <span>{message.text}</span>
              </p>
            )}
          </>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setNewMessage(e.target.value);
          }}
          placeholder="Type your message.."
          type="text"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
