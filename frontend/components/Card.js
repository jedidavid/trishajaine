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
            width={600}
            height={500}
            layout="responsive"
            className="base-transition img-transition"
          />
        </a>
      </Link>
    </div>
  );
};

export default Card;
