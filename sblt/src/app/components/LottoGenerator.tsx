const LottoGenerator = () => {
  const generateLottoNumbers = () => {
    // 로또 번호 생성 로직 추가
  };

  return (
    <div className="bg-white p-6 rounded shadow-md my-4">
      <h2 className="text-2xl mb-4">로또 번호 생성기</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={generateLottoNumbers}>
        번호 생성
      </button>
    </div>
  );
};

export default LottoGenerator;
