export default function Submit_Button({ value, onsubmit }) {
  return (
    <div className="mx-auto">
      <button
        onClick={onsubmit}
        className="my-4 form-control block w-full px-4 py-2 text-xl font-normal text-black bg-yellow-400 text-black bg-clip-padding border border-solid border-yellow-300 rounded hover:bg-yellow-400"
      >
        {value}
      </button>
    </div>
  );
}
