import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/button";

const RootLayout = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex gap-2 p-2">
        <Link to="/" className="[&.active]:font-bold">
          {t("home")}
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          {t("about")}
        </Link>
      </div>
      <hr />
      <Button onClick={() => changeLanguage("en")} className="mx-2 mt-2">
        Change to English
      </Button>
      <Button onClick={() => changeLanguage("es")} className="mt-2">
        Change to Spanish
      </Button>
      <Outlet />
    </>
  );
};

export const Route = createRootRoute({ component: RootLayout });
