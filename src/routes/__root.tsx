import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

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
      <button onClick={() => changeLanguage("en")} className="mx-2 mt-2 cursor-pointer border px-1">
        Change to English
      </button>
      <button onClick={() => changeLanguage("es")} className="mt-2 cursor-pointer border px-1">
        Change to Spanish
      </button>
      <Outlet />
    </>
  );
};

export const Route = createRootRoute({ component: RootLayout });
