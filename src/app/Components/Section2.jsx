import ButtonFill from './buttons/ButtonFill';


const Section2 = () => {
  return (
    <div className='bgsection2 bg-fixed overflow-y-scroll bg-cover bg-local'>
        <div className='blob1'></div>
        <div className='blob2'></div>
      <div className='blob3'></div>

        <section className="relative z-10 mt-[-1rem] ">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-6">
              <h1 className="textOde max-w-2xl mb-4 text-[84.59px] tracking-tight leading-none text-white">ABOUT US</h1>
              <p className="poppins-regular max-w-2xl mb-6 font-light text-justify text-white text-[22px]">
                Enter a realm where numbers rule and imagination reigns. Join Cipher Sun in his battle against Nyx Ricinus to save reality. Explore themes of growth and order across cosmic dimensions. Dive into the infinite possibilities where math and imagination collide. Welcome to Cipher Sun Universe.
              </p>
              <a href="#" className="inline-flex items-center justify-center py-3 text-center">
                <ButtonFill title='JOIN US' height='65px' width='211px' fontSize='26px'backgroundColor='#B58856' outline='2px solid #B58856' />
              </a>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
              <img src="/assets/section2/Component1.png" className='h-[840px] w-[700px] rotate-img' alt="mockup" />
            </div>
          </div>
        </section>
      </div>
  );
}

export default Section2;
