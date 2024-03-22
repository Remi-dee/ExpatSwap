"use client";

import { useRouter } from "next/navigation";
import UserTable from "../components/UserTableScreen";
import { useEffect, useState } from "react";
import { getUsers } from "../lib/services/authServices";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserTable />
    </main>
  );
}
