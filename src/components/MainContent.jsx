const MainContent = () => {
  return (
    <>
      <img
        src="image-1.png"
        alt="main-content"
        className="mx-auto my-0 py-0 mt-3 md:my-32 md:scale-150 xl:hidden"
      />
      <img
        src="image-desktop.png"
        alt="main-content"
        className="hidden xl:block m-auto scale-75"
      />
    </>
  );
};

export default MainContent;
