// import React from "react";
// import threads from "../../../../public/home/threads.png";
// import consultants from "../../../../public/home/consultants.svg";
// import consultant1 from "../../../../public/home/consultant1.svg";
// import blogs from "../../../../public/home/blogs.svg";
// import blogs1 from "../../../../public/home/blogs1.svg";
// import webinars from "../../../../public/home/webinars.svg";
// import live from "../../../../public/home/live.svg";
// import live1 from "../../../../public/home/live1.svg";
// import podcast from "../../../../public/home/podcast.svg";
// import merchandise from "../../../../public/home/merchandise1.svg";
// import assesment from "../../../../public/home/assesment.svg";
// import lesson1 from "../../../../public/home/lesson1.svg";
// import communities from "../../../../public/home/communities.svg";
// import events1 from "../../../../public/home/events1.svg";
// import courses from "../../../../public/home/courses.svg";
// import Image from "next/image";

// const TorvertIcons = () => {
//   return (
//     <div>
//       <div className="absolute z-40 right-[15%] top-[13%] flex flex-col items-center gap-2">
//         <Image src={consultants} alt="" />
//         <p className="text-[#FFFFFFD9] font-medium text-h6">Consultants</p>
//       </div>
//       <div className="absolute z-40 right-[20%] top-[29%] flex flex-col items-center gap-2">
//         <Image src={blogs} alt="" />
//         <p className="text-[#FFFFFF3D] font-medium text-h6">Blogs</p>
//       </div>
//       <div className="absolute z-40 right-[-4%] top-[34%] flex items-center gap-2">
//         <Image src={threads} alt="" />
//         <p className="text-[#FFFFFF66] font-medium text-h6">Threads</p>
//       </div>
//       <div className="absolute z-40 right-[-14%] top-[47%] flex flex-col items-center gap-2">
//         <Image src={webinars} alt="" />
//         <p className="text-[#FFFFFF66] font-medium text-h6">Webinars</p>
//       </div>
//       <div className="absolute z-40 right-[1%] top-[60%] flex flex-col items-center gap-2">
//         <Image src={live} alt="" />
//         <p className="text-[#FFFFFF75] font-medium text-h6">Live streaming</p>
//       </div>
//       <div className="absolute z-40 right-[0%] bottom-[18%] flex flex-col items-center gap-2">
//         <Image src={consultant1} alt="" />
//         <p className="text-[#FFFFFFCC] font-medium text-h6">Consultants</p>
//       </div>
//       <div className="absolute z-40 right-[12%] bottom-[5%] flex flex-col items-center gap-2">
//         <Image src={podcast} alt="" />
//         <p className="text-[#FFFFFFCC] font-medium text-h6">Podcasts</p>
//       </div>

//       <div className="absolute z-40 right-[34%] bottom-[3%] flex flex-col items-center gap-2">
//         <Image src={merchandise} alt="" />
//         <p className="text-[#FFFFFF70] font-medium text-h6">Merchandise</p>
//       </div>
//       <div className="absolute z-40 right-[49%] bottom-[15%] flex items-center gap-2">
//         <Image src={assesment} alt="" />
//         <p className="text-[#FFFFFF4D] font-medium text-h6">Assessments</p>
//       </div>
//       <div className="absolute z-40 left-[22%] bottom-[23%] flex flex-col items-center gap-2">
//         <Image src={blogs1} alt="" />
//         <p className="text-[#FFFFFF3D] font-medium text-h6">Blogs</p>
//       </div>
//       <div className="absolute z-40 left-[6%] bottom-[12%] flex flex-col items-center gap-2">
//         <Image src={lesson1} alt="" />
//         <p className="text-[#FFFFFF33] font-medium text-h6">Lessons</p>
//       </div>
//       <div className="absolute z-40 left-[9%] bottom-[38%] flex flex-col items-center gap-2">
//         <Image src={communities} alt="" />
//         <p className="text-[#FFFFFF4D] font-medium text-h6">Communities</p>
//       </div>
//       <div className="absolute z-40 left-[-5%] bottom-[46%] flex flex-col items-center gap-2">
//         <Image src={live1} alt="" />
//         <p className="text-[#FFFFFF8F] font-medium text-h6">Short videos</p>
//       </div>
//       <div className="absolute z-40 left-[38%] top-[13%]  flex flex-col items-center gap-2">
//         <Image src={podcast} alt="" />
//         <p className="text-[#FFFFFF82] font-medium text-h6">Podcasts</p>
//       </div>
//       <div className="absolute z-40 left-[22%] top-[25%]  flex items-center gap-2">
//         <Image src={events1} alt="" />
//         <p className="text-[#FFFFFFCC] font-medium text-h6">Events</p>
//       </div>
//       <div className="absolute z-40 left-[3%] top-[20%]  flex  flex-col items-center gap-2">
//         <Image src={courses} alt="" />
//         <p className="text-[#FFFFFFCC] font-medium text-h6">Courses</p>
//       </div>
//     </div>
//   );
// };

// export default TorvertIcons;


'use client';
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

const TorvertIcons = ({ onIconClick, activeIcon }) => {
  const handleIconClick = (iconName, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const position = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
    onIconClick(iconName, position);
  };

  const icons = [
    { icon: consultants, text: "Consultants", position: "right-[15%] top-[13%]", color: "text-[#FFFFFFD9]", id: "consultants" },
    { icon: blogs, text: "Blogs", position: "right-[20%] top-[29%]", color: "text-[#FFFFFF3D]", id: "blogs" },
    { icon: threads, text: "Threads", position: "right-[-4%] top-[34%]", color: "text-[#FFFFFF66]", id: "threads" },
    { icon: webinars, text: "Webinars", position: "right-[-14%] top-[47%]", color: "text-[#FFFFFF66]", id: "webinars" },
    { icon: live, text: "Live streaming", position: "right-[1%] top-[60%]", color: "text-[#FFFFFF75]", id: "live-streaming" },
    { icon: consultant1, text: "Consultants", position: "right-[0%] bottom-[18%]", color: "text-[#FFFFFFCC]", id: "consultants2" },
    { icon: podcast, text: "Podcasts", position: "right-[12%] bottom-[5%]", color: "text-[#FFFFFFCC]", id: "podcasts" },
    { icon: merchandise, text: "Merchandise", position: "right-[34%] bottom-[3%]", color: "text-[#FFFFFF70]", id: "merchandise" },
    { icon: assesment, text: "Assessments", position: "right-[49%] bottom-[15%]", color: "text-[#FFFFFF4D]", id: "assessments" },
    { icon: blogs1, text: "Blogs", position: "left-[22%] bottom-[23%]", color: "text-[#FFFFFF3D]", id: "blogs2" },
    { icon: lesson1, text: "Lessons", position: "left-[6%] bottom-[12%]", color: "text-[#FFFFFF33]", id: "lessons" },
    { icon: communities, text: "Communities", position: "left-[9%] bottom-[38%]", color: "text-[#FFFFFF4D]", id: "communities" },
    { icon: live1, text: "Short videos", position: "left-[-5%] bottom-[46%]", color: "text-[#FFFFFF8F]", id: "short-videos" },
    { icon: podcast, text: "Podcasts", position: "left-[38%] top-[13%]", color: "text-[#FFFFFF82]", id: "podcasts2" },
    { icon: events1, text: "Events", position: "left-[22%] top-[25%]", color: "text-[#FFFFFFCC]", id: "events" },
    { icon: courses, text: "Courses", position: "left-[3%] top-[20%]", color: "text-[#FFFFFFCC]", id: "courses" },
  ];

  return (
    <div>
      {icons.map((item) => (
        <div
          key={item.id}
          className={`absolute z-40 ${item.position} flex flex-col items-center gap-2 transition-all duration-300 cursor-pointer
            ${activeIcon?.name === item.text ? 'opacity-30' : 'opacity-100'}`}
          onClick={(e) => handleIconClick(item.text, e)}
        >
          <Image src={item.icon} alt={item.text} />
          <p className={`${item.color} font-medium text-h6`}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default TorvertIcons;