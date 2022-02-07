import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);

  return (
    <main className="error-main">
      <div className="error-container">
        <h1 className="error-title">Oups...</h1>
        <p className="error-subtitle">la page que vous demandez n'existe pas</p>
      </div>
    </main>
  );
};

export default Custom404;
