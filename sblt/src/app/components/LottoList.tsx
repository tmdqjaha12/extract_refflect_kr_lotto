"use client";

import { useEffect, useState } from "react";

const LottoList = () => {
  const [lottoNumbers, setLottoNumbers] = useState<number[][]>([]);

  useEffect(() => {
    // 번호 리스트 불러오는 로직 추가
  }, []);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {lottoNumbers.map((numbers, index) => (
        <li key={index} className="bg-white p-4 rounded shadow-md">
          <h3 className="text-xl mb-2">회차: {index + 1}</h3>
          <p>번호: {numbers.join(", ")}</p>
        </li>
      ))}
    </ul>
  );
};

export default LottoList;
