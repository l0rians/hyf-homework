import Link from "next/link";

export default function Blogs() {
  const blogPosts = [
    {
      title: "My First Blog Post",
      slug: "my-first-post",
    },
    {
      title: "Exploring Space",
      slug: "exploring-space",
    },
    {
      title: "Life on Mars",
      slug: "life-on-mars",
    },
  ];
  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
