import prisma from "@/lib/db";
import { notFound } from "next/navigation";

const Page = async ({ params }) => {
  const id = parseInt(params.id);
  if (isNaN(id)) {
    notFound();
  }

  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="px-7 pt-24 text-center max-w-[1000px]">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </main>
  );
};

export default Page;
