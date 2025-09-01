import Image from "next/image";
import React from "react";
import torvertbottom from "../../../../public/home/torvert-bgbottom.png";
import torvertlefttop from "../../../../public/home/torvert-left-top.png";
import torvertleftbottom from "../../../../public/home/torvert-left-bottom.png";
import torvertrighttop from "../../../../public/home/torvert-right-top.png";

const TorvertShadow = () => {
  return (
    <div>
      {" "}
      <Image
        className="absolute bottom-[1%] right-11 z-0"
        src={torvertbottom}
        alt=""
      />
      <Image
        className="absolute top-[-9%] left-[-17%] z-0"
        src={torvertlefttop}
        alt=""
      />
      <Image
        className="absolute bottom-[-15%] left-[-21%] z-0"
        src={torvertleftbottom}
        alt=""
      />
      <Image
        className="absolute top-[-19%] right-[-12%]"
        src={torvertrighttop}
        alt=""
      />
    </div>
  );
};

export default TorvertShadow;
