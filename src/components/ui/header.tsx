import React from "react";
import { Card } from "./card";
import { Button } from "./button";
import { MenuIcon, ShoppingCartIcon } from "lucide-react";

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Button variant="outline" size="icon">
        <MenuIcon />
      </Button>
      <h1 className="font-semibold text-lg">
        <span className="text-primary">Ecommerce</span> App
      </h1>
      <Button variant="outline" size="icon">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
