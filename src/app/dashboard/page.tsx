"use client";
import React, { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    const adScript = document.createElement("script");
    adScript.type = "text/javascript";
    adScript.src =
      "//www.topcreativeformat.com/13aba00829a2b42b9f1f69fc21603ba4/invoke.js";
    adScript.async = true;
    document.body.appendChild(adScript);

    return () => {
      document.body.removeChild(adScript);
    };
  }, []);

  return (
    <div>
      <div>Dashboard Content</div>
      <div id="adContainer"></div> {/* يمكنك إضافة عنصر div لعرض الإعلان */}
    </div>
  );
};

export default Dashboard;
