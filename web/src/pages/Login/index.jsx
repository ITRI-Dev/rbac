const LoginPage = () => {
  return (
    <>
      <nav className="container mx-auto p-4 pt-6 mb-4 flex items-center text-gray-700">
        <a href="/" className="text-2xl font-semibold cursor-pointer">RBAC</a>
        <div className="sm:hidden ml-auto">
          <img
            className="w-auto h-12 cursor-pointer"
            src="https://img.icons8.com/dotty/80/000000/hamburger.png"
          />
        </div>
      </nav>

      <main className="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700">
        <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
          <h1 className="text-4xl font-semibold ">Welcome back.</h1>
        </div>
        <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
          <input
            className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
            type="text"
            placeholder="Email"
          />
          <input
            className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
            type="text"
            placeholder="Password"
          />

          <div className="flex items-center">
            <button
              className="ml-auto mr-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900"
              type="submit"
            >
              Log In
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;