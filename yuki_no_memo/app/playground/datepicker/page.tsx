'use client'

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ja } from 'date-fns/locale';
import { format } from 'date-fns';

const convertToJapaneseEra = (date: any) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // 明治 (1868-1912)
  if (year >= 1868 && year <= 1912) {
    return `明治${year - 1867}年${month}月${day}日`;
  }
  // 大正 (1912-1926)
  if (year >= 1912 && year <= 1926) {
    return `大正${year - 1911}年${month}月${day}日`;
  }
  // 昭和 (1926-1989)
  if (year >= 1926 && year <= 1989) {
    return `昭和${year - 1925}年${month}月${day}日`;
  }
  // 平成 (1989-2019)
  if (year >= 1989 && year <= 2019) {
    return `平成${year - 1988}年${month}月${day}日`;
  }
  // 令和 (2019-)
  if (year >= 2019) {
    return `令和${year - 2018}年${month}月${day}日`;
  }
  return '';
};

const formatJapaneseDate = (date: Date | null) => {
  const era = getJapaneseEra(date);
  const year = date!.getFullYear() - era!.startYear + 1;
  const month = date!.getMonth() + 1;
  const day = date!.getDate();
  return `${era!.name} ${year}年${month}月${day}日`;
};

const getJapaneseEra = (date: Date | null) => {
  const eras = [
    { name: '令和', startYear: 2019 },
    { name: '平成', startYear: 1989 },
    { name: '昭和', startYear: 1926 },
    { name: '大正', startYear: 1912 },
    { name: '明治', startYear: 1868 },
  ];

  return eras.find((era) => date!.getFullYear() >= era.startYear);
};

const formatDate = (date: Date, formatString: string, isJapanese: any) => {
  if (isJapanese) {
    console.log(date);
    return formatJapaneseDate(date);
  } else {
    console.log(date);
    console.log("2");
    return format(date, formatString, { locale: ja });
  }
};

const DatePikcer = () => {
  const [date, setDate] = useState(new Date());
  const [isJapaneseEra, setIsJapaneseEra] = useState(false);

  const toggleEra = () => {
    setIsJapaneseEra(!isJapaneseEra);
  };

  const formatDate = (date: Date, formatString: string, isJapanese: any) => {
    if (isJapanese) {
      return formatJapaneseDate(date);
    } else {
      return format(date, formatString, { locale: ja });
    }
  }


  return (
    <div>
      <DatePicker
        selected={date}
        onChange={(date: any) => setDate(date)}
        dateFormat={isJapaneseEra ? convertToJapaneseEra(date) : format(date, 'yyyy年MM月dd日', { locale: ja })}
        renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
          <div>
            <button onClick={decreaseMonth}>{"<"}</button>
            <button onClick={toggleEra}>
              {isJapaneseEra ? '和暦表示' : '西暦表示'}
            </button>
            <span>{formatDate(date, 'yyyy年MM月', isJapaneseEra)}</span>
            <button onClick={increaseMonth}>{">"}</button>
          </div>
        )}
        locale={ja}
      />
    </div>
  )
}

export default DatePikcer