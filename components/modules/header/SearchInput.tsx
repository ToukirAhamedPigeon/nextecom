'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Badge } from '@/components/custom/badge';
import { m } from 'framer-motion';
import axios from 'axios';
import { TypeProductModel } from '@/types/models';

export default function SearchInput({ className }: { className?: string }) {
  // const [isMounted, setIsMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [data, setData] = useState<TypeProductModel[]>([]);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  const handleSearch = async(e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue=e.target.value;
    if(searchValue.length > 0){
      await axios.get(process.env.NEXT_PUBLIC_API_URL + '/api/public/products',{
        params:{
          search:searchValue
        }
      }).then((res)=>{
        console.log(res.data.data);
        setData(res.data.data);
      }).catch((err)=>{
        console.log(err);
      }).finally(()=>{
        setOpenDropdown(true);
      })
    }
  }

  return (
    <div className={cn('px-2 relative', className)}>
      <Input 
        onInput={handleSearch}
        placeholder='Search Products...' 
        className='border-none focus:ring-white shadow-none focus:border-none active:border-none focus-visible:ring-0' onMouseDown={()=>setOpenDropdown(!openDropdown)}
      />
      <Button variant="icon">
        <Search className='text-secondary-900' />
      </Button>
      
      {/* search dropdown */}
      <m.div
            onMouseLeave={()=>setOpenDropdown(false)} 
            initial={{y:-15, opacity:0}}
            whileInView={{opacity:1, y:0}}
            exit={{y:-15, opacity:0}}
            transition={{duration:0.3, ease:'easeInOut'}}
       className={cn('hidden h-[610px] absolute w-full top-12 bg-white border overflow-auto backdrop-filter shadow-gray-700 left-0', openDropdown && 'flex')}>
        <div className="flex flex-col gap-y-6 w-full">
          {
            data?.map((item:TypeProductModel,idx)=>(
              <Link 
                key={idx}
                href="/" 
            className='flex items-center gap-4 py-4 px-4 border-2 border-white hover:border-secondary-700'
          >
            {/* {isMounted ? ( */}
              <Image 
                src={item.images[0].url} 
                width={100}
                height={100}
                alt="Product Image"
                className="object-contain"
              />
            {/* ) : (
              <div style={{ width: 100, height: 100 }} /> // Placeholder
            )} */}
            <div className="flex flex-col gap-2">
              <h3 className="font-[400]">{item.name}</h3>
              {item.discount > 0 && (
                <Badge className="" variant="warning">{item.discount}%</Badge>
              )}
              <h3>${item.price}</h3>
            </div>
              </Link>
            ))
          }
        </div>
      </m.div>
    </div>
  );
}