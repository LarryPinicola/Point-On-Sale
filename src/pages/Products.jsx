import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FiGrid } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";
import ProductsPics from "../components/ProductsPics";
import { BsPencil } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Products = () => {
  const [table, setTable] = useState(true);

  const productPics = [
    {
      id: 1,
      url: "https://i.pinimg.com/564x/77/1d/bd/771dbdb52f7b3b035711b9fd392c5269.jpg",
      item: "lemonade",
      value: "၁၀၀၀",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/564x/eb/58/09/eb58095d9d4ffd7c41f39ce50951634d.jpg",
      item: "lemonade",
      value: "၁၀၀၀",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/564x/51/52/99/5152995016e4653beb6b6b6a9ddb0cc1.jpg",
      item: "lemonade",
      value: "၁၀၀၀",
    },
    {
      id: 4,
      url: "https://i.pinimg.com/564x/2c/0d/70/2c0d70ff3d9c69daa11713236ba1bd65.jpg",
      item: "lemonade",
      value: "၁၀၀၀",
    },
    {
      id: 5,
      url: "https://i.pinimg.com/564x/55/b4/87/55b487609107bacbe3693ec6dc5ff36d.jpg",
      item: "lemonade",
      value: "၁၀၀၀",
    },
    {
      id: 6,
      url: "https://i.pinimg.com/564x/89/4f/15/894f156accbcbff8a5a406a1ba504bb8.jpg",
      item: "lemonade",
      value: "၁၀၀၀",
    },
    {
      id: 7,
      url: "https://i.pinimg.com/564x/89/4f/15/894f156accbcbff8a5a406a1ba504bb8.jpg",
      item: "lemonade",
      value: "၁၀၀၀",
    },
    {
      id: 8,
      url: "https://i.pinimg.com/564x/89/4f/15/894f156accbcbff8a5a406a1ba504bb8.jpg",
      item: "lemonade",
      value: "၁၀၀၀",
    },
    {
      id: 9,
      url: "https://i.pinimg.com/564x/89/4f/15/894f156accbcbff8a5a406a1ba504bb8.jpg",
      item: "lemonade",
      value: "၁၀၀၀",
    },
    {
      id: 10,
      url: "https://i.pinimg.com/564x/89/4f/15/894f156accbcbff8a5a406a1ba504bb8.jpg",
      item: "lemonade",
      value: "၁၀၀၀",
    },
  ];

  const productLists = [
    {
      no: 1,
      name: "MacBook Pro",
      brand: "Apple",
      unit: "$",
      price: 10000,
      total: 100,
    },
    {
      no: 1,
      name: "MacBook Pro",
      brand: "Apple",
      unit: "$",
      price: 10000,
      total: 100,
    },
    {
      no: 1,
      name: "MacBook Pro",
      brand: "Apple",
      unit: "$",
      price: 10000,
      total: 100,
    },
    {
      no: 1,
      name: "MacBook Pro",
      brand: "Apple",
      unit: "$",
      price: 10000,
      total: 100,
    },
    {
      no: 1,
      name: "MacBook Pro",
      brand: "Apple",
      unit: "$",
      price: 10000,
      total: 100,
    },
  ];

  const rows = productLists.map((product, index) => { 
    return (
      <tr className="px-2" key={index}>
        <td className="py-4 ps-8 text-sm font-medium border-t">{product.no}</td>
        <td className="py-4 ps-8 text-sm font-medium border-t">
          {product.name}
        </td>
        <td className="py-4 ps-8 text-sm font-medium border-t">
          {product.brand}
        </td>
        <td className="py-4 ps-8 text-sm font-medium border-t">
          {product.unit}
        </td>
        <td className="py-4 ps-8 text-sm font-medium border-t">
          {product.price}
        </td>
        <td className="py-4 ps-8 text-sm font-medium border-t">
          {product.total}
        </td>
        <td className="py-4 ps-8 text-sm font-medium border-t ">
          <div className="flex gap-3 items-center">
            <div className="bg-gray-600 rounded-full p-1">
              <AiOutlinePlus className="text-sm" />
            </div>
            <div className="bg-gray-600 rounded-full p-1">
              <BsPencil className="text-sm" />
            </div>
            <div className="bg-gray-600 rounded-full p-1">
              <FiArrowRight className="text-sm" />
            </div>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <div className="w-full flex">
      {/* sidebar */}
      <div className="border-r bg-[#171717] w-[15%] h-screen flex justify-center items-center">
        <h1 className="text-xl tracking-widest">sidebar</h1>
      </div>
      {/* products page main parent*/}
      <div className="bg-[#202124] w-full">
        {/* adopt parent */}
        <div className="mx-7">
          {/* title and btns */}
          <div className="flex justify-between items-center  mt-5">
            {/* title */}
            <div className="text-white mb-5">
              <h1 className="text-2xl tracking-wide pb-1 font-semibold">
                Products
              </h1>
              <p className="text-gray-400 ">Inventory / Products</p>
            </div>
            {/* btns */}
            <div className="flex items-center gap-5">
              <button className="text-blue-400 rounded-lg border border-blue-400 px-2 py-1">
                Go to Shop
              </button>
              <button className="flex items-center px-2 py-1 bg-blue-400 rounded-lg text-black">
                <AiOutlinePlus />
                Add Product
              </button>
            </div>
          </div>

          {/* search n filters n icons */}
          <h1 className="text-3xl font-semibold ">Products Overview</h1>
          {/*  */}
          <div className="mt-3 flex justify-between">
            {/* search box */}
            <div className="">
              <input
                type="search"
                placeholder="Search"
                className="rounded-lg py-2 bg-[#202124] px-1 outline-none border border-gray-400 text-white"
              />
            </div>
            {/* filters n icons */}
            <div className="flex items-center gap-5">
              <div className="">
                <label htmlFor="sort" className="text-gray-400">
                  Sort :
                </label>
                <select name="" id="sort" className="bg-[#202124] outline-none">
                  <option value="default">Last</option>
                  <option value="name">Name</option>
                  <option value="date">date</option>
                </select>
              </div>
              <div className="">
                <label htmlFor="filter" className="text-gray-400">
                  Filter :
                </label>
                <select
                  name=""
                  id="filter"
                  className="bg-[#202124] outline-none"
                >
                  <option value="default">All Files</option>
                  <option value="size">Size</option>
                </select>
              </div>
              {/* icons */}
              <div className="">
                <div className="flex items-center gap-2 border rounded p-1 text-gray-400 border-gray-600">
                  <div
                    className="cursor-pointer"
                    onClick={() => setTable(true)}
                  >
                    <FiGrid className="" />
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => setTable(false)}
                  >
                    <TfiMenuAlt className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* pics list and table list */}
          {table ? (
            <div className="grid grid-cols-5 gap-5 justify-center mt-5 w-[69rem] mx-auto">
              {productPics.map((product) => {
                return <ProductsPics key={product.id} pd={product} />;
              })}
            </div>
          ) : (
            <div className="w-[69rem] mt-5 mx-auto">
              <table className="border w-full border-gray-400">
                <thead className="">
                  <tr>
                    <th className="py-3 px-2 tracking-wide">NO</th>
                    <th className="py-3 px-2 tracking-wide">NAME</th>
                    <th className="py-3 px-2 tracking-wide">BRAND</th>
                    <th className="py-3 px-2 tracking-wide">UNIT</th>
                    <th className="py-3 px-2 tracking-wide">SALE PRICE</th>
                    <th className="py-3 px-2 tracking-wide">TOTAL STOCK</th>
                  </tr>
                </thead>
                <tbody className="">{rows}</tbody>
              </table>
            </div>
          )}
          {/* pagination ui */}
          <div className="flex gap-5 items-center border w-36 border-gray-600 mt-5 ml-[85%]   ">
            <IoIosArrowBack />
            <p className="">1</p>
            <p className="">2</p>
            <p className="">3</p>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;