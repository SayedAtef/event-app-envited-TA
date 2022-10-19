import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div className="text-center mt-4">
      <Link to="/create">
        <button className="text-white font-bold text-[16px] md:text-[20px] md:w-[320px] rounded-xl bg-gradient-to-r from-[#8456EC] to-[#E87BF8] py-4 px-[21px] mb-2">
          🎉 Create my event
        </button>
      </Link>
    </div>
  );
};

export default Button;
