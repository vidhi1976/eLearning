import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import Course from "./Course";
import { useLoadUserQuery, useUpdateUserMutation } from "@/features/api/authApi";
import { toast } from "sonner";

const Profile = () => {
  // State for updating name and profile picture
  const [name, setName] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");

  // Fetch user data
  const { data, isLoading } = useLoadUserQuery();

  // Mutation for updating user profile
  const [
    updateUser,
    { data: updateUserData, isLoading: updateUserIsLoading, isError, error, isSuccess },
  ] = useUpdateUserMutation();


  // Handle profile picture change
  const onChangeHandler = (e) => {
    const file = e.target.files?.[0];
    if (file) setProfilePhoto(file);
  };

   // Handle profile update
   const updateUserHandler = async () => {
    const formData = new FormData();
    formData.append("name", name);
    if (profilePhoto) formData.append("profilePhoto", profilePhoto);

    await updateUser(formData);
  };
  

  // Handle success and error messages
  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message || "Profile updated successfully.");
    }
    if (isError) {
      toast.error(error.message || "Failed to update profile.");
    }
  }, [error,updateUserData, isSuccess, isError]);

  // Prevent rendering if data is still loading
  if (isLoading) return <h1>Profile Loading...</h1>;
  const user = data && data.user;
  console.log(user);
  
  return (
    <div className="my-24 max-w-4xl mx-auto px-4">
      <h1 className="font-bold text-2xl text-center md:text-left">Profile</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 my-5">
        <div className="flex flex-col items-center">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 mb-4">
            <AvatarImage src={user.photoUrl || "https://github.com/shadcn.png"} alt="Profile Photo" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="mb-2">
            <h1 className="font-semibold text-gray-900 dark:text-gray-100 ">
              Name: <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">{user.name}</span>
            </h1>
          </div>
          <div className="mb-2">
            <h1 className="font-semibold text-gray-900 dark:text-gray-100 ">
              Email: <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">{user.email}</span>
            </h1>
          </div>
          <div className="mb-2">
            <h1 className="font-semibold text-gray-900 dark:text-gray-100 ">
              Role: <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">{user.role.toUpperCase()}</span>
            </h1>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="mt-2">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you are done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label>Name</Label>
                  <Input
                    type="text"
                    placeholder="Enter Name"
                    className="col-span-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label>Profile Picture</Label>
                  <Input type="file" accept="image/*" className="col-span-3" onChange={onChangeHandler} />
                </div>
              </div>
              <DialogFooter>
                <Button disabled={updateUserIsLoading} onClick={updateUserHandler}>
                  {updateUserIsLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please Wait
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
        <h1 className="font-medium text-lg">Courses you have enrolled in</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5">
          {user.enrolledCourses?.length > 0 ? (
            user.enrolledCourses.map((course) => <Course course={course} key={course._id} />)
          ) : (
            <h1>You have not enrolled yet</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
