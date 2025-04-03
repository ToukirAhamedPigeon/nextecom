'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Globe } from '@phosphor-icons/react';
import LanguageCurrency from './LanguageCurrency';
import SocialIcons from './SocialIcons';

export default function MobileSocialMenu({className}: {className?: string}){
    return (
        <div className={cn(className)}>
            <Sheet>
                <SheetTrigger>
                    <Globe size={32} className='text-white'/>
                </SheetTrigger>
                <SheetContent side='bottom' className='rounded-t-3xl'>
                    <SheetHeader>
                        <SheetTitle className='text-xl'>
                            Social/Language/Currency
                        </SheetTitle>
                    </SheetHeader>
                    <LanguageCurrency className='mt-4'/>
                    <SocialIcons className='mt-4 justify-center'/>
                </SheetContent>
            </Sheet>
        </div>
    );
};