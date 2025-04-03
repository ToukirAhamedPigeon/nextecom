'use client';

import { CaretRight } from '@phosphor-icons/react';
import React from 'react';
import Image from 'next/image';
import { TypeCategoryModel, TypeSubCategoryModel, TypeProductModel, TypeSlideModel } from '@/types/models';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';
import { toast } from 'sonner';
import Link from 'next/link';
export default function CategoryList({categories,products,campaigns}: {categories: TypeCategoryModel[], products: TypeProductModel[], campaigns: TypeSlideModel[]}){
    const router = useRouter();
    const filteredProducts = products.filter((product: TypeProductModel)=>product.featured == true);
    const dispatch = useDispatch();
    const handleAddCampaignProduct = (product: TypeProductModel) => {
        console.log(product);
        dispatch(
            addToCart({
                store: product.store,
                variant: product.productVariants[0],
                productName: product.name,
                productImage: product.images[0].url,
                qty: 1,
            })
        );
        toast.success('Product added to cart');
    }
    return (
        <div className='absolute h-[420px] w-[240px] shadow-xl top-[64px] border capitalize'>
          <ul>
            {categories.map((category: TypeCategoryModel, idx: number) => (
              <li key={idx} className='group h-[36px] w-full flex items-center justify-between px-4 cursor-pointer hover:bg-slate-100'>
                <Link href={`/category/${category.slug}/products`}>
                    <span className='text-body-sm-400 text-gray-600'>{category.name}</span>
                </Link>
                {
                    category.subCategory.length > 0 && (
                        <CaretRight size={12} className='group-hover:text-gray-900'/>
                    )
                }
                {
                    category.subCategory.length > 0 && (
                        <div className='hidden group-hover:grid absolute h-full xl:w-[868px] lg:w-[700px] top-0 left-[235px] px-2'>
                            <div className='grid bg-white shadow-xl borderp-5 grid-cols-[100px_1fr_1fr] xl:grid-cols-[164px_1fr_1fr] gap-5'>
                                <div className=" ">
                                    <ul>
                                        {
                                            category.subCategory.map((subCategory:TypeSubCategoryModel)=>(
                                                <li onClick={()=>router.push(`/category/${category.slug}/products`)} key={subCategory._id} className='group hover:bg-slate-100 h-[36px] px-4 flex items-center'>
                                                    <span className='capitalize text-body-sm-400 text-gray-600 group-hover:text-body-sm-500'>
                                                        {subCategory.name}
                                                    </span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className=" ">
                                    <div className="flex flex-col gap-6">
                                        <span className='text-body-md-600'>
                                            featured products
                                        </span>
                                        {
                                            filteredProducts.slice(0,3).map((product: TypeProductModel)=>(
                                                <div key={product._id} className="flex items-center gap-3">
                                                    <Image src={product.images[0].url} alt='phone' width={80} height={0} className='object-scale-down h-[80px] min-w-[80px]' />
                                                    <div className="flex flex-col gap-2">
                                                        <span className='text-body-sm-400'>{product.name}</span>
                                                            {product.discount ? (
                                                                <span className='text-body-sm-600 text-blue-500'>
                                                                    <span className='text-body-sm-400 line-through mr-2 text-slate-400'>${product.price}</span> ${(product.price-((product.price*product.discount)/100)).toFixed(2)}
                                                                </span>
                                                            ) : (
                                                                <span className='text-body-sm-600 text-blue-500'>${product.price}</span>
                                                            )}
                                                       
                                                    </div>
                                                </div>
                                        ))
                                        }
                                    </div>
                                </div>
                                {/* campaigns */}
                                {
                                    campaigns.length > 0 ? (
                                        <div onClick={()=> handleAddCampaignProduct(campaigns[0].slideItem[0].product)} className="border bg-cover bg-center" style={{backgroundImage: `url(${campaigns[0].image})`}}></div>
                                    ) : (
                                        <div className="border bg-[url('/images/banner.svg')] bg-cover bg-center"></div>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </li>
            ))}
          </ul>
        </div>
    );
};