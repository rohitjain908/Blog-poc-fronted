"use client";
import "../styles/globals.css";
import "../styles/main.scss";
import React, { useState, createContext, useContext } from 'react';

const MyContext = createContext();

function Checkbox({value}){
    const { selectedTags, setSelectedTags } = useContext(MyContext);

    const onCheckBoxClicked = (event, tagValue) => {
        const isChecked = event.target.checked;
        if(isChecked){
            let newSelectedtags = selectedTags
            const tagIndex = newSelectedtags.indexOf(tagValue)
            if(tagIndex === -1){
                newSelectedtags.push(tagValue)
            }
            setSelectedTags(newSelectedtags)

        }
        else{
            let newSelectedtags = selectedTags
            const tagIndex = newSelectedtags.indexOf(tagValue)
            if(tagIndex !== -1){
                newSelectedtags.splice(tagIndex, 1)
            }
            setSelectedTags(newSelectedtags)
        }
    }

    return(
        <div class="flex items-center mb-4">
            <input 
                id="default-checkbox" 
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(event) => onCheckBoxClicked(event, value)}
            />
            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900">{value}</label>
        </div>
    )
}

export default function FiltersBar() {
    const [searchInput, setSearchInput] = useState("")
    const [selectedTags, setSelectedTags] = useState([])

    const onSearchChange = (event) => {
        const value = event.target.value;
        setSearchInput(value)
    }

    const onSearchButtonClick = (event) => {
        event.preventDefault()
        //have to show search result on the basis of searchInput
        //console.log("selectedTags ", selectedTags)
        alert("Searched Input is " + searchInput + " " + selectedTags)

    }

    
    const checksType = ["type1", "type2", "type3", "type4", "type5", "type6", "type7", "type8", "type9"]
    const checksList = checksType.map((check) => {
        return <Checkbox value={check} setSelectedTags />
    })
    return (
        <div className="w-[296px] px-5 mt-[166px]">
            <div class="mb-3">
                <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                    <input
                    type="search"
                    class="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2" 
                    value = {searchInput}
                    onChange={(event) => onSearchChange(event)}
                    />

                <button className=" ml-2" onClick={(event) => onSearchButtonClick(event)}>
                    <span
                        class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200 bg-gray-300"
                        id="basic-addon2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="h-5 w-5">
                            <path
                            fill-rule="evenodd"
                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                            clip-rule="evenodd" />
                        </svg>
                    </span>
                </button>

                </div>
            </div>
            <div className="">
                <div className="mb-3 font-bold text-2xl">
                    Filters
                </div>
                <MyContext.Provider value={{ selectedTags, setSelectedTags }} >
                    {checksList}
                </MyContext.Provider>
            </div>
            
        </div>
    );
}
