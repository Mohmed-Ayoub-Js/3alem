import { ComputerIcon } from "lucide-react";
import React from "react";

const Number = () => {
  return (
    <div className="bg-black w-full text-white p-3">
      <div className="flex justify-center items-center flex-col md:flex-row gap-6">
        <div className="flex justify-between items-center flex-col">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Circle-icons-computer.svg/1200px-Circle-icons-computer.svg.png"
            width={100}
            height={100}
            alt=""
          />
          <h1 className="text-2xl">913</h1>
          <p className="text-2xl">دورة معتمدة</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img
            src="https://cdn-icons-png.flaticon.com/512/891/891438.png"
            width={100}
            height={100}
            alt=""
          />
          <h1 className="text-2xl text-green-500">مجانا</h1>
          <p className="text-2xl">كل الدورات</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img
            src="https://png.pngtree.com/png-clipart/20230429/original/pngtree-no-ads-sign-png-image_9120355.png"
            width={100}
            height={100}
            alt=""
          />
          <h1 className="text-2xl ">بدون اعلانات</h1>
          <p className="text-2xl">كل الدورات</p>
        </div>
      </div>
    </div>
  );
};

export default Number;
