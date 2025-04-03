'use client';

import Container from '@/components/custom/Container';
import { RectangleButton } from './RectangleButton';
import React from 'react';
import { ArrowDown, PhoneCall } from '@phosphor-icons/react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import CategoryList from './CategoryList';
import { TypeCategoryModel, TypeProductModel, TypeSlideModel, TypePageModel } from '@/types/models';

export default function Menus({className,categories,products,campaigns,pages}: {className: string, categories: TypeCategoryModel[], products: TypeProductModel[], campaigns: TypeSlideModel[], pages: TypePageModel[]}){
    return (
        <div className={cn('bg-white h-[80px]',className)}>
            <Container>
                <div className='flex items-center justify-between h-full'>
                    {/* left side */}
                    <div className='flex items-center gap-[24px]'>
                        {/* categories */}
                        <div className='relative'>
                        <RectangleButton className='h-[48px] w-[240px] uppercase text-gray-700 bg-white hover:bg-slate-50' icon='none'>
                                all categories
                                <ArrowDown size={24} weight="bold" />
                        </RectangleButton>
                        <CategoryList categories={categories} products={products} campaigns={campaigns} />
                        </div>
                        {/* pages */}
                        <div className='flex items-center gap-[24px]'>
                            {
                                pages.map((page: TypePageModel, idx: number) => (
                                    <Link href={`/${page.slug}`} key={idx} className='flex gap-[6px] items-center'>
                                        <Image src={page.image} alt="menu" width={20} height={20} />
                                        <span className='text-gray-600 text-body-sm-400'>{page.name}</span>
                                    </Link>
                                ))
                            }
                            {/* <Link href="/" className='flex gap-[6px] items-center'>
                                <Image src="/icons/ArrowsCounterClockwise.svg" alt="menu" width={20} height={20} />
                                <span className='text-gray-600 text-body-sm-400'>Compare</span>
                            </Link>
                            <Link href="/" className='flex gap-[6px] items-center'>
                                <Image src="/icons/Headphones.svg" alt="menu" width={20} height={20} />
                                <span className='text-gray-600 text-body-sm-400'>Customer Support</span>
                            </Link>
                            <Link href="/" className='flex gap-[6px] items-center'>
                                <Image src="/icons/Info.svg" alt="menu" width={20} height={20} />
                                <span className='text-gray-600 text-body-sm-400'>Need Help</span>
                            </Link> */}
                        </div>
                    </div>
                    {/* right side */}
                    <div className='flex items-center gap-[12px]'>
                        <PhoneCall size={20} weight="regular" className='text-slate-600' />
                        <p className='text-body-sm-400 text-gray-600'>+880 1754 479709</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};