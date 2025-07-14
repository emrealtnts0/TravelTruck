import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Loader from '../Loader/Loader';
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import styles from "./App.module.css";

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const DetailPage = lazy(() => import('../../pages/DetailPage/DetailPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

function CustomCursor() {
  const cursorRef = useRef();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    const down = () => setActive(true);
    const up = () => setActive(false);
    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={clsx(styles["custom-cursor"], active && styles.active)}
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="4,2 24,14 12,16 16,26 10,18 4,22" fill="#d32f2f" stroke="#fff" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

const App = () => (
  <Suspense fallback={<Loader />}>
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  </Suspense>
);

export default App;
