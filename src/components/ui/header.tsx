import React from "react";
import { Card } from "./card";
import { Button } from "./button";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>Header</SheetHeader>
          <div className="mt-2 flex flex-col gap-1">
            <Button
              variant="outline"
              className="mt-5 w-full justify-start gap-3"
            >
              <LogInIcon size={16} />
              Fazer login
            </Button>
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
