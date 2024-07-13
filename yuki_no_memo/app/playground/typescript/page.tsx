'use client'

import React from 'react'
import PropsComponent from './components/PropsComponent';
import FCPropsComponent from './components/FCPropsComponent';


const page = () => {
  const message: string = 'あああ';
  console.log(message);
  // 全部同じ型
  const arrayTest1: string[] = ['あああ', 'いいい'];
  // arrayTest1.push(123);

  // いずれか（ユニオン型）
  const arrayTest2: (string | number)[] = ['あああ', 123];
  // arrayTest2.push(true);

  // 順番通り（タプル型）
  const arrayTest3: [string, number, boolean] = ['あああ', 123, true];

  // 関数に型をつける
  // 戻り値なし
  function funcVoid(str: string, int: number): void {
    console.log('戻り値なし');
  }
  // 戻り値なし(アロー関数)
  const funcArrow = (str: string, int: number): void => {
    console.log('戻り値なし')
  }
  // 戻り値あり
  function funcReturn(str: string, int: number): string {
    return str;
  }

  // 戻り値あり(アロー関数)
  const funcArrowReturn = (str: string, int: number): number => {
    return int;
  }

  funcVoid('あああ', 111);
  funcArrow('いいい', 222);
  funcReturn('ううう', 333);
  funcArrowReturn('えええ', 444);

  // 可変長パラメータ
  const funcParams = (...items: number[]): void => {
    for (const item of items) {
      console.log(item);
    }
  }

  funcParams(1, 2);

  const object: {
    name: string,
    age: number
  } = {
    name: '名前',
    age: 30
  }

  type MemberType = {
    name: string,
    age: number
  }

  const memberT: MemberType = {
    name: '加藤',
    age: 30
  }

  // 別名で作成後 & で組み合わせが可能
  type MemberHobby = {
    hobby: string
  }

  type MemberInfo = MemberType & MemberHobby

  const memberInfo: MemberInfo = {
    name: '加藤',
    age: 30,
    hobby: '釣り'
  }

  // interface
  interface MemberInterface {
    name: string,
    age: number
  }

  const memberI: MemberInterface = {
    name: '田中',
    age: 40
  }

  console.log(memberI.name);

  interface HobbyInterface {
    hobby: string
  }

  interface MemberInfoInterface extends MemberInterface, HobbyInterface { }

  const memberInfoI: MemberInfoInterface = {
    name: '加藤',
    age: 40,
    hobby: 'スキー'
  }

  // 配列内のオブジェクト
  type ObjectInArray = {
    id: number,
    name: string,
    age: number
  }[]

  const members: ObjectInArray = [
    {
      id: 1,
      name: '大谷',
      age: 40
    }, {
      id: 2,
      name: '金谷',
      age: 55
    }
  ]

  // 別パターン
  type ObjectInArray2 = {
    [key: string]: string | number
  }[]

  const members2: ObjectInArray2 = [
    {
      id: 1,
      name: '大谷',
      age: 40
    }, {
      id: 2,
      name: '金谷',
      age: 55
    }
  ]

  // readonly
  type MemberR = {
    readonly name: string,
    age: number
  }

  const memberR: MemberR = {
    name: '佐藤',
    age: 40
  }

  // memberR.name = '木内' // 書き換えしようとするとエラーとなる

  // as const
  const objectAC = {
    name: '伊東',
    age: 70
  } as const

  // objectAC.name = '加藤' // 書き換えしようとするとエラーとなる

  const arrayAC = ['あああ', 'いいい'] as const

  // arrayAC.push('ううう') // 書き換えしようとするとエラーとなる

  // enum(列挙型)
  enum SCHOOLEnum {
    '小学生',
    '中学生',
    '高校生',
    '大学生'
  }

  console.log(SCHOOLEnum[2]);

  const SIZE = {
    SMALL: '小',
    MEDIUM: '中',
    LARGE: '大'
  } as const

  type SizeType = keyof typeof SIZE

  const sizeCheck = (size: SizeType) => {
    console.log(size)
  }

  sizeCheck('SMALL')

  // valueの方をtypeにしたい場合
  type ValueOfSize = typeof SIZE[keyof typeof SIZE]

  // イベントオブジェクトの型指定
  const target = document.getElementById('username')
  target?.addEventListener('input', (e) => {
    if (e.target instanceof HTMLInputElement) {
      console.log(e.target.value)
    }
  })

  const target2 = document.getElementById('username')
  target2?.addEventListener('input', (e) => {
    console.log((e.target as HTMLInputElement).value)
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }


  return (
    <>
      <div>コンソールログ確認用ページ</div>
      <input type="text" onChange={handleChange} />
      <PropsComponent name='田中' age={24} />
      <FCPropsComponent name='伊東' age={24} />
    </>
  )
}

export default page