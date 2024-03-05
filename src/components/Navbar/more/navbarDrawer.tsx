import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { poppins } from "@/lib/fonts/poppins"
import { cn } from "@/lib/utils"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"


export function NavbarDrawer({ children, open, onOpenChange }: {
  children: React.ReactNode,
  open: boolean,
  onOpenChange: (val: boolean) => void
}) {

  return (
    <Drawer open={open} onOpenChange={onOpenChange} >
      <DrawerContent>
        <div className="flex px-3 flex-col gap-2">
          <div className={cn(poppins.className, "text-lg ml-2")}>More</div>
          {children}
          <div className={cn(poppins.className, "text-lg ml-2 mt-3 ")}>Contact</div>
          <div className="flex flex-col gap-2">
            <Button variant={"secondary"} className="" >
              <Link href={'https://github.com/inderjotx'} className="flex gap-1 items-center " >
                <Github className="size-4" /> Github
              </Link>
            </Button>
            <Button variant={"secondary"} className="gap-1 items-center" >
              <Link href={'https://www.linkedin.com/in/inderjot-singh-4a5404226/'} className="flex gap-1 items-center " >
                <Linkedin className="size-4" /> LinkedIn
              </Link>
            </Button>
            <Button variant={"secondary"} className="gap-1 items-center" >
              <Link href={'https://X.com/__Inderjot'} className="flex gap-1 items-center " >
                <Twitter className="size-4" /> Twitter
              </Link>
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>

  )
}