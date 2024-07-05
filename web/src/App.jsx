import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

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
                  <h1>Hello</h1>
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
