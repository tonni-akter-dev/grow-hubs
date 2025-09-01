import React from "react";
import threads from "../../../../public/home/threads.png";
import consultants from "../../../../public/home/consultants.svg";
import consultant1 from "../../../../public/home/consultant1.svg";
import blogs from "../../../../public/home/blogs.svg";
import blogs1 from "../../../../public/home/blogs1.svg";
import webinars from "../../../../public/home/webinars.svg";
import live from "../../../../public/home/live.svg";
import live1 from "../../../../public/home/live1.svg";
import podcast from "../../../../public/home/podcast.svg";
import merchandise from "../../../../public/home/merchandise1.svg";
import assesment from "../../../../public/home/assesment.svg";
import lesson1 from "../../../../public/home/lesson1.svg";
import communities from "../../../../public/home/communities.svg";
import events1 from "../../../../public/home/events1.svg";
import courses from "../../../../public/home/courses.svg";
import Image from "next/image";

const TorvertIcons = () => {
  return (
    <div>
      <div className="absolute z-40 right-[15%] top-[13%] flex flex-col items-center gap-2">
        <Image src={consultants} alt="" />
        <p className="text-[#FFFFFFD9] font-medium text-h6">Consultants</p>
      </div>
      <div className="absolute z-40 right-[20%] top-[29%] flex flex-col items-center gap-2">
        <Image src={blogs} alt="" />
        <p className="text-[#FFFFFF3D] font-medium text-h6">Blogs</p>
      </div>
      <div className="absolute z-40 right-[-4%] top-[34%] flex items-center gap-2">
        <Image src={threads} alt="" />
        <p className="text-[#FFFFFF66] font-medium text-h6">Threads</p>
      </div>
      <div className="absolute z-40 right-[-14%] top-[47%] flex flex-col items-center gap-2">
        <Image src={webinars} alt="" />
        <p className="text-[#FFFFFF66] font-medium text-h6">Webinars</p>
      </div>
      <div className="absolute z-40 right-[1%] top-[60%] flex flex-col items-center gap-2">
        <Image src={live} alt="" />
        <p className="text-[#FFFFFF75] font-medium text-h6">Live streaming</p>
      </div>
      <div className="absolute z-40 right-[0%] bottom-[18%] flex flex-col items-center gap-2">
        <Image src={consultant1} alt="" />
        <p className="text-[#FFFFFFCC] font-medium text-h6">Consultants</p>
      </div>
      <div className="absolute z-40 right-[12%] bottom-[5%] flex flex-col items-center gap-2">
        <Image src={podcast} alt="" />
        <p className="text-[#FFFFFFCC] font-medium text-h6">Podcasts</p>
      </div>

      <div className="absolute z-40 right-[34%] bottom-[3%] flex flex-col items-center gap-2">
        <Image src={merchandise} alt="" />
        <p className="text-[#FFFFFF70] font-medium text-h6">Merchandise</p>
      </div>
      <div className="absolute z-40 right-[49%] bottom-[15%] flex items-center gap-2">
        <Image src={assesment} alt="" />
        <p className="text-[#FFFFFF4D] font-medium text-h6">Assessments</p>
      </div>
      <div className="absolute z-40 left-[22%] bottom-[23%] flex flex-col items-center gap-2">
        <Image src={blogs1} alt="" />
        <p className="text-[#FFFFFF3D] font-medium text-h6">Blogs</p>
      </div>
      <div className="absolute z-40 left-[6%] bottom-[12%] flex flex-col items-center gap-2">
        <Image src={lesson1} alt="" />
        <p className="text-[#FFFFFF33] font-medium text-h6">Lessons</p>
      </div>
      <div className="absolute z-40 left-[9%] bottom-[38%] flex flex-col items-center gap-2">
        <Image src={communities} alt="" />
        <p className="text-[#FFFFFF4D] font-medium text-h6">Communities</p>
      </div>
      <div className="absolute z-40 left-[-5%] bottom-[46%] flex flex-col items-center gap-2">
        <Image src={live1} alt="" />
        <p className="text-[#FFFFFF8F] font-medium text-h6">Short videos</p>
      </div>
      <div className="absolute z-40 left-[38%] top-[13%]  flex flex-col items-center gap-2">
        <Image src={podcast} alt="" />
        <p className="text-[#FFFFFF82] font-medium text-h6">Podcasts</p>
      </div>
      <div className="absolute z-40 left-[22%] top-[25%]  flex items-center gap-2">
        <Image src={events1} alt="" />
        <p className="text-[#FFFFFFCC] font-medium text-h6">Events</p>
      </div>
      <div className="absolute z-40 left-[3%] top-[20%]  flex  flex-col items-center gap-2">
        <Image src={courses} alt="" />
        <p className="text-[#FFFFFFCC] font-medium text-h6">Courses</p>
      </div>
    </div>
  );
};

export default TorvertIcons;

