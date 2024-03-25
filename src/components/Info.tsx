import React from "react";

const Info = () => {
  const data = [
    {
      title: "مهارات التواصل",
      type: "مهارات شخصية",
      image:
        "https://img.freepik.com/premium-vector/teamwork-successful-startup-idea-generation-brainstorming-deadline-concept-vector-illustration_143808-1152.jpg",
      link: "/coursers/skills/contact",
    },
    {
      title: "دورة adobe photoshop",
      type: "التصميم",
      image: "https://cdn-icons-png.flaticon.com/512/226/226765.png",
      link: "/coursers/design/aph",
    },
    {
      title: "اساسيات التصميم الجرافيكي",
      type: "التصميم",
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/Is_Graphic_Design_A_Good_Career.jpg",
      link: "/coursers/design/graphic",
    },
    {
      title: "اللغة الانجليزية للمتبدئين",
      type: "لغات",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/017/300/766/small_2x/learning-english-doodle-set-language-school-in-sketch-style-online-language-education-course-hand-drawn-illustration-isolated-on-white-background-vector.jpg",
      link: "/coursers/language/english",
    },
    {
      title: "اساسيات المحاسبة",
      type: "المحاسبة",
      image:
        "https://www.edarabia.com/ar/wp-content/uploads/2018/09/top-5-accounting-information.jpg",
      link: "/coursers/mohasaba/basic",
    },
    {
      title: "الهكر الاخلاقي",
      type: "الامن المعلوماتية",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/000/154/792/small/vector-green-numbers-background-in-matrix-style.jpg",
      link: "/coursers/mohasaba/basic",
    },
    {
      title: "اكسل",
      type: "مجال الحاسب",
      image: "https://c.clc2l.com/t/e/x/excel-LwQml2.png",
      link: "/coursers/mohasaba/basic",
    },
    {
      title: "الكتاب 1 | 4000 كلمة انجليزي",
      type: "لغات",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/017/300/766/small_2x/learning-english-doodle-set-language-school-in-sketch-style-online-language-education-course-hand-drawn-illustration-isolated-on-white-background-vector.jpg",
      link: "/coursers/mohasaba/basic",
    },
  ];
  return (
    <div className="m-5 p-5">
      <p>الدورات</p>
      <div className="md:grid  md:grid-cols-4 gap-3 flex justify-center items-center flex-col">
        {data.map((item, index) => (
          <div key={index}>
            <div className="relative group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 h-72 w-56  rounded-2xl hover:duration-700 duration-700">
              <div
                className="w-56 h-72  text-gray-800"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="flex flex-row justify-between">
                  <svg
                    className="fill-current stroke-current w-8 h-8 p-2 hover:bg-lime-200  rounded-full m-1"
                    height="100"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 100 100"
                    width="100"
                    x="0"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                  >
                    <path
                      className=""
                      d="M15.8,32.9V15.8m0,0H32.9m-17.1,0L37.2,37.2m47-4.3V15.8m0,0H67.1m17.1,0L62.8,37.2m-47,29.9V84.2m0,0H32.9m-17.1,0L37.2,62.8m47,21.4L62.8,62.8M84.2,84.2V67.1m0,17.1H67.1"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="8"
                    ></path>
                  </svg>
                  <svg
                    className="fill-current stroke-current w-8 h-8 p-2 m-1 hover:bg-lime-200 rounded-full"
                    height="100"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 100 100"
                    width="100"
                    x="0"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                  >
                    <path
                      className="svg-stroke-primary"
                      d="M50,17.4h0M50,50h0m0,32.6h0M50,22a4.7,4.7,0,1,1,4.7-4.6A4.7,4.7,0,0,1,50,22Zm0,32.7A4.7,4.7,0,1,1,54.7,50,4.7,4.7,0,0,1,50,54.7Zm0,32.6a4.7,4.7,0,1,1,4.7-4.7A4.7,4.7,0,0,1,50,87.3Z"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="8"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                <span className="text-lime-400 font-bold text-xs">
                  {item.type}
                </span>
                <span className="text-gray-800 font-bold text-3xl">
                  {item.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
