"use client";

import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface PastLottoNumber {
  bonus: number;
  date: string;
  draw_no: number;
  num1: string;
  num2: string;
  num3: string;
  num4: string;
  num5: string;
  num6: string;
}
const TYPE_ARGS_LABEL: Record<"2" | "3" | "4" | "5", string> = {
  "2": "연도 선택",
  "3": "월 선택",
  "4": "주 선택",
  "5": "일 선택",
};

const SearchBar = () => {
  const { register, handleSubmit, setValue, watch } = useForm({
    mode: "all",
    criteriaMode: "firstError",
    shouldFocusError: true,
  });
  const [selectRound, setSelectRound] = useState<number[]>([]);
  const [selectTypeArgs, setSelectTypeArgs] = useState();

  const getPastLottoNumbers = useCallback(() => {
    fetch("/api/lotto/exec/getPastLottoNumbers")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json(); // JSON으로 응답을 변환
      })
      .then((data?: PastLottoNumber[]) => {
        if (!data) return;
        const drawNumbersDescending = data.map((item) => item.draw_no).sort((a, b) => b - a);
        drawNumbersDescending.unshift(drawNumbersDescending[0] + 1);
        setSelectRound(drawNumbersDescending);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    getPastLottoNumbers();
  }, [getPastLottoNumbers]); // isFetched와 getPastLottoNumbers를 의존성 배열에 추가

  useEffect(() => {
    const type = watch("type");
    // 연2002~now, 월1~12, 주1~5, 일,1~31
  }, [watch("type")]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md my-4">
      <h2 className="text-xl mb-2">생성된 로또 번호 검색</h2>
      <small className="text-gray-600 mb-4 block">*검색조건을 선택하지 않으면 전체 조건으로 검색합니다.</small>

      <select className="border p-2 rounded mb-2 w-full" {...register("round")}>
        <option value="">회차 선택</option>
        {selectRound.map((number, index) => (
          <option key={`select-round-${index}`} value={number}>
            {number}회차
          </option>
        ))}
      </select>

      <select className="border p-2 rounded mb-2 w-full" {...register("win")}>
        <option value="">당첨 여부</option>
        <option value="true">당첨</option>
        <option value="false">낙첨</option>
      </select>

      <select className="border p-2 rounded mb-2 w-full" {...register("rank")} disabled={watch("win") == "false"}>
        <option value="">등수</option>
        <option value="1">1등</option>
        <option value="2">2등</option>
        <option value="3">3등</option>
        <option value="4">4등</option>
        <option value="5">5등</option>
      </select>

      <select className="border p-2 rounded mb-2 w-full" {...register("type")}>
        <option value="">로또생성타입</option>
        <option value="1">모든 로또 번호</option>
        <option value="2">N년의 모든 로또 번호</option>
        <option value="3">N월의 모든 로또 번호</option>
        <option value="4">N주의 모든 로또 번호</option>
        <option value="5">N일의 모든 로또 번호</option>
      </select>

      {watch("type") && watch("type") != "1" ? (
        <select className="border p-2 rounded mb-2 w-full" {...register("type_args")}>
          <option value="">{TYPE_ARGS_LABEL[watch("type") as "2" | "3" | "4" | "5"]}</option>
          <option value="1">모든 로또 번호</option>
          <option value="2">N년의 모든 로또 번호</option>
          <option value="3">N월의 모든 로또 번호</option>
          <option value="4">N주의 모든 로또 번호</option>
          <option value="5">N일의 모든 로또 번호</option>
        </select>
      ) : (
        <></>
      )}

      <button className="bg-blue-500 text-white px-4 py-2 rounded">검색</button>
    </div>
  );
};

export default SearchBar;
