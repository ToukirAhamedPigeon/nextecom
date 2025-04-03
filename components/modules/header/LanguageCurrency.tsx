
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import React from 'react';

export default function LanguageCurrency({className}:{className?: string}){
    const switchLocale = (val:string)=>{
        console.log(val);
    }
    const switchCurrency = (val:string)=>{
        console.log(val);
    }
    return (
        <div className={cn(className,"flex items-center gap-4")}>
            <Select onValueChange={(val)=>switchLocale(val)} defaultValue="en">
                <SelectTrigger className={cn(className,"focus:ring-0 focus:ring-offset-0")} title="Select a language">
                    <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="en">
                        <div className='flex items-center gap-2'>
                        <Image src="https://cdn-icons-png.flaticon.com/128/206/206626.png" alt="English" width={16} height={16}/>
                        EN
                        </div>
                    </SelectItem>
                    <SelectItem value="bn">
                        <div className='flex items-center gap-2'>
                            <Image src="https://cdn-icons-png.flaticon.com/128/16575/16575488.png" alt="Bangla" width={22} height={22}/>
                            BN
                        </div>
                    </SelectItem>
                </SelectContent>
            </Select>
            <Select onValueChange={(val)=>switchCurrency(val)} defaultValue="BDT">
                <SelectTrigger className={cn(className,"focus:ring-0 focus:ring-offset-0 min-w-[95px]")} title="Select a currency">
                    <SelectValue placeholder="Select a currency" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="BDT">
                        <div className='flex items-center gap-2'>
                            <Image src="https://cdn-icons-png.flaticon.com/128/16575/16575488.png" alt="Bangla" width={22} height={22}/>
                            BDT
                        </div>
                    </SelectItem>
                    <SelectItem value="USD">
                        <div className='flex items-center gap-2'>
                            <Image src="https://cdn-icons-png.flaticon.com/128/206/206626.png" alt="English" width={16} height={16}/>
                            USD
                        </div>
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};