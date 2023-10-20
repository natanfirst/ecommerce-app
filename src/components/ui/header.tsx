"use client";

import React from "react";
import { Card } from "./card";
import { Button } from "./button";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";

const Header = () => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            Menu
          </SheetHeader>
            <div className="flex items-center gap-x-3 my-4">
            {status === "authenticated" && data?.user && (
              <Avatar>
                <AvatarImage src={data?.user?.image || "https://github.com/shadcn.png"} />
                <AvatarFallback>{data?.user?.name?.[0]?.toUpperCase()}</AvatarFallback>
              </Avatar>
            )}
            <div  className="flex flex-col">
            <p className="capitalize font-medium">{data?.user?.name}</p>
            <p className="capitalize text-sm text-opacity-75">{data?.user?.name}</p>
            </div>
     
            </div>
        
          <Separator />
          <div className="mt-2 flex flex-col gap-1">
            {status !== "authenticated" ? (
              <Button
                onClick={() => handleLoginClick()}
                variant="outline"
                className="mt-5 w-full justify-start gap-3"
              >
                <LogInIcon size={16} />
                Fazer login
              </Button>
            ) : (
              <Button
                onClick={() => handleLogoutClick()}
                variant="outline"
                className="mt-5 w-full justify-start gap-3"
              >
                <LogOutIcon size={16} />
                Fazer logout
              </Button>
            )}

            <Button
              variant="outline"
              className="mt-5 w-full justify-start gap-3"
            >
              <HomeIcon size={16} />
              Inicio
            </Button>
            <Button
              variant="outline"
              className="mt-5 w-full justify-start gap-3"
            >
              <PercentIcon size={16} />
              Ofertas
            </Button>
            <Button
              variant="outline"
              className="mt-5 w-full justify-start gap-3"
            >
              <ListOrderedIcon size={16} />
              Catalogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">Ecommerce</span> App
      </h1>
      <Button variant="outline" size="icon">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
