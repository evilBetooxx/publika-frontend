import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });
  return (
    <div className="flex h-screen w-full items-center justify-center bg-cover bg-no-repeat">
      <div className="rounded-xl bg-white px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-black">
          <div className="mb-4 flex flex-col items-center">
            <img src="./publika-letters.png" width="200" alt="publika-logo" />
            <h1 className="text-gray-900 text-xl font-semibold">
              ¡ Regístrate !
            </h1>
            {registerErrors.map((error, i) => (
              <div
                className="bg-red-500 p-2 text-white text-center my-2 rounded"
                key={i}
              >
                {error}
              </div>
            ))}
          </div>
          <form onSubmit={onSubmit}>
            <div className="mb-4 text-lg">
              <label className="block text-gray-900 text-sm mb-2 font-light ml-1">
                Ingresa tu usuario
              </label>
              <input
                className="rounded-3xl border-none bg-blue-500 bg-opacity-70 px-6 py-2 text-center text-inherit placeholder-slate-500 shadow-lg outline-none backdrop-blur-md"
                type="text"
                {...register("username", { required: true })}
                placeholder="publika"
              />
              {errors.username && (
                <p className="text-red-500 text-sm ml-2">Usuario inválido</p>
              )}
            </div>

            <div className="mb-4 text-lg">
              <label className="block text-gray-900 text-sm mb-2 font-light ml-1">
                Ingresa tu contraseña
              </label>
              <input
                className="rounded-3xl border-none bg-blue-500 bg-opacity-70 px-6 py-2 text-center text-inherit placeholder-slate-500 shadow-lg outline-none backdrop-blur-md"
                type="Password"
                {...register("password", { required: true })}
                placeholder="*******"
              />
              {errors.password && (
                <p className="text-red-500 text-sm ml-2">Contraseña inválida</p>
              )}
            </div>
            <div className="mt-8 flex justify-center text-lg text-gray-900">
              <button
                type="submit"
                className="rounded-2xl bg-blue-500 bg-opacity-70 px-10 py-2 font-semibold shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-blue-500"
              >
                Registrarse
              </button>
            </div>
          </form>
          <div className="mt-8 flex justify-center text-lg text-gray-900">
          <p className="text-sm">
              ¿Ya tienes una cuenta?{" "}
              <a href="/login" className="text-cyan-600">
                Inicia Sesión
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
