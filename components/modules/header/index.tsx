import React from 'react';
import MainMenu from './MainMenu';
import SocialMenu from './SocialMenu';
import Menus from './Menus';
import { getCategories } from '@/actions/category';
import { getProducts } from '@/actions/product';
import { getCampaigns } from '@/actions/campaign';
import { getPages } from '@/actions/page';
export default async function Header(){
    const categories = await getCategories();
    const products = await getProducts();
    const campaigns = await getCampaigns("homepage-product-best-deals-section");
    const pages = await getPages();
    return (
        <header>
            <SocialMenu className='hidden lg:block'/>
            <MainMenu />
            <Menus className='hidden lg:block' categories={categories} products={products} campaigns={campaigns} pages={pages}/>
        </header>
    );
};