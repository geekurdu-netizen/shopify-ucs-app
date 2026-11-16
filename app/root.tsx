// app/routes/_index.tsx
import { redirect } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  // Redirect root visits straight to the app dashboard
  return redirect("/app");
};

export default function Index() {
  return null;
}