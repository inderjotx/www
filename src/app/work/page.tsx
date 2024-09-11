import React from "react";
import { Title } from "../uses/_components/title";
import { ChevronRight, Code2 } from "lucide-react";

const timelineContent = [
  {
    title: "E-Commerce Website",
    fromDate: "⚡ Current",
    shortSummary:
      "Developed a scalable e-commerce platform using Astro, React, and Vendure, optimized for high traffic and performance.",
    actions: [
      "Led stack selection process, choosing Astro over Next.js after rigorous performance testing",
      "Designed scalable architecture to handle 10k daily users",
      "Implemented CI/CD pipeline using GitLab and DigitalOcean",
      "Conducted backend analysis, selecting Vendure for its robust plugin system",
      "Extended e-commerce backend using plugins for advanced faceted search",
      "Implemented frontend using Tailwind CSS and React components",
    ],
    techStack:
      "Astro, React, Vendure, GraphQL, Tailwind CSS, GitLab, DigitalOcean",
    liveLink: "https://example-ecommerce.com",
  },
  {
    title: " Seekers [ NGO Website ]",
    fromDate: "June, 2024",
    shortSummary:
      "Built a full-stack platform connecting helpers with seekers, featuring role-based authentication and real-time updates.",
    actions: [
      "Developed a platform for posting and fulfilling assistance requests",
      "Implemented streamlined login flow using NextAuth for Google OAuth and email authentication",
      "Created user-friendly dashboards for managing help responses",
      "Designed user profiles showcasing active, pending, and fulfilled wishes",
      "Integrated Django backend with Next.js frontend using webhooks",
      "Implemented role-based authorization system for admin, user, and organization accounts",
      "Set up hosting infrastructure on AWS VPC for improved security and scalability",
    ],
    techStack:
      "Django, PostgreSQL, Next.js, Tailwind CSS, ShadCN UI, NextAuth, AWS VPC",
    liveLink: "https://example-ngo-seekers.org",
  },
  {
    title: "Web3 Jobs Platform",
    fromDate: "March, 2024",
    shortSummary:
      "Created a comprehensive Web3 job platform with automated job scraping and a user-friendly job board.",
    actions: [
      "Built a Web3 job scraping engine using APS system and advanced scraping techniques",
      "Implemented cron jobs to fetch latest job postings, triggering webhooks to update the storefront",
      "Developed a job board displaying the latest Web3 job opportunities",
      "Implemented features for candidates to apply directly and track application status",
      "Created employer accounts for direct job posting and talent acquisition",
    ],
    techStack:
      "Next.js, React, ShadCN, Tailwind CSS, NextAuth, Prisma, Puppeteer, TypeScript, Node.js, Jest, Coolify, EC2",
    liveLink: "https://example-web3jobs.com",
  },
  {
    title: "Personal Website",
    fromDate: "Feb, 2024",
    shortSummary:
      "Designed and developed a personal website showcasing various API integrations and custom analytics.",
    actions: [
      "Integrated APIs from GitHub, Spotify, WakaTime, Literal, and Chess.com for real-time data display",
      "Implemented Resend API for email communication",
      "Developed custom analytics using Upstash (Redis) and Neon (PostgreSQL)",
      "Created sections for showcasing favorite anime and books using TMDB and Literal APIs",
      "Implemented MDX for managing article content",
    ],
    techStack: "Next.js, Tailwind CSS, ShadCN, Vercel, Redis, PostgreSQL, MDX",
    liveLink: "https://example-personal-site.dev",
  },
];

export const metadata = {
  title: "Inderjot // Work",
  description: "Inderjot Singh Work Experience",
};

interface TimelineItem {
  title: string;
  fromDate: string;
  shortSummary: string;
  actions: string[];
  techStack: string;
  liveLink: string;
}

const TimeLine: React.FC<{ item: TimelineItem }> = ({ item }) => {
  return (
    <div className="grid grid-cols-12 gap-2 ">
      <div className="flex justify-start  md:justify-end mt-6 md:mt-0 col-span-full md:col-span-2 ">
        <h3 className="text-lg font-normal">{item.fromDate}</h3>
      </div>

      {/* line */}
      <div className="relative h-full w-[1.5px] bg-muted  mt-2  mx-auto    col-span-1">
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  h-[1.5px] w-12 bg-muted" />
      </div>

      <div className="col-span-11 md:col-span-9 space-y-4">
        <h2 className="text-lg font-medium text-primary">{item.title}</h2>
        <p className="text-base text-muted-foreground">{item.shortSummary}</p>
        <div className="flex  gap-2 flex-col ">
          <div className="flex gap-2  items-center">
            <div>
              <Code2 className="text-primary size-5 " />
            </div>
            <span className="text-muted-foreground text-sm">
              {item.techStack}
            </span>
          </div>
        </div>
        <div className="space-y-2 pb-8">
          {item.actions.map((action, index) => (
            <div key={index} className="flex items-start space-x-2 text-sm">
              <ChevronRight
                className="text-primary mt-1 flex-shrink-0 "
                size={16}
              />
              <p className="text-muted-foreground">{action}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function page() {
  return (
    <div className="flex min-h-screen flex-col gap-10 w-full ">
      <Title title="Work" />
      <p className="text-muted-foreground">
        Most of the products I have built are either for my clients or my own
        use cases. I love building and learning new things. These days, I am
        working on a new side project while also working full-time on building
        an E-commerce site for a client.
      </p>
      <section id="about" className="flex flex-col ">
        {timelineContent.map((item, index) => {
          return <TimeLine key={index} item={item} />;
        })}
      </section>
    </div>
  );
}
