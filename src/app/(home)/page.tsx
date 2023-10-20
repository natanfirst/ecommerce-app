"use client";

import Image from "next/image";
import Categories from "./components/categories";

export default function Home() {
  return (
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
  );
}
