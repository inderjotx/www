import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Title } from "../uses/_components/title";

const faq = [
  {
    question: "When did you start coding?",
    answer:
      "I started when in October 2022  , with CS50 from Harvard . It was just after the completion of my 12th standard.",
  },
  {
    question: "What programming languages do you know?",
    answer:
      "I started with C and Python , then learned Java , Solidity , Typescript along with way . I have tried learning Rust in 2023 but didn't stick to it . But mostly I use Typescript for at my job and for personal projects. I am thinking about learning GO by end of 2024. Lets see.",
  },
  {
    question: "What youtubes you follow?",
    answer:
      "I like watching vidoes of Theo , Fireship , LeeRob and  Web Dev Cody mostly ",
  },
  {
    question: "How do you maintain health ? ",
    answer:
      "Last year due to my negligence ,I had back issue and put up 15 kg  weight . However, since last month I started gym and cutting calories . So in last 40 days I lost around 4 kg .  I recommend everyone to go to gym and atleast try to maintain a healthy lifestyle .",
  },
  {
    question: "What is your favorite editor ? ",
    answer:
      "Recently I diched off VS code and started using Cursor.sh for coding and editing . I am using it with VIM keybindings . If it would not have been for Cursor.sh , I would have been using NeoVim for sure .",
  },
];

export default function index() {
  return (
    <div className="min-h-screen flex-col gap-10">
      <Title title="FAQ" />
      <FQA faq={faq} />
    </div>
  );
}

const FQA = ({ faq }: { faq: { question: string; answer: string }[] }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faq.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
