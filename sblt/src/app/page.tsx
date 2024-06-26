"use client";

export default function Home() {
  let timerId: NodeJS.Timeout | null = null;
  async function throttleExecution(callback: any, delay: number) {
    if (!timerId) {
      timerId = setTimeout(() => {
        try {
          callback();
        } catch (error) {
          console.log("#(delayExecution: ", error);
        }
        timerId = null;
      }, delay);
    }
  }

  const getLatestKrLotto = () => {
    fetch("/api/getLatestKrLotto?drawNo=1120")
      .then((res) => {})
      .catch((err) => {});
  };

  const updateKrLotto = () => {
    fetch("/api/updateKrLotto")
      .then((res) => {})
      .catch((err) => {});
  };

  const reffleKrLotto = () => {
    /**
     * all
     * year
     * month
     * day
     * week
     * month and week
     *
     * epochs
     */
    fetch("/api/reffleKrLotto")
      .then((res) => {})
      .catch((err) => {});
  };

  return (
    <main>
      <ul>
        <li>
          <button onClick={() => throttleExecution(getLatestKrLotto, 1000)}>동행복권 최신 당첨번호 조회</button>
        </li>
        <li>
          <button onClick={() => throttleExecution(updateKrLotto, 1000)}>동행복권 최신 데이터 업데이트</button>
        </li>
      </ul>
    </main>
  );
}
