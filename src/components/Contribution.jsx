import GitHubCalendar from "react-github-calendar";

const Contribution = () => {
  const theme = {
    light: [
      "rgb(39 39 42)",
      "rgb(6 78 59)",
      "rgb(6 95 70)",
      "rgb(52 211 153)",
      "rgb(110 231 183)", 
    ],
  };

  return (
    <div className="hidden sm:block container bg-primary pt-12 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-2xl sm:text-4xl font-semibold text-white text-center">
          My Github Contribution
        </h1>
        <div className="border-4 border-white/10 p-6 rounded-xl  shadow-lg max-w-lg xl:max-w-full">
          <GitHubCalendar
            className="no-scroll-bar"
            username="rdhohdyat"
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
};

export default Contribution;
