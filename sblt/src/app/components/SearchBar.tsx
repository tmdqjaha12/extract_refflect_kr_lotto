"use client";

const SearchBar = () => {
  return (
    <div className="bg-white p-4 rounded shadow-md my-4">
      <h2 className="text-xl mb-2">검색</h2>
      <input type="text" placeholder="회차" className="border p-2 rounded mb-2 w-full" />
      <input type="text" placeholder="당첨 여부" className="border p-2 rounded mb-2 w-full" />
      <input type="text" placeholder="등수" className="border p-2 rounded mb-2 w-full" />
      <input type="text" placeholder="로또 번호" className="border p-2 rounded mb-2 w-full" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">검색</button>
    </div>
  );
};

export default SearchBar;
