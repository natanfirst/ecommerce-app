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
  UserIcon,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import Link from "next/link";
import Cart from "./cart";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Container from "./container";

const Header = () => {
  const { status, data } = useSession();
  const pathname = usePathname();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <Container>
      <Card className="mx-auto flex max-w-[1240px] items-center justify-between p-[1.875rem]">
        <Sheet>
          <SheetTrigger className="lg:hidden" asChild>
            <Button variant="outline" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>Menu</SheetHeader>
            <div className="my-4 flex items-center gap-x-3">
              {status === "authenticated" && data?.user && (
                <Avatar>
                  <AvatarImage
                    src={data?.user?.image || "https://github.com/shadcn.png"}
                  />
                  <AvatarFallback>
                    {data?.user?.name?.[0]?.toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              )}
              <div className="flex flex-col">
                <p className="font-medium capitalize">{data?.user?.name}</p>
                <p className="text-sm text-opacity-75">Boas compras</p>
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
              <SheetClose asChild>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="mt-5 w-full justify-start gap-3"
                  >
                    <HomeIcon size={16} />
                    Inicio
                  </Button>
                </Link>
              </SheetClose>

              <Button
                variant="outline"
                className="mt-5 w-full justify-start gap-3"
              >
                <PercentIcon size={16} />
                Ofertas
              </Button>
              <SheetClose asChild>
                <Link href="/catalog">
                  <Button
                    variant="outline"
                    className="mt-5 w-full justify-start gap-3"
                  >
                    <ListOrderedIcon size={16} />
                    Catalogo
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
        <Link href="/">
          <h1 className="text-lg font-semibold">
            <span className="text-primary">Ecommerce</span> App
          </h1>
        </Link>
        <div className="hidden h-5 items-center gap-3 space-x-4 text-sm font-bold lg:flex">
          <Link className={cn(pathname === "/" && "text-primary")} href="/">
            Inicio
          </Link>
          <Separator orientation="vertical" />
          <Link
            className={cn(pathname === "/catalog" && "text-primary")}
            href="/catalog"
          >
            Catalogo
          </Link>
          <Separator orientation="vertical" />
          <Link href="">Ofertas</Link>
        </div>
        <div className="flex gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <UserIcon />
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <SheetHeader>Menu</SheetHeader>
              <div className="my-4 flex items-center gap-x-3">
                {status === "authenticated" && data?.user && (
                  <Avatar>
                    <AvatarImage
                      src={data?.user?.image || "https://github.com/shadcn.png"}
                    />
                    <AvatarFallback>
                      {data?.user?.name?.[0]?.toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                )}
                <div className="flex flex-col">
                  <p className="font-medium capitalize">{data?.user?.name}</p>
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
                <SheetClose asChild>
                  <Link href="/">
                    <Button
                      variant="outline"
                      className="mt-5 w-full justify-start gap-3"
                    >
                      <HomeIcon size={16} />
                      Inicio
                    </Button>
                  </Link>
                </SheetClose>

                <Button
                  variant="outline"
                  className="mt-5 w-full justify-start gap-3"
                >
                  <PercentIcon size={16} />
                  Ofertas
                </Button>
                <SheetClose asChild>
                  <Link href="/catalog">
                    <Button
                      variant="outline"
                      className="mt-5 w-full justify-start gap-3"
                    >
                      <ListOrderedIcon size={16} />
                      Catalogo
                    </Button>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <ShoppingCartIcon />
              </Button>
            </SheetTrigger>

            <SheetContent className="w-[350px]">
              <Cart />
            </SheetContent>
          </Sheet>
        </div>
      </Card>
    </Container>
  );
};

export default Header;
