import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";
import { About } from "./pages/About";

// типы
import { TRoute, routesEnum } from "./types";

export const routes: TRoute[] = [
  {
    path: routesEnum.home,
    element: Home,
  },
  {
    path: routesEnum.about,
    element: About,
  },
  {
    path: routesEnum.contacts,
    element: Contacts,
  },
];
