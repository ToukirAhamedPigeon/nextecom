import { cn } from '@/lib/utils';
import { FacebookLogo,InstagramLogo,LinkedinLogo,PinterestLogo,TwitterLogo,YoutubeLogo } from '@phosphor-icons/react';
import Link from 'next/link';
import React from 'react';

export default function SocialIcons({className}:{className?: string}){
    return (
        <div className={cn('flex items-center gap-4',className)}>
           <span className='capitalize'>follow us:</span>
           <div className='flex items-center gap-4'>
                    <Link href="/" target='_blank'>
                        <TwitterLogo weight='fill' size={16}/>
                    </Link>
                    <Link href="/" target='_blank'>
                        <FacebookLogo weight='fill' size={16}/>
                    </Link>
                    <Link href="/" target='_blank'>
                        <PinterestLogo weight='fill' size={16}/>
                    </Link>
                    <Link href="/" target='_blank'>
                        <InstagramLogo weight='fill' size={16}/>
                    </Link>
                    <Link href="/" target='_blank'>
                        <LinkedinLogo weight='fill' size={16}/>
                    </Link>
                    <Link href="/" target='_blank'>
                        <YoutubeLogo weight='fill' size={16}/>
                    </Link>
           </div>
        </div>
    );
};