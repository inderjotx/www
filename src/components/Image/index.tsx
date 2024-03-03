import { cn } from "@/lib/utils"
import Image from "next/image"

export function MyImage({ src, className, height, width }: {
    src: string,
    className?: string,
    height: string,
    width: string,
}) {
    return (
        <div className={cn("relative overflow-hidden", className, height, width)} >
            <Image alt="image" src={src} sizes="100" fill quality={100} className="object-cover"  ></Image>
        </div>
    )
}
