'use client';

import React from 'react';
import Container from '@/components/custom/Container';
import Logo from '@/components/custom/Logo';
import SearchInput from '@/components/modules/header/SearchInput';
import IconsGroup from '@/components/modules/header/IconsGroup';
import SidebarMenu from '@/components/modules/header/SidebarMenu';
import MobileSocialMenu from './MobileSocialMenu';


export default function MainMenu(){
    return (
        <nav className='bg-secondary-700 h-[88px] border-t-[1px] border-white border-opacity-20'>
            <Container>
                <div className='flex items-center justify-between h-full'>
                    {/* Mobile Sidebar */}
                    <SidebarMenu className='block lg:hidden'/>
                    {/* logo */}
                    <Logo className='hidden lg:block' />
                    {/* search input */}
                    <SearchInput className="hidden lg:flex items-center gap-4 flex-1 max-w-[646px] bg-white h-[48px]" />
                    {/* icons group */}
                    <IconsGroup className="" />
                    <MobileSocialMenu className='block lg:hidden'/>
                </div>
            </Container>
        </nav>
    );
};