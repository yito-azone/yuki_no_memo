// ジェネリクス
const funcGen = <T>(arg: T): T => {
  return arg;
};

funcGen<number>(123);
funcGen<string>("あああ");

// オブジェクトに適応
type ObjectType<T, U> = {
  name: string;
  age: number;
  type: T;
  action: U;
};

const memberA: ObjectType<string, number> = {
  name: "田中",
  age: 10,
  type: "硬い",
  action: 100,
};

const memberB: ObjectType<number, string> = {
  name: "東出",
  age: 60,
  type: 900,
  action: "走る",
};

// 型制約
type ObjectE<T extends string | number> = {
  size: T;
};

const objectE: ObjectE<string> = {
  size: "small",
};

const objectE2: ObjectE<number> = {
  size: 100,
};

// デフォルト
type ObjectD<T = string> = {
  size: T;
};

const objectD: ObjectD = {
  size: "small",
};

// ジェネリクスとtype(interface)の組み合わせ
type ObjectG = {
  id: number;
  name: string;
};

const funcObjectG = <T extends ObjectG>(arg: T): void => {
  console.log(arg);
};

funcObjectG<ObjectG>({ id: 1, name: "大谷" });

// ユーティリティ
type Member = {
  id: number;
  name: string;
  age: number;
  hobby: string;
};

type PickMember = Pick<Member, "name" | "age">;

type PartialMember = Partial<Member>;

// DOM関連
// 型アサーション
const input = document.getElementById("username") as HTMLInputElement;
input.placeholder = "インプット";

// ジェネリクス
const input2 = <HTMLInputElement>document.getElementById("username");
input.placeholder = "インプット";

// イベントオブジェクトの型指定
const target = document.getElementById("username");
target?.addEventListener("input", (e) => {
  if (e.target instanceof HTMLInputElement) {
    console.log(e.target.value);
  }
});

const target2 = document.getElementById("username");
target2?.addEventListener("input", (e) => {
  console.log((e.target as HTMLInputElement).value);
});
