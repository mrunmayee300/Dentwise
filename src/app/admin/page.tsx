import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AdminDashboardClient from "./AdminDashboardClient";

export default async function AdminPage() {
  const user = await currentUser();

  // Not logged in
  if (!user) {
    redirect("/");
  }

  const adminEmail = process.env.ADMIN_EMAIL?.toLowerCase();
  const userEmail =
    user.primaryEmailAddress?.emailAddress?.toLowerCase();

  // Not admin
  if (!adminEmail || !userEmail || adminEmail !== userEmail) {
    redirect("/dashboard");
  }

  return <AdminDashboardClient />;
}
