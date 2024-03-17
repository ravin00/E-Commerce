import React, { useState } from "react";
import styles from "../../styles/Styles";
import { Link } from "react-router-dom";
import { productData } from "../../static/data";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts = productData.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchData(filteredProducts);
  };
  return (
    <div className={`${styles.section} flex justify-between items-center`}>
      <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
        <Link to="/">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt=""
          />
        </Link>
      </div>
      {/*search box*/}
      <div className="w-[50]% relative">
        <input
          type="text"
          placeholder="Search Product...."
          value={searchTerm}
          onChange={handleSearchChange}
          className="h-[40px] w-full px-24 border-[#3957db] border-[2px] rounded-md"
        />
        <AiOutlineSearch
          size={30}
          className="absolute right-2 top-1.5 cursor-pointer"
        />
        {searchData && searchData.length !== 0 ? (
          <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
            {searchData &&
              searchData.map((i, index) => {
                const d = i.name;

                const product_name = d.replace(/\s+/g, "-");
                return (
                  <Link to={`/product/${product_name}`}>
                    <div className="w-full flex items-start-py-3">
                      <img
                        src={i.image_Url[0].url}
                        alr=""
                        className="w-[40px] h-[40px] mr-[10px]"
                      />
                      3<h1>{i.name}</h1>
                    </div>
                  </Link>
                );
              })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
