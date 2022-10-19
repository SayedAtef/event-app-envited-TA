import { Hero, MainContent, Button } from "./index";

const Wrapper = () => {
  return (
    <div className="bg-[#F6F2FF] flex flex-col xl:grid xl:grid-cols-2 justify-center md:h-screen">
      <div className="xl:hidden">
        <Hero />
      </div>
      <MainContent />
      <div className="xl:m-auto ">
        <div className="hidden xl:block ">
          <Hero />
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Wrapper;
