import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";

const Header = () => {
  const data = [
    {
      title: "الرئيسية",
      link: "/",
    },
    {
      title: "الدورات",
      link: "/courses",
    },
    {
      title: "حول",
      link: "/about",
    },
    {
      title: "المدونة",
      link: "/blog",
    },
    {
      title: "اتصل بنا",
      link: "/contact",
    },
  ];
  return (
    <div className="flex flex-col text-white w-full p-5 bg-black ">
      <div className="flex justify-between items-center flex-row">
        <p className=" font-extrabold">عــلّــم</p>
        <div className="bg-black text-white">
          <div className="flex justify-center items-center flex-row gap-3">
            {data.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                style={{ transition: "0.5s" }}
                className="hover:scale-110"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <Dialog>
          <DialogTrigger>انشاء حساب</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>انشاء حساب</DialogTitle>
              <DialogDescription>
                <Input className="mb-5" placeholder="اسم المستخدم" />
                <Input className="mt-5" placeholder="كلمة السر" />
                <Button className="mt-5">انشاء حساب</Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Header;
