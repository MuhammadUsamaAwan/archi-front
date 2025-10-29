import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { createRoot } from "react-dom/client";
import { scan } from "react-scan";
import { queryClient } from "~/lib/query-client";
import { router } from "~/lib/router";
import { reportWebVitals } from "~/report-web-vitals";

scan({
  enabled: true,
});

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

reportWebVitals(console.log);
