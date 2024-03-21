"use client";

import { useRouter } from "next/navigation";
import UserTable from "../components/UserTableScreen";
import { useEffect, useState } from "react";
import { getUsers } from "../lib/services/authServices";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [users2, setUsers2] = useState([]);

  const router = useRouter();
  let usersFromDb;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserTable users={users2} loading={loading} currentUser={currentUser} />
    </main>
  );
}
