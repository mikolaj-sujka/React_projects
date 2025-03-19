import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export const Layout = () => {
  const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>{navigation.state === "loading" && <p>Loading...</p>}</main>
      <Outlet />
    </>
  );
};
