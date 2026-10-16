import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="bg-[#FAF7F0] w-full border-b border-stone-200">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-6 py-4">
          <Link to="/" className="flex items-center shrink-0 gap-3">
            <img src="/favicon.svg" className="h-7" alt="Logo" />
            <span className="text-2xl font-bold tracking-tight text-[#302A25]">
              Food-Edit
            </span>
          </Link>

          <ul className="flex items-center gap-8 text-sm font-medium tracking-wide">
            <Link
              to="/"
              className="text-[#514940] transition-colors duration-200 hover:text-[#B85C38]"
            >
              Home
            </Link>
            <Link
              to="/profile/collectionPage"
              className="text-[#514940] transition-colors duration-200 hover:text-[#B85C38]"
            >
              Collection
            </Link>
            <Link
              to="/profile"
              className="text-[#514940] transition-colors duration-200 hover:text-[#B85C38]"
            >
              Profile
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
