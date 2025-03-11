"use client";
import React from "react";

import { signIn } from "next-auth/react";
import { FC } from "react";

const LoginButton: FC = () => (
  <button
    onClick={() => signIn("line")}
    className="bg-blue-500 text-white p-2 rounded-md"
  >
    LINEでログイン
  </button>
);

export default function Page() {
  return (
    <div>
      <p>Page</p>
      <LoginButton />
    </div>
  );
}
