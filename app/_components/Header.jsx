"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import GlobalApi from "../_utils/GlobalApi";

function Header() {
  const [productMainCategoryList, setProductMainCategoryList] = useState([]);

  useEffect(() => {
    const fetchProductMainCategory = async () => {
      try {
        const response = await GlobalApi.getProductMainCategory();
        setProductMainCategoryList(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching product main category:", error);
      }
    };

    fetchProductMainCategory();
  }, []);

  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        <Image
          src="/logo.png"
          alt="logo"
          width={150}
          height={100}
          style={{ objectFit: 'contain' }}
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2
              className="hidden md:flex gap-2 items-center border rounded-full 
              p-2 px-10 bg-slate-200 cursor-pointer"
            >
              <LayoutGrid className="h-5 w-5" /> Category
            </h2>
          </DropdownMenuTrigger>
          {productMainCategoryList.length > 0 && (
            <DropdownMenuContent>
              <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {productMainCategoryList.map((productMainCategory, index) => (
                <DropdownMenuItem
                  key={index}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <Image
                    src={productMainCategory.icon}
                    alt="icon"
                    width={27}
                    height={27}
                  />
                  <h2 className="text-lg">{productMainCategory.description}</h2>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          )}
        </DropdownMenu>

        <div
          className="md:flex gap-3 items-center border rounded-full 
                     p-2 px-2 hidden"
        >
          <Search />
          <input
            type="text"
            placeholder="Search"
            className="outline-none"
          ></input>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="flex gap-2 text-lg">
          <ShoppingBag></ShoppingBag>0
        </h2>
        <Button>Login</Button>
      </div>
    </div>
  );
}

export default Header;
