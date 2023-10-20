import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discount_percent: {
        gt: 0
      }
    }
  })

  return (
    <div className="">
      <div className="p-5">
      <Image
        className="h-auto w-full"
        sizes="100vw"
        src="/banner-home-01.png"
        alt="Até 55% de desconto esse mês"
        width={350}
        height={150}
      />
      <div className="mt-8">
        <Categories />
      </div>
      </div>

      <div className="mt-8">
        <ProductList products={deals} />
      </div>
    </div>
  );
}
