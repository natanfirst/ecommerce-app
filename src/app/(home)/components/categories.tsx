import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { Category } from "@prisma/client";
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from "lucide-react";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const categoryIcon = {
    keyboards: <KeyboardIcon size={16} />,
    monitors: <MonitorIcon size={16} />,
    headphones: <HeadphonesIcon size={16} />,
    mousepads: <SquareIcon size={16} />,
    speakers: <SpeakerIcon size={16} />,
    mouses: <MouseIcon size={16} />,
  };

  return (
    <Badge
      className="flex items-center justify-center gap-3 rounded-lg px-3 py-3"
      variant="outline"
    >
      <div className="flex min-w-[100px] items-center justify-start gap-x-3">
        {categoryIcon[category.slug as keyof typeof categoryIcon]}
        <span className="text-xs font-bold">{category.name}</span>
      </div>
    </Badge>
  );
};

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
      {categories.map((category) => (
        <Link key={category.id} href={`/category/${category.slug}`}>
          <CategoryItem category={category} />
        </Link>
      ))}
    </div>
  );
};

export default Categories;
