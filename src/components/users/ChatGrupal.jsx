import MessageForm from "./MessageForm";
import MessageView from "./MessageView";

function ChatGrupal() {
  return (
    <div className="flex flex-col items-center justify-center min-h-max bg-white rounded-md ">
      <h1 className="text-2xl">Bienvenido a la Comunidad</h1>
      <h3 className="font-extralight">
        Todos pueden ver los comentarios que envíes
      </h3>
      <MessageForm />
      <MessageView />
    </div>
  );
}

export default ChatGrupal;
