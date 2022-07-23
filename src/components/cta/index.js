import footer from './footer.svg'
import Logo from '../logo';

function Cta() {
  return (
    <section className="container mx-auto text-center py-6 content-center">
      <div className="mx-auto">
      <Logo />
      </div>
      <img className="w-1/4 mx-auto" alt="" src={footer} />

      <a href="https://github.com/tailwindtoolbox/Landing-Page" className="text-white">Tailwind Template by Tailwind Toolbox</a>
      <br /> 
      <a href="https://www.freepik.com/free-photos-vectors/background" className="text-white">Background vector created by freepik - www.freepik.com</a>


      {/* <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
        Call to Action 
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <h3 className="my-4 text-3xl leading-tight">
        Main Hero Message to sell yourself!
      </h3>
      <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
        Action!
      </button> */}
    </section>
  );
}

export default Cta;
