

'use client';
import CircularImages from "./CircularImages";

const GotoTorvert = () => {

  return (
    <div className="bg-[#041527] w-full relative min-h-screen flex flex-col items-center justify-center p-4 pt-[120px]">

      <div className="text-center">
        <button className="text-neutral-50 text-body font-semibold py-3 px-3.5 bg-[#62697199] rounded-[100px]">TORVET </button>
        <h1 className='text-[36px] lg:text-display font-bold  leading-[40px] lg:leading-[57px] banner_heading my-5 '>Where content connects  <br /> and converts. </h1>
        <p className="text-white text-h6 leading-[30px]">Explore posts, discover offers, and engage with creators  <br />
          all in one central space..</p>
      </div>

      <CircularImages />



    </div>
  );
};

export default GotoTorvert;
