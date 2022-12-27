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
              localStorage.getItem('token') == process.env.REACT_APP_TOKEN_KEY ? (
                <Post />
              ) : (
                <Login />
              )
            }
          ></Route>
          <Route
            path="/post"
            element={
              localStorage.getItem('token') == process.env.REACT_APP_TOKEN_KEY ? (
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
