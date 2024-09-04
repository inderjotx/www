"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmailSchema } from "@/lib/schema";
import { sendEmail } from "@/action/sendEmail";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useRef } from "react";

export function SendEmail() {
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <form
      className="w-full"
      ref={formRef}
      action={async (data: FormData) => {
        const from = data.get("from");
        const subject = data.get("subject");
        const html = data.get("html");

        const isValid = sendEmailSchema.safeParse({ from, subject, html });

        if (isValid.success) {
          const response = await sendEmail(isValid.data);

          if (response.success) {
            toast.success("Email Send Successfully");
          } else {
            toast.error("Error sending email");
          }

          if (formRef.current) {
            formRef.current.reset();
          }
        } else {
          isValid.error.errors.map((error) => {
            toast.error(error.message);
          });
        }
      }}
    >
      <div className="flex flex-col bg-gradient-to-b from-zinc-800 to-zinc-950  gap-4 w-full px-3 py-6">
        <h1 className={cn("pl-1 text-sm")}>Drop a Message</h1>

        <Input
          className="focus-visible:ring-0  "
          name="from"
          type="email"
          placeholder="youremail@gmail.com"
        />
        <Textarea
          className="focus-visible:ring-0"
          name="html"
          placeholder="Hey wassup!"
        />

        <div className="flex justify-end ">
          <Button type="submit">Send</Button>
        </div>
      </div>
    </form>
  );
}
