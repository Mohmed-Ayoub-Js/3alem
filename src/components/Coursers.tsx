import { Info } from "lucide-react";
import Link from "next/link";
import React from "react";

const Coursers = () => {
  const data = [
    {
      title: "مجال البرمجة",
      link: "/category/programming",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/000/154/792/small/vector-green-numbers-background-in-matrix-style.jpg",
    },
    {
      title: "مجال التصميم",
      link: "/category/design",
      image:
        "https://png.pngtree.com/thumb_back/fh260/background/20230722/pngtree-rendering-3d-designs-with-graphic-design-tools-image_3763912.jpg",
    },
    {
      title: "مجال التسويق الالكتروني",
      image: "https://igtsservice.com/uploads/files/66417_1677748773.jpg",
      link: "/category/e-marketing",
    },
    {
      title: "مجال المهارات الشخصية",
      link: "/category/self-skills",
      image:
        "https://img.freepik.com/premium-psd/3d-illustration-charts-graph-with-analysis-business-financial-data-tools-data-analysis_554821-1798.jpg",
    },
    {
      title: "المحاسبة",
      image:
        "https://teracourses.com/uploads/cache/68/6898cc_cat-t-learn-accountancy.jpg",
      link: "/category/accounting",
    },
    {
      title: "مهاراة الحاسب",
      image:
        "https://teracourses.com/uploads/cache/3a/3a8379_cat-t-learn-computer-skills.jpg",
      link: "/category/computer-skills",
    },
    {
      title: "شبكة الحاسب",
      image:
        "https://teracourses.com/uploads/cache/f3/f35832_cat-t-learn-computer-networks.jpg",
      link: "/category/network",
    },
    {
      title: "امن المعلومات",
      image:
        "https://teracourses.com/uploads/cache/61/612915_cat-t-learn-cyber-security.jpg",
      link: "/category/cyber-security",
    },
    {
      title: "برمجة تصميم الويب",
      image:
        "https://teracourses.com/uploads/cache/b4/b4233e_cat-t-learn-frontend-development.jpg",
      link: "/category/web",
    },
    {
      title: "برمجة تطبيقات الموبايل ",
      image:
        "https://teracourses.com/uploads/cache/9e/9ea90d_cat-t-learn-mobile-apps-development.jpg",
      link: "/category/mobile",
    },
    {
      title: "قواعد البيانات",
      image:
        "https://teracourses.com/uploads/cache/75/75a125_cat-t-learn-computer-databases.jpg",
      link: "/category/database",
    },
  ];
  return (
    <div className="p-5 bg-black w-full">
      <p className="text-3xl font-bold m-2 text-white">المجالات التعليمية</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {data.map((item, index) => (
          <div key={index}>
            <Link href={item.link}>
              <div
                className="group overflow-hidden bg-neutral-50 rounded-xl bg-gradient-to-tr  text-gray-50 hover:scale-95"
                style={{
                  backgroundImage: `url(${item.image})`,
                  transition: "0.5s",
                }}
              >
                <div className="before:duration-700 before:absolute before:w-28 before:h-28 before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 w-64 h-48  flex flex-col justify-between relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">
                  <div className="text p-3 flex flex-col justify-evenly h-full">
                    <span className="font-bold text-2xl">{item.title}</span>
                    <p className="subtitle"></p>
                  </div>
                  <div className="w-full flex flex-row justify-between z-10"></div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coursers;
