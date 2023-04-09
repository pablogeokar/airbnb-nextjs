"use client";

import { IconType } from "react-icons";

interface CategoryBoxProps {
  label: string;
  description: string;
  selected?: boolean;
  icon: IconType;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  label,
  selected,
  description,
  icon,
}) => {
  return (
    <div
      className={`
            flex
            flex-col
            items-center
            justify-center
            gap-2
            p-3
            border-p-2
            hover:text-neutral-800
            transition
            cursor-pointer
            ${selected ? 'border-b-neutral-800' : 'border-transparent'}
      `}
    >
      <div></div>
    </div>
  );
};

export default CategoryBox;
