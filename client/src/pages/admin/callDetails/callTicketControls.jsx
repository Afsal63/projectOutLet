import React, { useState } from "react";

const Index = () => {
    const [allMine, setAllMine] = useState("All"); //All,Mine
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
                <button
                    onClick={() => setAllMine("All")}
                    className={`${
                        allMine == "All"
                            ? "h-[50px] items-center inline-flex text-[#3F8CFF] border-b-2 border-solid border-[#3F8CFF]"
                            : "text-[#8F8F8F]"
                    }`}
                    to={""}
                >
                    All
                </button>
                <button
                    onClick={() => setAllMine("Mine")}
                    className={`${
                        allMine == "Mine"
                            ? "h-[50px] items-center inline-flex text-[#3F8CFF] border-b-2 border-solid border-[#3F8CFF]"
                            : "text-[#8F8F8F]"
                    }`}
                    to={""}
                >
                    Mine
                </button>
            </div>

            <div className="flex items-center gap-[20px]">
                <label className="relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </span>
                    <input
                        className="min-w-[363px] placeholder:italic placeholder:text-slate-400 block bg-white border border-[#CFDEF4] rounded-md py-2 h-[50px] pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Search for Contact, ticket etc.."
                        type="text"
                        name="search"
                    />
                </label>

                <button className="bg-[#FFFFFF] p-[13px] flex items-center gap-[9px] border-[1px] border-solid rounded-[10px] text-[16px] font-normal border-[#CFDEF4]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Index;
