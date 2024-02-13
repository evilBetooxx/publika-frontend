import { useEffect, useState } from "react";
import { getMessagesRequest } from "../../api/message";

function MessageView() {
  const [messages, setMessages] = useState([]);

  const showMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const getMessages = async () => {
    try {
      const response = await getMessagesRequest();
      if (response.status === 502) {
        console.log("502 Bad Gateway");
        setTimeout(getMessages, 1000);
      } else if (response.status !== 200) {
        showMessage(response.statusText);
        setTimeout(getMessages, 100);
      } else {
        const message = await response.text();
        showMessage(message);
        getMessages();
      }
    } catch (error) {
      console.error("Error:", error);
      setTimeout(getMessages, 1000);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </div>
  );
}

export default MessageView;
