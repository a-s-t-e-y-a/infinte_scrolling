import { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../constant/login";
import Text from "../components/login_page/textfield";
import Submit_Button from "../components/login_page/button";
import Heading from "../components/login_page/heading";
const info = login;
export default function Login() {
  const [state, setState] = useState({
    username: " ",
    password: " ",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };
  const onClick = (e) => {
    e.preventDefault();
    if (state.username == "boo" && state.password == "bar") {
      const token = process.env.REACT_APP_TOKEN_KEY;
      localStorage.setItem("token", token);
      navigate("/post");
      window.location.reload();
    }
  };

  return (
    <>
      <Heading heading="Login" />
      <form className="mx-8 md:mx-32 xl:mx-96 xl:px-32">
        {info.map((val, i) => (
          <>
            <label for={`${val.labelText}`}>{val.labelText}</label>
            <Text
              type={val.type}
              placeholder={val.placeholder}
              isRequired={val.isRequired}
              name={val.id}
              id={val.id}
              handleChange={handleChange}
            />
          </>
        ))}
        <Submit_Button onsubmit={onClick} value="Login" />
      </form>
    </>
  );
}
