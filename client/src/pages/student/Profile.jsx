import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DialogDescription, DialogTitle, Dialog, DialogContent, DialogHeader, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import React from "react";

const Profile = () => {
  const isLoading = false;
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
              Name :{" "}
              <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                Vidhi Singh
              </span>
            </h1>
          </div>
          <div className="mb-2">
            <h1 className="font-semibold text-gray-900 dark:text-gray-100 ">
              Email :{" "}
              <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                vd@gmail.com
              </span>
            </h1>
          </div>
          <div className="mb-2">
            <h1 className="font-semibold text-gray-900 dark:text-gray-100 ">
              Role :{" "}
              <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                INSTRUCTOR
              </span>
            </h1>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="mt-2">
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>Make changes to your profile here . Click save when you are done.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label>
                            Name
                        </Label>
                        <Input type="text" placeholder ="Name" className="col-span-3"/>

                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label>
                            Profile Picture
                        </Label>
                        <Input type="file" accept="image/*" className="col-span-3"/>

                    </div>
                </div>
                <DialogFooter>
                <Button disabled={isLoading}>
                  {
                    isLoading?(
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                        Please Wait
                    </>
                    ):"Save Changes"
                  }
                </Button>

                    
                </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Profile;
