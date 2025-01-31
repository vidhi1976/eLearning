import { Avatar, AvatarImage,AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
// import {  } from "@radix-ui/react-avatar";
import React from "react";

const Course = () => {
  return (
    <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg:white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      <div className="relative">
        <img
          src="https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2F8MbtJ4hTAaOk3KPcptqZ&w=3840&q=75"
          alt="course"
          className="w-full h-36  object-cover rounded-t-lg"
        />
        <CardContent className="px-5 py-4 space-y-3">
          <h1 className="hover:underline font-bold text-lg truncate">
            NextJS Complete Course in Hindi 2024
          </h1>
          <div className="flex justify-between items-center ">
              <div className="flex items-center gap-3">
                <Avatar className='h-8 w-8'>
                  <AvatarImage
                  src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="font-medium text-sm">Vidhi Singh</h1>
              </div>
              <Badge className={'bg-lime-600  dark:bg-lime-600 text-white px-2 py-1 text-xs rounded-full'}>
                Advance
              </Badge>
          </div>
          <div className="text-lg font-bold">
            <span>
            ₹499
            </span>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default Course;
