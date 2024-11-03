"use client";
import { usePathname } from "next/navigation";

export default function BlogPost() {
  const postSlug = usePathname().split("/").pop();
  const title = postSlug.replace(/-/g, " ");

  return (
    <div>
      <h1>{title.charAt(0).toUpperCase() + title.slice(1)}</h1>
      <p>This is the content of {title}.</p>
    </div>
  );
}
