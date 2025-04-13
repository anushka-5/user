import { Link } from "react-router-dom";

const UserAccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff0f3]">
      <h1 className="text-3xl font-bold mb-6 text-[#cc3366]">Welcome to Pink Panther</h1>
      <div className="space-y-4 w-full max-w-xs">
        <Link to="/user/login">
          <button className="w-full bg-[#d28ea0] text-white py-2 rounded-2xl shadow-md hover:bg-[#c17389] transition">
            Login
          </button>
        </Link>
        <Link to="/user/signup">
          <button className="w-full bg-[#d28ea0] text-white py-2 rounded-2xl shadow-md hover:bg-[#c17389] transition">
            Signup
          </button>
        </Link>
        <Link to="/user/profile">
          <button className="w-full bg-[#d28ea0] text-white py-2 rounded-2xl shadow-md hover:bg-[#c17389] transition">
            Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserAccess;