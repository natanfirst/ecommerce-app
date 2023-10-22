import { CarIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";

const Cart = () => {
  const {products} = useContext(CartContext)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <ShoppingCartIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>Menu</SheetHeader>
        <Badge
          className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
          variant="outline"
        >
          <ShoppingCartIcon size={16} />
          Carrinho
        </Badge>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
