import { useForm } from "react-hook-form";
import { sendMessageRequest } from "../../api/message";

function MessageForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    try {
      await sendMessageRequest(values);
    } catch (error) {
      console.error("Error enviando el mensaje:", error);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        {...register("content", { required: true })}
        placeholder="¡ Escribe un comentario !"
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
