export default function PostTemplate({ imageurl, name }) {
  return (
    <>
      <div className="flex justify-between mx-8 items-center">
        <div>
          <h1>{name}</h1>
        </div>
        <img className="h-12 w-12 rounded-full m-2" src={imageurl}></img>
      </div>
    </>
  );
}
