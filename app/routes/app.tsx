// app/routes/app.tsx
import type { HeadersFunction, LoaderFunctionArgs } from "@remix-run/node";
import { Link, Outlet, useRouteError } from "@remix-run/react";
import { boundary } from "@shopify/shopify-app-remix/server";
import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";

import { authenticate } from "../shopify.server";

export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);
  return null;
};

export default function App() {
  return (
    <>
      <ui-nav-menu>
        <Link to="/app" rel="home">UCS Dashboard</Link>
        <Link to="/app/settings">Configuration</Link>
      </ui-nav-menu>
      <Outlet />
    </>
  );
}

export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};