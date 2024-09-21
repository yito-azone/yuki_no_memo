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

const DatePikcer = () => {
  const [date, setDate] = useState(new Date());
  const [isJapaneseEra, setIsJapaneseEra] = useState(false);

  const toggleEra = () => {
    setIsJapaneseEra(!isJapaneseEra);
  };

  return (
    <div>
      <button onClick={toggleEra}>
        {isJapaneseEra ? '西暦に切り替え' : '和暦に切り替え'}
      </button>
      <DatePicker
        selected={date}
        onChange={(date: any) => setDate(date)}
        dateFormat={isJapaneseEra ? convertToJapaneseEra(date) : format(date, 'yyyy年MM月dd日', { locale: ja })}
        locale={ja}
      />
    </div>
  )
}

export default DatePikcer