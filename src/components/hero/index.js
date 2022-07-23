import playlist from './playlist.svg'

function Hero() {

  return (
    <div className="pt-24 text-white ">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* <!--Left Col--> */}
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          {/* <p className="uppercase tracking-loose w-full">Super easy!</p> */}
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Convert a list of youtube links into a youtube playlist
          </h1>
          <p className="leading-normal text-2xl mb-8">
            Take a list of youtube urls or video id's and quickly create a playlist from them. Max 50 links!
          </p>
          <a className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" href="#playlist">
            Scroll to the useful bit
          </a>
        </div>
        {/* <!--Right Col--> */}
        <div className="w-full md:w-3/5 py-6 text-center">
          <img className="w-full md:w-4/5 z-50" alt="" src={playlist} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
