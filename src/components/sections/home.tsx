var ReactRotatingText = require('react-rotating-text');

export const Home = () => {
    return (
        <section className="relative">
          <div id="home" className="absolute -top-16"></div>
          <div className="container h-[94vh] mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <article className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font text-4xl mb-4 font-medium">
                {"Hi, I'm Eli."}
                
                <span className="hidden md:block">
                {'I '}
                <ReactRotatingText items={
                    [
                        'code, I create and I captivate', 
                        'am driven by passion and precision', 
                        'believe in the art of coding',
                        'transform ideas into experiences',
                        'turn vision into virtual realities',
                        'innovate with every line',
                        'love to build amazing apps'
                    ]
                } />
                </span>

                <span className="block md:hidden text-xl mt-4">
                    {'I work on '}
                    <ReactRotatingText items={
                        [
                            'Frontend', 
                            'Backend', 
                            'Cloud',
                            'DevOps'
                        ]
                    } />
                </span>
              </h1>
              <p className="mb-8 leading-relaxed hidden md:block">
                {"A developer skilled in building the front and backend of web applications using frameworks like NextJS, Django, and ASP.NET CORE. I am passionate about creating user-friendly and efficient web solutions to cater to a wide range of business needs."}
              </p>
              <p className="mb-8 leading-relaxed block md:hidden">
                {"A developer skilled in building the front and backend of web applications using frameworks like NextJS, Django, and ASP.NET CORE."}
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-xs md:text-lg">
                  {"Work With Me"}
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-xs md:text-lg">
                  {"See My Past Work"}
                </a>
              </div>
            </article>
            <article className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./coding.svg"
              />
            </article>
          </div>
        </section>
      );
}