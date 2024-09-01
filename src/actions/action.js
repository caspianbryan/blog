"use server";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createPost = async (formData) => {
  //auth check
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  const title = formData.get("title");
  const body = formData.get("body");

  //updated database
  await prisma.post.create({
    data: {
      title,
      body,
    },
  });

  //revalidate to see immediately the new blogpost
  revalidatePath("/post");
};
