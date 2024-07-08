import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import './styles/main.scss';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<></>}>
          <Routes>
            <Route
              path="/"
              element={
                <>
               <nav class="container mx-auto p-4 pt-6 mb-4 flex items-center text-gray-700">
  <a class="text-2xl font-semibold cursor-pointer">Acme</a>
  <div class="sm:hidden ml-auto">
    <img class="w-auto h-12 cursor-pointer" src="https://img.icons8.com/dotty/80/000000/hamburger.png" />
  </div>
  <div class="hidden sm:block ml-auto">
    <a class="font-semibold mr-4 hover:underline cursor-pointer">Lorem</a>
    <a class="font-semibold mr-4 hover:underline cursor-pointer">Lorem</a>
    <a class="font-semibold mr-4 hover:underline cursor-pointer">Lorem</a>
    <a class="font-semibold mr-4 hover:underline cursor-pointer">Lorem</a>
    <a class="font-semibold mr-4 hover:underline cursor-pointer">Lorem</a>

    <a class="py-2 px-4 bg-gray-800 rounded text-lg font-semibold text-white cursor-pointer hover:bg-gray-900">Lorem</a>
  </div>
</nav>
<main class="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700">
  <div class="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
    <h1 class="text-4xl font-semibold ">Welcome back.</h1>
  </div>
  <div class="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
    <input class="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500" type="text" placeholder="Email" />
    <input class="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500" type="text" placeholder="Password" />

    <div class="flex items-center">
      <div class="w-1/2 flex items-center">
        <input id="remember-me" type="checkbox" class="mt-1 mr-2" />
        <label for="remember-me">Remember me!</label>
      </div>
      <button class="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900" type="submit">
        Log In
      </button>
    </div>
  </div>
  <div class="text-right w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
    <a class="text-sm font-bold text-teal-500 hover:underline cursor-pointer">Forgot your password?</a>
  </div>
  <div class="flex justify-center w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12">
    <p class="font-semibold text-gray-600 text-sm">
      Ei prima conclusionemque eum. Porro vivendum eum in, eam ex homero
      deserunt, ius ut dolorem iracundia.
    </p>
  </div>
</main>
                </>
              }
            />
            <Route path="*" element={<></>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
