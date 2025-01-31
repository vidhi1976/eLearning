import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const Profile = () => {
  return (
    <div className="my-24 max-w-4xl mx-auto px-4">
      <h1 className="font-bold text-2xl text-center md:text-left">Profile</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 my-5">
        <div className="flex flex-col items-center">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 mb-4">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
            <div className="mb-2">
                <h1 className="font-semibold text-gray-900 dark:text-gray-100 ">
                    Name : <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">Vidhi Singh</span>
                </h1>
            </div>
            <div className="mb-2">
                <h1 className="font-semibold text-gray-900 dark:text-gray-100 ">
                    Email : <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">vd@gmail.com</span>
                </h1>
            </div>
            <div className="mb-2">
                <h1 className="font-semibold text-gray-900 dark:text-gray-100 ">
                    Role : <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">INSTRUCTOR</span>
                </h1>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
