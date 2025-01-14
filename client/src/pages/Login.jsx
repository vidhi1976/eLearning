// a2pvQ3d6yLig2CL8
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/features/api/authApi";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function Login() {
  const [loginInput, setloginInput] = useState({
    email: "",
    password: "",
  });
  const [signupInput, setsignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerIsLoading,
      isSuccess: registerIsSuccess,
    },
  ] = useRegisterUserMutation(); //gives data of the registered User
  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess,
    },
  ] = useLoginUserMutation();

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setsignupInput({ ...signupInput, [name]: value });
    } else {
      setloginInput({ ...loginInput, [name]: value });
    }
  };
  const handleSubmit = async(type) => {
    const inputData = type === "signup" ? signupInput : loginInput;
    const action = type==="signup"? registerUser:loginUser;
    await action(inputData);
  };
  useEffect(() => {
    
    if(registerIsSuccess && registerData){
      toast.success(registerData.message || "Signup Successful!");
    }
    if(loginIsSuccess && loginData){
      toast.success(loginData.message || "Login Successful!");
    }
    if(registerError){
      toast.error(registerData.message || "Signup Failed")
    }
    if(loginError){
      toast.error(loginData.message || "Login Failed")
    }

  }, [loginIsLoading,registerIsLoading,loginError,registerError,loginData,registerData])
  


  return (
    <div className="flex items-center w-full justify-center mt-28 ">
        
      <Tabs defaultValue="signup" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 ">
          <TabsTrigger value="signup" >Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup" >
          <Card >
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
                Create a new account and click signup when you are done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  name="name"
                  value={signupInput.name}
                  type="text"
                  onChange={(e) => {
                    changeInputHandler(e, "signup");
                  }}
                  placeholder="Vidhi"
                  required="true"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  value={signupInput.email}
                  id="email"
                  onChange={(e) => {
                    changeInputHandler(e, "signup");
                  }}
                  placeholder="abc@gmail.com"
                  required="true"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  value={signupInput.password}
                  id="password"
                  placeholder="....."
                  type="password"
                  required="true"
                  onChange={(e) => {
                    changeInputHandler(e, "signup");
                  }}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled={registerIsLoading} onClick={() => handleSubmit("signup")}>
                {
                  registerIsLoading ? (
                    <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please Wait
                    </>
                  ):"Signup"

                }
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Already a user ? Login here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  value={loginInput.email}
                  onChange={(e) => {
                    changeInputHandler(e, "login");
                  }}
                  placeholder="abc@gmail.com"
                  required="true"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  value={loginInput.password}
                  onChange={(e) => {
                    changeInputHandler(e, "login");
                  }}
                  placeholder="....."
                  type="password"
                  required="true"
                />
              </div>
            </CardContent>
            <CardFooter>
            <Button disabled={loginIsLoading} onClick={() => handleSubmit("login")}>
                {
                  loginIsLoading ? (
                    <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please Wait
                    </>
                  ):"Login"

                }
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      
    </div>
  );
}
