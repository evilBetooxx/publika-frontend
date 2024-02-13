import { sendMessageRequest } from "../../api/message";

function MessageForm() {
  const sendMessage = async (message) => {
    try {
      await sendMessageRequest(message);
    } catch (error) {
      console.error("Error enviando el mensaje:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    if (message) {
      sendMessage(message);
      e.target.message.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="message"
        className="rounded-3xl border-none bg-blue-400 bg-opacity-70 px-6 py-2 text-center text-inherit placeholder-slate-500 shadow-lg outline-none backdrop-blur-md"
      />
      <button
        type="submit"
        className="bg-blue-500 rounded-md px-2 m-3 text-white"
      >
        Enviar
      </button>
    </form>
  );
}

export default MessageForm;
