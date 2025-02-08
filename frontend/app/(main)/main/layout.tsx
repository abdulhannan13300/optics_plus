import { RequireAuth } from "@/components/utils";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <RequireAuth>{children}</RequireAuth>;
};
export default Layout;
