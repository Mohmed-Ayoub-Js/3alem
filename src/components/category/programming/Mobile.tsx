import React from "react";

const Mobile = () => {
  const data = [
    {
      image:
        "https://teracourses.com/uploads/cache/2e/2e7fa8_coursei-learn-xamarin-mobile-apps-development.png",
      link: "/courses/xamarin",
      title: "xamarin",
      number: 4,
    },
    {
      image:
        "https://teracourses.com/uploads/cache/2a/2a7abb_coursei-learn-android-apps-development.png",
      link: "/courses/android",
      title: "android برمجة تطبيقات",
      number: 4,
    },
    {
      image:
        "https://teracourses.com/uploads/cache/65/653a96_coursei-learn-iOS-apps-development.png",
      link: "/courses/ios",
      title: "ios برمجة تطبيقات",
      number: 4,
    },
    {
      image:
        "https://teracourses.com/uploads/cache/94/94f532_coursei-learn-kotlin.png",
      link: "/courses/kotlin",
      title: "kotlin",
      number: 4,
    },
    {
      image:
        "https://teracourses.com/uploads/cache/8f/8f4f68_coursei-learn-reactJS.png",
      link: "/courses/reactnative",
      title: "React native",
      number: 4,
    },
    {
      image:
        "https://teracourses.com/uploads/cache/28/28656b_coursei-learn-ionic-mobile-apps-development.png",
      link: "/courses/ionic",
      title: "Ionic",
      number: 4,
    },
    {
      image:
        "https://teracourses.com/uploads/cache/e0/e05a51_coursei-learn-flutter-mobile-apps-development.png",
      link: "/courses/fultter",
      title: "Fultter",
      number: 5,
    },
  ];
  return (
    <div>
      <div className="flex justify-start items-start flex-col">
        <h1 className="text-3xl font-bold m-5">برمجة تطبيقات الموبيل</h1>
        <p>
          افضل محتوى تعليمى اونلاين لتعلم برمجة تطبيقات الموبيل مجانا بشهادة
          معتمدة
        </p>
      </div>
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

export default Mobile;
