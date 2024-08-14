import { useCallback, useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

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

type TypeArgsLabelKey = "yeer" | "month" | "week" | "day";

interface TypeArgsLabel {
  label: string;
  argsKey: TypeArgsLabelKey;
}

interface AnalysisLottoNumberArgs {
  type: number;
  typeArgs?: number;
  id?: string;
}

const useLotto = () => {
  const [selectRound, setSelectRound] = useState<number[]>([]);

  const generateGuestId = () => {
    return uuidv4();
  };

  const getAnalysisLottoNumber = useCallback((variables: AnalysisLottoNumberArgs) => {
    fetch("/api/lotto/exec/getExtractLottoNumber", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: variables.type,
        typeArgs: variables?.typeArgs,
        id: variables?.id ?? generateGuestId(),
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json(); // JSON으로 응답을 변환
      })
      .then((data?: any) => {
        console.log("data: ", data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const getYearsArray = useCallback((startYear: number) => {
    const currentYear = new Date().getFullYear();
    const years = [];

    for (let year = startYear; year <= currentYear; year++) {
      years.push(year);
    }

    return years.reverse();
  }, []);

  const getNumbersArray = useCallback((upToNumber: number) => {
    const numbers = [];

    for (let i = 1; i <= upToNumber; i++) {
      numbers.push(i);
    }

    return numbers;
  }, []);

  const selectTypeArgs = useMemo(
    () => ({
      yeer: getYearsArray(2002),
      month: getNumbersArray(12),
      week: getNumbersArray(4),
      day: getNumbersArray(31),
    }),
    [getYearsArray, getNumbersArray]
  );

  const TYPE_ARGS_LABEL: Record<"2" | "3" | "4" | "5", TypeArgsLabel> = useMemo(
    () => ({
      "2": {
        label: "연도 선택",
        argsKey: "yeer",
      },
      "3": {
        label: "월 선택",
        argsKey: "month",
      },
      "4": {
        label: "주 선택",
        argsKey: "week",
      },
      "5": {
        label: "일 선택",
        argsKey: "day",
      },
    }),
    []
  );

  useEffect(() => {
    getPastLottoNumbers();
  }, [getPastLottoNumbers]);

  return { selectRound, selectTypeArgs, TYPE_ARGS_LABEL, getAnalysisLottoNumber };
};

export default useLotto;
