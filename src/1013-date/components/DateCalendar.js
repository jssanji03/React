import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// 改為台灣繁體中文的日期樣式
// 參考：https://github.com/Hacker0x01/react-datepicker/#localization
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import { zhTW } from 'date-fns/esm/locale'
registerLocale('zh-TW', zhTW)

function DateCalendar(props) {
  const [Birth, setBirth] = useState(new Date())
  const [age, setAge] = useState(0)
  // const today = new Date().getFullYear()
  // const birth = Birth.getFullYear()
  // console.log('today', today)
  // console.log('birth', Birth.getFullYear())

  // birthday(必需是 Date 物件)
  // `~~`是轉成整數的運算子，與parseInt相似
  // 日期作加減乘除會自動轉為微秒值
  const calAge = (birthday) => ~~((Date.now() - birthday) / 31557600000)

  // 選完日期，更動年紀
  // componentDidUpdate
  useEffect(() => {
    // console.log(typeof Birth)
    setAge(calAge(Birth))
  }, [Birth])
  //onChange 如果有更動就設定到Birth裡面去
  return (
    <>
      <h3>請選擇出生年月日：</h3>
      <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={Birth}
        onChange={(date) => setBirth(date)}
        showYearDropdown
        locale="zh-TW"
      />

      <h2>{age < 18 ? '未滿18喔' : '18'}</h2>
    </>
  )
}

export default DateCalendar
