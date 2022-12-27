import Login from "./pages/login";
import Post from "./pages/post";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route
            path="/"
            element={
              localStorage.getItem('token') ==
              "katqgfe8932dfs8923uhdfshjfew7892378923yu38967821drew78923789" ? (
                <Post />
              ) : (
                <Login />
              )
            }
          ></Route>
          <Route
            path="/post"
            element={
              localStorage.getItem('token') ==
              "katqgfe8932dfs8923uhdfshjfew7892378923yu38967821drew78923789" ? (
                <Post />
              ) : (
                <Login />
              )
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
