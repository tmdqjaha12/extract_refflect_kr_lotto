"use client";

const LottoGenerator = () => {
  const generateLottoNumbers = () => {
    // 로또 번호 생성 로직 추가
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md my-4 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">로또 번호 생성기</h2>
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
