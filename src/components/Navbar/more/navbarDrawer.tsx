import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function NavbarDrawer({
  children,
  open,
  onOpenChange,
}: {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (val: boolean) => void;
}) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <div className="flex px-3 flex-col gap-2 pb-4">
          <div className={cn("text-lg ml-2")}>More</div>
          {children}
          <div className={cn("text-lg ml-2 mt-3 ")}>Contact</div>
          <div className="grid grid-cols-3 gap-2">
            <Button variant={"secondary"} className="">
              <a
                target="_blank"
                rel={"noopener norefferer"}
                href={"https://github.com/inderjotx"}
                className="flex gap-1 items-center "
              >
                <Github className="size-4" /> Github
              </a>
            </Button>
            <Button variant={"secondary"} className="gap-1 items-center">
              <a
                target="_blank"
                rel={"noopener norefferer"}
                href={"https://www.linkedin.com/in/inderjot-singh-4a5404226/"}
                className="flex gap-1 items-center "
              >
                <Linkedin className="size-4" /> LinkedIn
              </a>
            </Button>
            <Button variant={"secondary"} className="gap-1 items-center">
              <a
                target="_blank"
                rel="noopener norefferer"
                href={"https://X.com/__Inderjot"}
                className="flex gap-1 items-center "
              >
                <Twitter className="size-4" /> Twitter
              </a>
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
