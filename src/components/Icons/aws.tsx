import React from "react";
import Image from "next/image";

export function IconAWS() {
  return (
    <Image
      src={"/uses/aws.svg"}
      alt="aws_image"
      height={40}
      width={40}
      quality={100}
    />
  );
}
