function LoginForm() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-cover bg-no-repeat">
      <div className="rounded-xl bg-white px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-black">
          <div className="mb-4 flex flex-col items-center">
            <img src="./publika-letters.png" width="200" alt="publika-logo" />
            <h1 className="text-gray-900 text-xl font-semibold">
              Ingresa tus credenciales
            </h1>
          </div>
          <form action="#">
            <div className="mb-4 text-lg">
              <label className="block text-gray-900 text-sm mb-2 font-light ml-1">
                Usuario
              </label>
              <input
                className="rounded-3xl border-none bg-blue-500 bg-opacity-70 px-6 py-2 text-center text-inherit placeholder-slate-500 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="name"
                placeholder="publika"
              />
            </div>

            <div className="mb-4 text-lg">
              <label className="block text-gray-900 text-sm mb-2 font-light ml-1">
                Contraseña
              </label>
              <input
                className="rounded-3xl border-none bg-blue-500 bg-opacity-70 px-6 py-2 text-center text-inherit placeholder-slate-500 shadow-lg outline-none backdrop-blur-md"
                type="Password"
                name="name"
                placeholder="*******"
              />
              
            </div>
            <div className="mt-8 flex justify-center text-lg text-gray-900">
              <button
                type="submit"
                href="/dashboard"
                className="rounded-2xl bg-blue-500 bg-opacity-70 px-10 py-2 font-semibold shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-blue-500"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
