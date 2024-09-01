import React from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Form from "@/components/Form";

const page = async () => {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>
      <Form />
      <LogoutLink>Log out</LogoutLink>
    </main>
  );
};

export default page;
