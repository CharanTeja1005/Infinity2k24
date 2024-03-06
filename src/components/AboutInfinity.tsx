import InfinityImg from '../assets/About Infinity.jpeg'

function AboutInfinity(): JSX.Element {
  return (
    <div className="py-10 my-10 h-auto items">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8">
            <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
              ABOUT{" "}
              <span className="inline bg-gradient-to-r from-[#88f27a]  to-[#6aff00] text-transparent bg-clip-text">
                INFINITY
              </span>
            </p>
          </h2>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row">
        <div className="flex w-full lg:w-1/2 lg:order-2 items-center justify-center">
          <img src={InfinityImg} alt="Infinity Event" className="w-1/3 lg:w-1/2 mx-auto lg:mx-0" />
        </div>
        <div className="lg:w-1/2 lg:order-1">
          <p className="text-lg lg:text-3xl text-center lg:text-left leading-relaxed">
            Welcome to INFINITY, the premier National level technical symposium hosted by the esteemed CSE Department, University College of Engineering. INFINITY isn't just about technology; it's a celebration of creativity and diversity. Engage in lively discussions, dive into thrilling competitions, and enjoy fun-filled games that promise excitement and laughter. Come join us on March 22nd and 23rd for an unforgettable fusion of technical and cultural celebration.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutInfinity;
