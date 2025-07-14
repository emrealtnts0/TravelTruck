import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import styles from "./Layout.module.css";
import ScrollUp from "../ScrollUp/ScrollUp";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <ScrollUp />
      <Toaster />
    </div>
  );
};

export default Layout;
