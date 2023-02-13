import logo from "../../asserts/images/logo.png";
import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <div className="h-screen flex items-center justify-center ">
      <div>
        <div className="flex grid md:grid-cols-2 items-center">
          <div className="flex justify-center p-5">
            <img src={logo} className="h-32" alt="Santhosh Audios" />
          </div>
          <div className="text-center md:border-8 border-white border-l-[#6b78b1] p-5 pb-10">
            <div className="text-9xl text-[#6b78b1] font-medium my-5">404</div>
            <div className="text-5xl font-bold font-mono">Page Not Found</div>
          </div>
        </div>
        <div className="my-10 flex items-center justify-center">
          <Link to="/" className="rounded-full bg-gradient-to-r from-[#6b78b1] to-blue-500 px-8 py-3 text-white font-bold text-md flex gap-4 hover:animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
