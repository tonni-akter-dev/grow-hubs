import Image from "next/image";
import trustedimg from "../../../../public/home/trustedimg.png";
import profile from "../../../../public/home/profile.png";
import play from "../../../../public/home/play.png";
import Ratings from "./Ratings";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  tags: string[];
  text: string;
  amount: string;
  earnings: string;
  rating: number;
  videoUrl?: string;
}
interface TestimonialCardProps {
  data: Testimonial;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  data,
  setIsOpen,
}) => {
  return (
    <>
      <div
        className="h-[420px] bg-white rounded-4xl pb-1 sm:h-auto sm:pb-0"
        style={{ boxShadow: "0 8px 28px 0 rgba(20, 20, 43, 0.10)" }}
      >
        <div className="max-w-[400px]   lg:max-w-[1230px]  flex lg:gap-[42px] gap-5  py-3 ps-6 pb-[22px] pe-8 mx-auto w-full">
          <div className="relative">
            {/* Image */}
            <Image
              className="w-[155px] lg:w-[454px] h-full object-contain"
              src={trustedimg}
              alt="Testimonial visual"
            />

            {/* Play Button Overlay */}
            <button
              className="absolute inset-0 flex items-center justify-center"
              aria-label="Play video"
              onClick={() => setIsOpen(true)}
            >
              <Image src={play} alt="Play" />
            </button>
          </div>

          {/* rightside */}
          <div className="w-full flex-1 flex-col items-start text-start">
            {/* profile */}
            <div className="flex  sm:justify-between sm:items-start w-full gap-4">
              {/* Profile Section */}
              <div className="flex flex-col sm:flex-row gap-3 sm:items-start">
                <Image
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                  src={profile}
                  alt={data.name}
                />
                <div className="">
                  <h5 className="text-base  text-[#030711] leading-tight font-semibold">
                    {data.name}
                  </h5>
                  <p className="text-sm sm:text-base text-[#4B5563]">
                    {data.position.split(" at ")[0]} at{""}
                    <span className=" ">{data.position.split(" at ")[1]}</span>
                  </p>
                </div>
              </div>

              {/* Ratings Section */}
              {/* <div className="mt-2 sm:mt-0">
    <Ratings rating={data.rating} />
  </div> */}
            </div>

            {/* tags */}
            <div className="hidden lg:flex gap-3 items-center mb-10 flex-wrap mt-5">
              {data.tags.map((tag, index) => (
                <button
                  key={index}
                  className="text-[#030711] text-body font-medium leading-6 border border-secondary-900 rounded-[100px] px-4 py-2.5"
                >
                  {tag}
                </button>
              ))}
            </div>

            <p className="hidden lg:block lg:text-h4 text-[#030711] leading-[38px] tracking-[-0.28px] lg:max-w-[495px] mb-10">
              {data.text}
            </p>

            <h2 className=" font-semibold ">{data.amount}</h2>
            <p className="text-[12px] text-[#4B5563] font-medium uppercase ">
              {data.earnings}
            </p>
          </div>
        </div>
        <p className="px-5 lg:text-h4 lg:hidden  text-[#030711] leading-[38px] tracking-[-0.28px] lg:max-w-[495px] mb-10">
          {data.text}
        </p>
        {/* tags */}
        <div className=" px-5 flex lg:flex  gap-3   items-center mb-10 flex-wrap mt-5">
          {data.tags.map((tag, index) => (
            <button
              key={index}
              className="text-[#030711] lg:hidden border border-secondary-900 rounded-[100px] px-2 py-3"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Video Modal */}
    </>
  );
};

export default TestimonialCard;
