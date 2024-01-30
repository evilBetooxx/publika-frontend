const Buttons = ({ href, path, text }) => (
  <a href={href} className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-blue-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
    <svg
      className="w-6 h-6 fill-current inline-block mr-2"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path}></path>
    </svg>
    <span className="">{text}</span>
  </a>
);

export default Buttons;
