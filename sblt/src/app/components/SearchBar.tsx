"use client";

import { useForm } from "react-hook-form";
import useLotto from "../hooks/useLotto";

const SearchBar = () => {
  const { selectRound, selectTypeArgs, TYPE_ARGS_LABEL } = useLotto();

  const { register, handleSubmit, setValue, watch } = useForm({
    mode: "all",
    criteriaMode: "firstError",
    shouldFocusError: true,
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md my-4 max-w-md mx-auto">
      <h2 className="text-xl mb-2">생성된 로또 번호 검색</h2>
      <small className="text-gray-600 mb-4 block">*검색조건을 선택하지 않으면 전체 조건으로 검색합니다.</small>

      <select className="block w-full border border-gray-300 rounded-lg p-2 mb-2" {...register("round")}>
        <option value="">회차 선택</option>
        {selectRound.map((number, index) => (
          <option key={`select-round-${index}`} value={number}>
            {number}회차
          </option>
        ))}
      </select>

      <select className="block w-full border border-gray-300 rounded-lg p-2 mb-2" {...register("win")}>
        <option value="">당첨 여부</option>
        <option value="true">당첨</option>
        <option value="false">낙첨</option>
      </select>

      <select
        className="block w-full border border-gray-300 rounded-lg p-2 mb-2"
        {...register("rank")}
        disabled={watch("win") == "false"}
      >
        <option value="">등수</option>
        <option value="1">1등</option>
        <option value="2">2등</option>
        <option value="3">3등</option>
        <option value="4">4등</option>
        <option value="5">5등</option>
      </select>

      <select className="block w-full border border-gray-300 rounded-lg p-2 mb-2" {...register("type")}>
        <option value="1">로또생성타입</option>
        <option value="2">N년의 모든 로또 번호</option>
        <option value="3">N월의 모든 로또 번호</option>
        <option value="4">N주의 모든 로또 번호</option>
        <option value="5">N일의 모든 로또 번호</option>
      </select>

      {watch("type") && watch("type") != "1" ? (
        <select className="block w-full border border-gray-300 rounded-lg p-2 mb-2" {...register("type_args")}>
          <option value="">{TYPE_ARGS_LABEL[watch("type") as "2" | "3" | "4" | "5"].label}</option>
          {selectTypeArgs[TYPE_ARGS_LABEL[watch("type") as "2" | "3" | "4" | "5"].argsKey].map((number, index) => (
            <option key={`select-type-args-${index}`} value={number}>
              {number}
            </option>
          ))}
        </select>
      ) : (
        <></>
      )}

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-semibold rounded shadow transition duration-300 w-full">
        검색
      </button>
    </div>
  );
};

export default SearchBar;
