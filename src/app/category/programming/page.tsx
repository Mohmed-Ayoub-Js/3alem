import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Web from "@/components/category/programming/Web";
import FrontEnd from "@/components/category/programming/FrontEnd";
import Mobile from "@/components/category/programming/Mobile";

const Programming = () => {
  return (
    <div>
      <div className="bg-black w-full h-[13vh] text-white flex justify-center items-center flex-col">
        <h1 className="text-2xl font-bold m-2">مجال البرمجة</h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">مجال البرمجة</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/category">الأقسام</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">الرئيسية</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="p-5 m-5">
        <Web />
        <FrontEnd />
        <Mobile />
      </div>
    </div>
  );
};

export default Programming;
