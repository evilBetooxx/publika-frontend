import { useEffect, useState } from "react";
import { getMessagesRequest } from "../../api/message";

function MessageView() {
  const [messages, setMessages] = useState([]);

  const showMessage = (data) => {
    setMessages((prevMessages) => [...prevMessages, data]);
  };

  const getMessages = async () => {
    try {
      const response = await getMessagesRequest();
      console.log(response);
      if (response && response.status === 200) {
        showMessage(response.data);
        getMessages();
      } else {
        showMessage("Error fetching messages");
        setTimeout(getMessages, 1000);
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
        <div className="text-black" key={index}>
          {message.content}
        </div>
      ))}
    </div>
  );
}

export default MessageView;
