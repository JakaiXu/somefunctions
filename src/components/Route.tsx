import { useNavigationContext } from "../hooks/use-context";
type RouteProps = {
  path: string;
  children: React.ReactNode;
};
const Route = ({ path, children }: RouteProps) => {
  const { currentPath } = useNavigationContext();
  if (path === currentPath) {
    return <div>{children}</div>;
  }
  return null;
};

export default Route;
