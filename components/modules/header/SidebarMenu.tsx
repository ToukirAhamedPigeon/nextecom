'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { SheetTrigger } from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, MenuIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SidebarMenu({className}: {className: string}){
    const [show, setShow] = useState(false);
    return (
        <div className={cn(className)}>
            <Sheet>
                <SheetTrigger>
                    <MenuIcon size={32} className='text-white' />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                    </SheetHeader>
                    <Tabs defaultValue="categories">
                            <TabsList>
                                <TabsTrigger value="categories">
                            Categories
                        </TabsTrigger>
                        <TabsTrigger value="pages">
                            Pages
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="categories">
                        <div className=''>
                            <div className='flex items-center justify-between'>
                                <span className="capitalize hover:text-primary-500 cursor-pointer">category name</span>
                                <ArrowRight size={16} className='h-5 w-5 cursor-pointer' onClick={() => setShow(!show)} />
                            </div>
                            <div className='flex items-center gap-2'>
                                
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="pages">
                        <div className=''>
                            <div className='flex items-center justify-between'>
                                <span className="capitalize hover:text-primary-500 cursor-pointer">home page</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                
                            </div>
                        </div>
                    </TabsContent>
                    </Tabs>
                </SheetContent>
            </Sheet>

            <Sheet open={show} onOpenChange={setShow}>
                <SheetTrigger></SheetTrigger>
                <SheetContent className="pr-0 [&>button]:hidden">
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                    </SheetHeader>
                    <div>
                        <Button className='p-0 shadow-none bg-transparent text-gray-700 hover:bg-transparent'  onClick={() => setShow(!show)}>
                            <ArrowLeft className='cursor-pointer !w-6 !h-6'/>
                        </Button>
                        <div>
                            <Link href="">sub category</Link>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};