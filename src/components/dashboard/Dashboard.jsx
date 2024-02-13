import LoadCard from "../card/LoadCard.jsx";
import Layout from "../common/Layout.jsx";
import { Toaster, toast } from "sonner";
import { io } from "socket.io-client";
import { useEffect } from "react";
import { usePost } from "../../context/PostContext.jsx";

const socket = io("http://localhost:4000/publika");

function Dashboard() {
  const { notify } = usePost();

  useEffect(() => {
    socket.on("newPost", (title) => {
      toast.success(`Nuevo anuncio publikado: ${title}`);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });

    return () => {
      socket.off("newPost");
    };
  }, [notify]);

  return (
    <Layout>
      <LoadCard />
      <Toaster position='top-right' />
    </Layout>
  );
}

export default Dashboard;
