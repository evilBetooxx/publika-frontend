import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { usePost } from "../../context/PostContext.jsx";
import { uploadPostImageRequest } from "../../api/post.js";
import io from "socket.io-client";

var socket = io("http://localhost:5000/publika");

function PostForm() {
  
  const { createPost, postNotify, categories ,getCategories } = usePost();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [imagePreview, setImagePreview] = useState(null);
  const [valueCategory, setValueCategory] = useState({});
  let selectedCategory = {};

  // const { user } = useAuth();
  

  useEffect( () => {
    getCategories();
  }, [])

  useEffect(() => {
    if (categories.length > 0) {
      console.log(categories[0]);
      setValueCategory(categories[0]);
      console.log(valueCategory);
    }
  }, [categories]);

  const handleCategoryChange = (event) => {
    selectedCategory = categories.find(
      (category) => category.name === event.target.value
    );
    setValueCategory(selectedCategory);
  };

  const handleFileInputChange = (event) => {
    const fileURL = event.target.files[0];
    const objectUrl = URL.createObjectURL(fileURL);
    setImagePreview(objectUrl);
  };

  const onSubmit = handleSubmit(async (values) => {
    const formData = new FormData();
    formData.append("file", values.photo[0]);
    const logoURL = await uploadPostImageRequest(formData);
    console.log(logoURL.data);
    values.photo = logoURL.data;
    values.categoryID = selectedCategory?._id || valueCategory._id;
    await createPost(values);
    socket.emit('newPost', values.title);
    postNotify(values.title);
    console.log("Publikación creada");
    toast.success("Publikación creada correctamente");
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  });

  return (
    <body className="bg-gray-100 items-center justify-content">
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">
            <span className="text-blue-900">¡Publika</span> tu anuncio aquí!
          </h1>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block mb-2 text-sm text-gray-600">Título</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("title", {
                  required: {
                    value: true,
                    message: "Titulo invalido",
                  },
                  maxLength: {
                    value: 30,
                    message: "Maximo 30 caracteres",
                  },
                })}
                placeholder='Publika un título para tu anuncio'
              />
              {errors.title && (
                <span className="text-red-500 text-sm">
                  {errors.title.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm text-gray-600">
                Contenido
              </label>
              <textarea
                type="text"
                rows={2}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                {...register("content", {
                  required: {
                    value: true,
                    message: "Contenido invalido",
                  },
                  maxLength: {
                    value: 80,
                    message: "Maximo 80 caracteres",
                  },
                })}
                placeholder="Publika un contenido para tu anuncio"
              />
              {errors.content && (
                <span className="text-red-500 text-sm">
                  {errors.content.message}
                </span>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm text-gray-600">
                Categoría
              </label>
              <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={valueCategory.name}
              onChange={handleCategoryChange}
              >
                {categories.map((category) => (
                  <option key={category._id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm text-gray-600 mt-4">
                Sube tu foto:
              </label>
              <img
                src={imagePreview ? imagePreview : "/publika-logo.png"}
                alt="Foto de perfil"
                className="w-40 h-auto mx-auto rounded-md object-cover mb-2"
              />
              <input
                type="file"
                {...register("photo")}
                onChange={handleFileInputChange}
                className="w-full border rounded-lg px-3 py-2 bg-transparent cursor-pointer"
              ></input>
            </div>
            <button
              type="submit"
              className="w-32 bg-gradient-to-r from-blue-400 to-blue-700 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2"
            >
              Publikar
            </button>
          </form>
        </div>
      </div>
      <Toaster position="top-right" />
    </body>
  );
}

export default PostForm;
