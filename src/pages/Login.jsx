import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Login() {
  return (
    <div className="w-full min-h-screen items-center justify-center">
      <Card className="border-black">
        <CardHeader>
          <CardTitle>Fintropolis</CardTitle>
          <CardDescription>Email Address</CardDescription>
          <input type="email" placeholder="janedoe@gmail.com"/>
        </CardHeader>
        <CardContent>
          <p>Password</p>
          <input type="text" placeholder="zkjkz"/>
        </CardContent>
        <CardFooter>
          <p>Sign in</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
