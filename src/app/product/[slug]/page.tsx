import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";
import { computeProductTotalPrice } from "@/helpers/product";
import ProductList from "@/components/ui/product-list";
import SectionTitle from "@/components/ui/section-title";
import { Metadata, ResolvingMetadata } from "next";

interface ProducDetailtPageProps {
  params: { slug: string };
}

export async function generateMetadata(
  { params }: ProducDetailtPageProps,
): Promise<Metadata> {
  const slug = params.slug

  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

 
  return {
    title: product?.name,
    description: product?.description,
    openGraph: {
      images: product?.image_urls[0] ? [product?.image_urls[0]] : [],
      url: process.env.HOST_URL
    },
  }
}


const ProductDetailPage = async ({
  params: { slug },
}: ProducDetailtPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;

  return (
    <div className="flex flex-col gap-8 pb-8 max-w-[1240px] mx-auto ">
      <div className="flex flex-col gap-8 lg:flex-row w-full h-full">
        <div className="flex-1 w-full h-full">
          <ProductImages name={product.name} image_urls={product.image_urls} />
        </div>

        <div className="lg:max-w-[472px] lg:bg-accent ">
          <ProductInfo product={computeProductTotalPrice(product)} />
        </div>
      </div>

      <div>
        <div>
          <SectionTitle title="Produtos Recomendados" />
          <ProductList products={product.category.products} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
