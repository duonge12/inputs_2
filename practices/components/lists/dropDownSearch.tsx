'use client';



import { ChangeEvent, useEffect, useState } from "react"

import { LucideSearch } from "lucide-react"
import { EState, IData, ISearchDrop } from "./type";
import { Button } from "../buttons";
import { SimpleInput } from "../inputs";
import { Li } from "./listRow/simpleList";
import { twMerge } from "tailwind-merge";






export const SearchDrop=(
{
   
    data,placeholder,...rest
}:ISearchDrop
)=>{
    const [drop,setDrop]=useState(true)
    const [value,setValue]=useState('')

    const [list,setList]=useState<IData[]>(data as IData[])
    const [displayList,setDisplayList]=useState<IData[]>(list)
    const [removeList,addRemoveList]=useState<IData[]>([] as IData[])
   
    const handleSearching=(e: ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }
    const onDestroy=(data: IData)=>{
        let newList=list?.filter(item=> item.name!== data.name)
        setList(newList)
        addRemoveList([...removeList,data])
    }
    const onAdd=(data: IData)=>{
        setList([...list,data])
        let newList=removeList.filter(item=>item!==data)
        addRemoveList(newList)
    }
    useEffect(()=>{
        let newList=list.filter(item=> item.name.toLowerCase().startsWith(value.toLowerCase()))
        console.log(value)
        setDisplayList(newList)
    },[value,list])
    function handleDrop(){
        if(drop===true)
            setDrop(false)
        else
            setDrop(true)
    }
   
    
    return(
        <div className="inline-block w-full relative">
            <div className={removeList.length===0? " hidden": " px-2 py-1"}>
               {removeList.length>0 && removeList.map(item=>
                <Button key={item.name} onClick={()=>onAdd(item)}>{item.name}</Button>
               )}
            </div>
            <button onClick={handleDrop} className="w-full">
                <SimpleInput placeholder={placeholder} value={value} onChange={handleSearching} leftSymbol={<LucideSearch/>} />
            </button>
            <ul className={twMerge("absolute","left-0 right-0",drop&& "hidden")}>
                {
                   (displayList!== undefined)&& displayList.map(item =>(
                            <Li 
                                key={item.name} 
                                name={item.name} 
                                value={item.value} 
                                onDestroy={()=>onDestroy(item)}>
                                <span>{item.value}</span>
                            </Li>
                        )
                    )
                }
            </ul>
           
        </div>
    )
   
   
}