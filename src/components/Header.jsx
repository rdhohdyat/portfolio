import Nav from "./Nav";

const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 container mx-auto pt-5 z-50">
      <div className="flex justify-between">
        <h1 className="text-3xl">
          Ridho<span className="text-accent">.</span>
        </h1>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
