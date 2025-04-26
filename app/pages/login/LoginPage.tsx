import React, { useState } from "react";
import { Avatar } from "~/components/ui/avatar";
import { Box } from "~/components/ui/box";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import loginImage from "/images/login-img.png";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import "../../i18n";

const LoginPage: React.FC = () => {
  const { t } = useTranslation();

  const [signUpData, setSignUpData] = useState({
    username: "",
    phone: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const isSignUpDisabled =
    !signUpData.username || !signUpData.phone || !signUpData.password;
  const isLoginDisabled = !loginData.username || !loginData.password;

  const handleSignUpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [id]: value }));
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLoginData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <Box className="relative lg:flex h-screen">
      <Box className="relative lg:w-4xl h-full">
        <img
          src={loginImage}
          alt="login image"
          className="absolute top-0 left-0 lg:w-full h-full object-cover backdrop-opacity-95"
        />
        <Box className="relative z-10 p-8">
          <Avatar
            className="bg-white mt-30 relative z-10 animate-pulse"
            style={{ animationIterationCount: "infinite" }}
          />
          <h1 className="text-white text-3xl font-bold mt-5">
            {t("login.title")}
          </h1>
          <p className="text-white mt-4 w-[80%]">{t("login.description")}</p>
        </Box>
      </Box>
      <Box>
        <Tabs defaultValue="signUp" className="lg:w-full mt-20 mx-20">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signUp">{t("login.signup.title")}</TabsTrigger>
            <TabsTrigger value="login">{t("login.login.title")}</TabsTrigger>
          </TabsList>
          <TabsContent value="signUp">
            <Card>
              <CardHeader>
                <CardTitle>{t("login.signup.title")}</CardTitle>
                <CardDescription>
                  {t("login.signup.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Box className="space-y-1">
                  <Label htmlFor="username">{t("login.signup.username")}</Label>
                  <Input
                    id="username"
                    value={signUpData.username}
                    onChange={handleSignUpChange}
                  />
                </Box>
                <Box className="space-y-1">
                  <Label htmlFor="phone">{t("login.signup.phone")}</Label>
                  <Input
                    id="phone"
                    type="number"
                    value={signUpData.phone}
                    onChange={handleSignUpChange}
                  />
                </Box>
                <Box className="space-y-1">
                  <Label htmlFor="password">{t("login.signup.password")}</Label>
                  <Input
                    id="password"
                    type="password"
                    value={signUpData.password}
                    onChange={handleSignUpChange}
                  />
                </Box>
              </CardContent>
              <CardFooter>
                <Button variant="skyOutline" disabled={isSignUpDisabled}>
                  <Link
                    to="/dashboard"
                    onClick={() => {
                      localStorage.setItem("username", signUpData.username);
                      localStorage.setItem("token", "dummy-token");
                    }}
                  >
                    {t("login.signup.title")}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>{t("login.login.title")}</CardTitle>
                <CardDescription>
                  {t("login.login.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="loginUsername">
                    {t("login.login.username")}
                  </Label>
                  <Input
                    id="username"
                    value={loginData.username}
                    onChange={handleLoginChange}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="loginPassword">
                    {t("login.login.password")}
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="sky" disabled={isLoginDisabled}>
                  <Link
                    to="/dashboard"
                    onClick={() => {
                      localStorage.setItem("username", loginData.username);
                      localStorage.setItem("token", "dummy-token");
                    }}
                  >
                    {t("login.login.title")}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </Box>
    </Box>
  );
};

export default LoginPage;
