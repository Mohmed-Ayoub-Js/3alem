import React from "react";

const Web = () => {
  const data = [
    {
      image:
        "https://teracourses.com/uploads/cache/cb/cb8c85_coursei-learn-PHP-Yii2.png",
      link: "/courses/PHP-Yii2",
      title: "Yii2",
      number: 2,
    },
    {
      image:
        "https://teracourses.com/uploads/cache/54/54e721_coursei-learn-PHP-native.png",
      link: "/courses/apply-PHP-projects",
      title: "PHP Projects",
      number: 5,
    },
    {
      image:
        "https://teracourses.com/uploads/cache/54/54e721_coursei-learn-PHP-native.png",
      link: "/courses/PHP-native",
      title: "PHP Native",
      number: 4,
    },
    {
      image:
        "https://teracourses.com/uploads/cache/ef/efb25b_coursei-learn-microsoft-asp.png",
      link: "/courses/PHP-native",
      title: "ASP .NET",
      number: 14,
    },
    {
      image:
        "https://teracourses.com/uploads/cache/ef/efb25b_coursei-learn-microsoft-asp.png",
      link: "/courses/microsoft-asp",
      title: "ASP .NET",
      number: 14,
    },
    {
      image:
        "https://teracourses.com/uploads/cache/0f/0f15e7_coursei-learn-cSharp.png",
      link: "/courses/cSharp",
      title: "C#",
      number: 16,
    },
    {
      image:
        "https://teracourses.com/uploads/cache/c4/c48f83_coursei-learn-PHP-laravel.png",
      link: "/courses/laravel",
      title: "Laravel",
      number: 4,
    },
    {
      image:
        "https://teracourses.com/uploads/cache/73/7395ab_coursei-learn-ruby.png",
      link: "/courses/ruby",
      title: "Ruby",
      number: 4,
    },
    {
      image:
        "https://teracourses.com/uploads/cache/fc/fc8d0b_coursei-learn-arduino.png",
      link: "/courses/arduino",
      title: "arduino",
      number: 2,
    },
    {
      image:
        "https://teracourses.com/uploads/cache/57/577ea4_coursei-learn-java.png",
      link: "/courses/java",
      title: "Java",
      number: 17,
    },
    {
      image:
        "https://teracourses.com/uploads/cache/41/414174_coursei-learn-sharepoint-administration.png",
      link: "/courses/sharepoint",
      title: "SharePoint ادارة نظام",
      number: 5,
    },
    {
      image:
        "https://teracourses.com/uploads/cache/ef/ef40a4_coursei-learn-nodeJS.png",
      link: "/courses/nodejs",
      title: "node.js",
      number: 5,
    },
    {
      image:
        "https://teracourses.com/uploads/cache/2a/2aee31_coursei-learn-python.png",
      link: "/courses/python",
      title: "python",
      number: 15,
    },
    {
      image:
        "https://teracourses.com/uploads/cache/66/668ce2_coursei-learn-wordpress-admin.png",
      link: "/courses/woordpress",
      title: "woordpress ادارة",
      number: 3,
    },
    {
      image:
        "https://teracourses.com/uploads/cache/f1/f13cb1_coursei-learn-dart.png",
      link: "/courses/dart",
      title: "dart",
      number: 5,
    },
    {
      image:
        "https://teracourses.com/uploads/cache/f1/f13cb1_coursei-learn-dart.png",
      link: "/courses/sharepoint-programming",
      title: "برمجة SharePoint",
      number: 5,
    },
    {
      image:
        "https://teracourses.com/uploads/cache/f1/f13cb1_coursei-learn-dart.png",
      link: "/courses/woordpress-programming",
      title: "woordpress برمجة",
      number: 2,
    },
  ];
  return (
    <div className="flex justify-start items-start flex-col">
      <h1 className="text-3xl font-bold m-5">مجال برمجة الويب</h1>
      <p>
        افضل كورسات برمجة مواقع الويب معتمدة مجانا اونلاين من البداية للأحتراف
      </p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5 m-5 p-5">
        {data.map((item, index) => (
          <div key={index}>
            <div
              className="flex flex-col gap-5 group mx-2 cursor-pointer hover:scale-105"
              style={{ transition: "0.5s" }}
            >
              <div className="w-44 sm:w-52 aspect-square items-center justify-center flex bg-gray-700">
                <img src={item.image} alt="" />
              </div>

              <div className="flex flex-row place-items-center place-content-between">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-lg sm:text-xl relative after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:absolute after:origin-bottom-left after:transform after:ease-in-out after:duration-500 cursor-pointer w-full after:w-full group-hover:after:scale-x-100 group-hover:after:origin-bottom-left after:bg-lime-600 dark:after:bg-lime-500 text-gray-600 dark:text-lime-500">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500">{item.number} محاضر</p>
                </div>
                <div className="-rotate-45 cursor-pointer">
                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-600 font-semibold text-lg sm:text-xl transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:text-gray-200 fill-black group-hover:bg-black group-hover:fill-white group-hover:rotate-45 p-px rounded-full w-10 group-hover:rounded-full group-hover:animate-pulse"
                  >
                    <path
                      d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Web;
