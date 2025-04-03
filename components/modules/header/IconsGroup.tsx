'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Heart, ShoppingCart, User } from '@phosphor-icons/react';
import React from 'react';

export default function IconsGroup({className}:{className?:string}){
    return (
        <div className={cn(className)}>
            <Button variant="icon" className="text-white">
                <ShoppingCart size={32} weight="regular" />
                <span className="absolute -top-2 left-6 bg-white text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-xs">0</span>
            </Button>
            <Button variant="icon" className="text-white">
                <Heart size={32} weight="regular" />
            </Button>
            <Button variant="icon" className="text-white">
                <User size={32} weight="regular" />
            </Button>
        </div>
    );
};