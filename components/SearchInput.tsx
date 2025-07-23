'use Client';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { use, useEffect } from 'react'
import { useState } from 'react';
import Image from "next/image";
import { formUrlQuery,removeKeysFromUrlQuery } from "@jsmastery/utils";

const SearchInput = () => {
    const pathname= usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('topic') || '';


    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
        if (searchQuery) {
            const newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: "your_query_key",
                value: searchQuery,
            });
            router.push(newUrl,{scroll: false});
        } else
            if(pathname === '/companions') {
                const newUrl = removeKeysFromUrlQuery({
                  params: searchParams.toString(),
                  keysToRemove: ["topic"],
                });
                router.push(newUrl,{scroll: false});
            }
        }, 500)
    },[searchQuery,router, pathname]);
  return (
    <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
        <Image src="/icons/search.svg" alt="search" width={15} height={15}/>
        <input placeholder="Search Companions...." className="outline-none" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
    </div>
  )
}

export default SearchInput