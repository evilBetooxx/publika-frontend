import Buttons from "../dashboard/Buttons.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import { usePost } from "../../context/PostContext.jsx";
import { useEffect, useState } from "react";
import { logoutRequest } from "../../api/auth";

function Sidebar() {
  const [valueCategory, setValueCategory] = useState({});
  const { user } = useAuth();
  const { categories, getCategories } = usePost();
  let selectedCategory = {};

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setValueCategory(categories[0]);
    }
  }, [categories]);

  const handleCategoryChange = (event) => {
    selectedCategory = categories.find(
      (category) => category.name === event.target.value
    );
    setValueCategory(selectedCategory);
  };

  const handleLogout = async () => {
    await logoutRequest();
    window.location.reload()
  }

  return (
    <main>
      <div className="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out">
        <div className="space-y-6 md:space-y-10 mt-10">
          <h1 className="font-bold text-4xl text-center md:hidden">
            D<span className="text-teal-600">.</span>
          </h1>
          <img
            src="/publika-letters.png"
            width="200"
            className="flex items-center justify-center mx-auto"
            alt="Logo"
          />

          <div id="profile" className="space-y-3">
            <img
              src={user.photo}
              alt="Avatar user"
              className="w-10 md:w-16 rounded-full mx-auto"
            />
            <div>
              <h2 className="font-medium text-xs md:text-sm text-center text-teal-500">
                {user.username}
              </h2>
              <p className="text-xs text-gray-500 text-center">Usuario</p>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-600">
              Busca Publikaciones por Categoría
            </label>
            <div className="flex items-center justify-between">
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
              <button className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block">
                <svg
                  className="w-4 h-4 fill-current"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div id="menu" className="flex flex-col space-y-2">
            <Buttons
              href="/dashboard"
              path="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              text="Dashboard"
            />
            <Buttons
              href="/post/new"
              path="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
              text="Posts"
            />
            <Buttons
              href="/chat"
              path="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
              text="Mensajes"
            />
            <Buttons
              href="/users"
              path="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
              text="Usuarios"
            />

            <button
              className="flex text-sm font-medium text-gray-700 py-2 px-2 hover:bg-red-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
              onClick={handleLogout}
            >
              <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                <path d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"></path>
              </svg>
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Sidebar;
