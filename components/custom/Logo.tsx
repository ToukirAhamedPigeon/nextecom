'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
export default function Logo({className}: {className?: string}){
    return (
        <div className={cn(className)}>
            <Link href={'/'}>
                <Image src={'nextecom.svg'} alt='logo' width={80} height={80} />
            </Link>
        </div>
    );
};