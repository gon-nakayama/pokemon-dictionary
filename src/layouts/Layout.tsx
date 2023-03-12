import type { ReactElement } from "react";
import { Header } from "@/components/Elements";

type LayoutProps = {
  readonly children: ReactElement;
  search?: (nameJa: string) => void;
};

export const Layout = ({ children, search }: LayoutProps) => (
  <>
    <Header search={search} />
    {children}
  </>
);
