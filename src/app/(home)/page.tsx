import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "../../components/ui/product-list";
import SectionTitle from "../../components/ui/section-title";
import PromoBanner from "./components/promo-banner";
import { Metadata } from "next";
import Container from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Ecommerce App",
  description: "Ecommerce app , test application",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
  ],
};

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discount_percent: {
        gt: 0,
      },
    },
  });
  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <div className=" flex flex-col gap-y-8 pb-8">
      <div className="p-5">
        <PromoBanner
          className="lg:hidden"
          src="/banner-home-01.png"
          alt="Até 55% de desconto esse mês"
        />
        <PromoBanner
          className="hidden lg:block"
          src="/banner-home-desk.png"
          alt="Até 55% de desconto esse mês"
        />
      </div>
      <Container className="flex flex-col gap-y-8">
        <div className="px-5">
          <Categories />
        </div>

        <div className="">
          <SectionTitle title="Ofertas" />
          <ProductList products={deals} />
        </div>
        <div className="p-5">
          <PromoBanner
            src="/banner-home-02.png"
            alt="Até 55% de desconto esse mês"
          />
        </div>
        <div className="">
          <SectionTitle title="Teclados" />
          <ProductList products={keyboards} />
        </div>
        <div className="p-5">
          <PromoBanner
            src="/banner-home-03.png"
            alt="Até 55% de desconto esse mês"
          />
        </div>
        <div className="">
          <SectionTitle title="Mouses" />
          <ProductList products={mouses} />
        </div>
      </Container>
    </div>
  );
}
