import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
  return (
    <div>
      <Link href={`/project/${props.projectUrl}`}>
        <a>
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + props.imgUrl}
            alt={props.imgAlt}
            width={800}
            height={800}
            layout="responsive"
            className="base-transition img-transition"
          />
        </a>
      </Link>
      <Link href={`/project/${props.projectUrl}`}>
        <a className="cursor-pointer text-xl font-heading font-medium flex items-center py-3 base-transition text-transition">
          <span className="h-1 w-8 bg-blue-600 mr-2"></span>
          {props.title}
        </a>
      </Link>
    </div>
  );
};

export default Card;
