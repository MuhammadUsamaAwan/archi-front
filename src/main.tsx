import { RouterProvider } from "@tanstack/react-router";
import { createRoot } from "react-dom/client";
import { router } from "~/lib/router";

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
