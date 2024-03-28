'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';

//поправи всичко на бг

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is near the beach!',
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'This property is near the Windmills!',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This property is a modern'
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'This property is near the Countryside'
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'This property have a pool'
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'This property is in the Island'
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property is near the lake'
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'За любители на зимните спортове!'
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'Като в приказките!'
  },
  {
    label: 'Caves',
    icon: GiCaveEntrance,
    description: 'За любителите на екстремното!'
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'Сред природата с приятели!'
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: 'Усети истинският студ!'
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'Жегата се търпи! '
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'Петелът ще те събуди, нямаш нужда от аларма!'
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'Поглези се!'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;