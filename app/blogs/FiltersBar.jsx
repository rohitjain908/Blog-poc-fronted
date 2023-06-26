"use client";
import React, { useState, createContext, useContext } from "react";

const MyContext = createContext();

function Checkbox({ value, selectedTags, setSelectedTags }) {
  const onCheckBoxClicked = (event, tagValue) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      let newSelectedtags = selectedTags;
      const tagIndex = newSelectedtags.indexOf(tagValue);
      if (tagIndex === -1) {
        newSelectedtags.push(tagValue);
      }
      setSelectedTags(newSelectedtags);
    } else {
      let newSelectedtags = selectedTags;
      const tagIndex = newSelectedtags.indexOf(tagValue);
      if (tagIndex !== -1) {
        newSelectedtags.splice(tagIndex, 1);
      }
      setSelectedTags(newSelectedtags);
    }
  };

  return (
    <div class="flex items-center mb-4">
      <input
        id="default-checkbox"
        type="checkbox"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onChange={(event) => onCheckBoxClicked(event, value)}
      />
      <label
        for="default-checkbox"
        class="ml-2 text-sm font-medium text-gray-900"
      >
        {value}
      </label>
    </div>
  );
}

export default function FiltersBar({
  tags = [],
  selectedTags,
  setSelectedTags,
  searchInput,
  setSearchInput,
}) {
  const onSearchChange = (event) => {
    const value = event.target.value;
    setSearchInput(value);
  };

  const checksList = tags.map((tag) => {
    return (
      <Checkbox
        value={tag.attributes.title}
        setSelectedTags={setSelectedTags}
        selectedTags={selectedTags}
      />
    );
  });
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
            value={searchInput}
            onChange={(event) => onSearchChange(event)}
          />
        </div>
      </div>
      <div className="">
        <div className="mb-3 font-bold text-2xl">Filters</div>
        {/* <MyContext.Provider value={{ selectedTags, setSelectedTags }}> */}
        {checksList}
        {/* </MyContext.Provider> */}
      </div>
    </div>
  );
}
