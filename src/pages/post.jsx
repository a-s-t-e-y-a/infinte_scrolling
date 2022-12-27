import Post from "../components/posts/post.template";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { useNavigate } from "react-router-dom";


let page = 5;
const getdata = async (state, setstate) => {
  axios
    .get(`https://randomuser.me/api/?results=${page}`)
    .then(async function (response) {
      await setstate([...state, ...response.data.results]);

      page = page + 1;
    })
    .catch(function (error) {
      console.log(error);
    });
};
const time = (state, setstate) => {
  setTimeout(getdata(state, setstate), 60000);
};

export default function PostTemplate() {
    const navigate = useNavigate();
  const [state, setstate] = useState([]);
  const [pg, setpg] = useState(true);
  ///////////////////////////////////////////////////////////////////
  useEffect(() => {
    getdata(state, setstate);
  }, [pg]);
  /////////////////////////////////////////////////////////////////////

  return (
    <>
      {/* {console.log("dsdds", state[1].picture.large)} */}
      <section className="text-xl font-bold p-4 text-black bg-yellow-400 mb-2 flex justify-between md:px-32 xl:px-32 items-center">
        <div>POST</div>
        <button
        className="hover:bg-black hover:text-yellow-400 border-2 border-black rounded-lg px-4 py-2"
          onClick={(e) => {
            e.preventDefault();
            localStorage.removeItem("token");
            navigate("/");
             window.location.reload();
          }}
        >
          Logout
        </button>
      </section>
      <hr class="my-2 h-px bg-black border-0 dark:bg-gray-700"></hr>
      <div className="xl:mx-96 xl:px-32 lg:mx-64 md:mx-32">
      <InfiniteScroll
        dataLength={state.length} //This is important field to render the next data
        next={() => {
          time(state, setstate);
        }}
        hasMore={true}
        loader={<h1>Loading ...</h1>}
      >
        {state.map((val, i) => (
          <Post imageurl={val.picture.large} name={val.name.first} />
        ))}
      </InfiniteScroll>
      <hr class="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>
    
    </>
  );
}
