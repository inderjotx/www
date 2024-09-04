"use client";
import { cn, fetcher } from "@/lib/utils";
import { Eye } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

interface ArticleTitleProps {
  title: string;
  writtenOn: string;
  slug: string;
  redis_key: string;
}

// updating views on middleware
export default function ArticleTitle({
  title,
  redis_key,
  slug,
  writtenOn,
}: ArticleTitleProps) {
  const { data, error, isLoading } = useQuery<{
    success: boolean;
    views: number;
  }>({
    queryKey: ["/api/blog?title=" + redis_key],
    // @ts-ignore
    queryFn: async () =>
      await fetcher<ArticleTitleProps>(`/api/blog?title=${redis_key}`),
  });

  return (
    <div
      className={cn(
        "flex   flex-col   transition-all    w-full px-4 py-3 gap-1   "
      )}
    >
      <div className="flex justify-between ">
        <h1> {title}</h1>
        <h2 className="text-muted-foreground text-sm flex items-center gap-1">
          {" "}
          <Eye className="size-4" /> {data?.views || 0}
        </h2>
      </div>
      <div>
        <p className="text-[11px] text-muted-foreground text-left">
          {writtenOn}
        </p>
      </div>
    </div>
  );
}
