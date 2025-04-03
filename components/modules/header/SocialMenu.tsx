'use client';

import React from 'react';
import Container from '@/components/custom/Container';
import SocialIcons from './SocialIcons';
import LanguageCurrency from './LanguageCurrency';
import {Separator} from '@/components/ui/separator';
import { cn } from '@/lib/utils';


export default function SocialMenu({className}:{className?: string}){
    return (
        <div className={cn('bg-secondary-700 h-[52px]',className)}>
            <Container>
                <div className='flex justify-between items-center h-full'>
                    {/* left content */}
                    <div>
                        <p className='text-white'>Welcome to Nextecom E-Comerce Store</p>
                    </div>
                    {/* right content */}
                    <div className='flex items-center space-x-6'>
                        <SocialIcons className='text-white'/>
                        <Separator orientation='vertical' className="bg-white/20 h-[20px]"/>
                        <LanguageCurrency className='text-white bg-secondary-700 border-0'/>
                    </div>
                </div>
            </Container>
        </div>
    );
};