import { useEffect, useState } from "react";
import { getMessagesRequest } from "../../api/message";
import { getUserByIdRequest } from "../../api/users";

function MessageView() {
  const [messages, setMessages] = useState([]);

  const showMessage = async (data) => {
    console.log(data);
    //const user = await getUserByIdRequest(data.userID);
    //console.log(user);
    //data.user = user.data;
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
    <div className="flex flex-col items-center justify-center">
      {messages.map((message, index) => (
        <div className="text-black items-center justify-center py-2 px-2 bg-cyan-500 rounded-md" key={index}>
          {message.content}
          <br />
          
        </div>
      ))}
    </div>
  );
}

export default MessageView;
