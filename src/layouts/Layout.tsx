import type { ReactElement } from "react";
import { Header } from "@/components/Elements";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    {children}
  </>
);
