"use server";

import { redirect } from "next/navigation";

const { NEXT_PUBLIC_DISCORD_INVITE_URL } = process.env;

export default async function Redirect(id: string) {
  try {
    // Call database
  } catch (error) {
    // Handle errors
  }

  redirect(NEXT_PUBLIC_DISCORD_INVITE_URL as string); // Navigate to the new post page
}
