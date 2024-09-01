import prisma from "@/lib/db"
import Link from "next/link"

const PostList = async () => {
  const posts = await prisma.post.findMany()

  return (
    <div>
      <ul>
        {
          posts.map(post => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))
        }
      </ul>

    </div>
  )
}

export default PostList