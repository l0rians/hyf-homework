import { usePathname } from "next/navigation";

export default function BlogPost() {
  const pathname = usePathname();
  const title = pathname.split("/").pop().replace(/-/g, " ");
}

return (
  <div>
    <h1>{title.charAt(0).toUpperCase() + title.slice(1)}</h1>
    <p>This is the content of {title}.</p>
  </div>
);
