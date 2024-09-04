import React from "react";
import { Title } from "./title";
import Image from "next/image";

type Data = { image_url: string; href: string }[];

export function Website() {
  return (
    <div className="flex flex-col gap-6 my-10">
      <Title title="Tech Stack" />

      <div className="flex flex-col gap-4 text-muted-foreground">
        <p>
          This website is created with Next.js, Tailwind CSS, MDX, Recharts ,
          ShadCN, and Postgres. It&apso;s hosted on Vercel. I recently made this
          github repo private because people were forking and updating it ,
          without attributing me , which voilates the license . However, If you
          are genuinely interested in the code, feel free to contact , I will
          invite you to the repo.
        </p>
      </div>

      <div>
        <div className="grid grid-cols-2 sm:grid-cols-4  gap-4 px-2">
          <div className="flex p-2 justify-center">
            <Image
              src={"/uses/next.svg"}
              alt="next_js_image"
              width={100}
              height={100}
              quality={100}
            />
          </div>
          <div className="flex p-2 justify-center">
            <Image
              src={"/uses/tailwind.svg"}
              alt="next_js_image"
              width={80}
              height={80}
              quality={100}
            />
          </div>

          <div className="flex p-2 justify-center">
            <Image
              src={"/uses/aws.svg"}
              alt="next_js_image"
              width={80}
              height={80}
              quality={100}
            />
          </div>
          <div className="flex p-2 justify-center">
            <Image
              src={"/uses/docker.svg"}
              alt="next_js_image"
              width={80}
              height={80}
              quality={100}
            />
          </div>

          <div className="flex p-2 justify-center">
            <Image
              src={"/uses/drizzle.svg"}
              alt="next_js_image"
              height={120}
              width={120}
              quality={100}
            />
          </div>
          <div className="flex p-2 justify-center">
            <Image
              src={"/uses/shadcn.svg"}
              alt="next_js_image"
              className="object-contain"
              height={60}
              width={60}
              quality={100}
            />
          </div>
          <div className="flex p-2 justify-center">
            <Image
              src={"/uses/kubernetes.svg"}
              alt="next_js_image"
              height={140}
              width={140}
              quality={100}
            />
          </div>

          <div className="flex p-2 justify-center">
            <Image
              src={"/uses/prisma.svg"}
              alt="next_js_image"
              height={100}
              width={100}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
