import { ReactNode } from "react";

// компонеты
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "../global/global";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};
