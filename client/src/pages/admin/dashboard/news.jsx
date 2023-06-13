import React from "react";

const News = () => {
    return (
      <div className="news w-full h-full border border-gray-300 rounded-xl flex flex-col p-8">
        <div className="flex justify-between mb-8">
          <div className="text-sm flex flex-col">
            <h3 className="font-medium text-lg">What's The Latest</h3>
            <span className="text-[#8F8F8F] text-sm">We have sent you One Time Password to your email-id</span>
          </div>
          <div className="flex items-center">
            <span className="px-6 py-1 bg-green-600 rounded-full text-white">New</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-6">
            <img className="w-28 h-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3s-ygrSUGjha3wNKKQpepTt22hxzpJDSVqg&usqp=CAU"/>
            <div className="flex flex-col">
              <h3 className="font-bold">Resolve support tickets fast with these strategies</h3>
              <span className="text-[#8F8F8F]">Thu Feb 09 2023</span>
            </div>
          </div>
          <div className="flex gap-6">
            <img className="w-28 h-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3s-ygrSUGjha3wNKKQpepTt22hxzpJDSVqg&usqp=CAU"/>
            <div className="flex flex-col">
              <h3 className="font-bold">Resolve support tickets fast with these strategies</h3>
              <span className="text-[#8F8F8F]">Thu Feb 09 2023</span>
            </div>
          </div>
          <div className="flex gap-6">
            <img className="w-28 h-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3s-ygrSUGjha3wNKKQpepTt22hxzpJDSVqg&usqp=CAU"/>
            <div className="flex flex-col">
              <h3 className="font-bold">Resolve support tickets fast with these strategies</h3>
              <span className="text-[#8F8F8F]">Thu Feb 09 2023</span>
            </div>
          </div>
        
        </div>
      </div>
    );
  };
  

export default News;
