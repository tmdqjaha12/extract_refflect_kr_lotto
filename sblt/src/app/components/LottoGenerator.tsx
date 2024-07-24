"use client";

import { useForm } from "react-hook-form";
import useLotto from "../hooks/useLotto";

const LottoGenerator = () => {
  const { selectRound, selectTypeArgs, TYPE_ARGS_LABEL } = useLotto();

  const { register, handleSubmit, setValue, watch } = useForm({
    mode: "all",
    criteriaMode: "firstError",
    shouldFocusError: true,
  });

  const generateLottoNumbers = () => {
    // 로또 번호 생성 로직 추가
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md my-4 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">로또 번호 생성기</h2>

      {/* <!-- 로또 생성 타입 선택 --> */}
      <div className="mb-4">
        <label htmlFor="lottoType" className="block text-gray-700 text-lg font-medium mb-2 text-center">
          생성 타입 선택
        </label>
        <select
          id="lottoType"
          className="block w-full border border-gray-300 rounded-lg p-2 mb-2"
          {...register("type")}
        >
          <option value="1">모든 로또 번호</option>
          <option value="2">N년의 모든 로또 번호</option>
          <option value="3">N월의 모든 로또 번호</option>
          <option value="4">N주의 모든 로또 번호</option>
          <option value="5">N일의 모든 로또 번호</option>
          {/* <!-- 다른 로또 타입 추가 가능 --> */}
        </select>

        {watch("type") && watch("type") != "1" ? (
          <select className="block w-full border border-gray-300 rounded-lg p-2 mb-2l" {...register("type_args")}>
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
      </div>

      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow transition duration-300 w-full"
        onClick={generateLottoNumbers}
      >
        번호 생성
      </button>

      <div id="lottoNumbers" className="mt-4 text-gray-800 text-lg font-mono text-center">
        생성된 번호:
        <div className="flex justify-center mt-2 space-x-2">
          <span className="rounded-full bg-yellow-500 text-white w-8 h-8 flex items-center justify-center">12</span>
          <span className="rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center">23</span>
          <span className="rounded-full bg-red-500 text-white w-8 h-8 flex items-center justify-center">34</span>
          <span className="rounded-full bg-gray-500 text-white w-8 h-8 flex items-center justify-center">45</span>
          <span className="rounded-full bg-red-500 text-white w-8 h-8 flex items-center justify-center">21</span>
          <span className="rounded-full bg-yellow-500 text-white w-8 h-8 flex items-center justify-center">3</span>
          <span className="flex items-center justify-center mx-2 text-gray-800 font-bold">+</span>
          <span className="rounded-full bg-green-500 text-white w-8 h-8 flex items-center justify-center">7</span>
        </div>
      </div>
    </div>
  );
};

export default LottoGenerator;
