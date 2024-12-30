"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { LayoutGrid, Search, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import GlobalApi from '../_utils/GlobalApi'

function Header() {

    const [productMainCategoryList, setProductMainCategoryList] = useState([]);

    useEffect(() => {
        const fetchProductMainCategory = async () => {
            try {
                const response = await GlobalApi.getProductMainCategory();
                setProductMainCategoryList(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching product main category:', error);
            }
        };

        fetchProductMainCategory();
    }, []);


    return (
        <div className='p-5 shadow-sm flex justify-between'>
            <div className='flex items-center gap-8'>
                <Image src='/logo.png' alt='logo'
                    width={150}
                    height={100} />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <h2 className='hidden md:flex gap-2 items-center
                        border rounded-full p-2 px-10 bg-slate-200
                        cursor-pointer'>
                            <LayoutGrid className='h-5 w-5' /> Category
                        </h2>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {productMainCategoryList.map((productMainCategory, index) => (
                            <DropdownMenuItem key={index}>
                                <h2>{productMainCategory}</h2>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className='md:flex gap-3 items-center border rounded-full 
                     p-2 px-2 hidden'>
                    <Search />
                    <input type='text' placeholder='Search'
                        className='outline-none'></input>
                </div>
            </div>
            <div className='flex gap-5'>
                <h2 className='flex gap-2 items-center text-lg'><ShoppingBag></ShoppingBag>0</h2>
                <Button className='mt-3'>Login</Button>
            </div>
        </div>
    )
}

export default Header