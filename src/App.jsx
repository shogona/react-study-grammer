/* eslint react-hooks/exhaustive-deps: off*/
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0); //変数名、変数名を変えるための関数,初期値のnum=0
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true); //左がfalseの場合だけsetFaceShowFlagを動かす。
      } else {
        faceShowFlag && setFaceShowFlag(false); //左がtrueの場合だけ右が動く
      }
    }
  }, [num]); //配列で指定した変数が変わるときだけ中身が実行される。

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>😓( ＾∀＾)</p>}
    </>
  );
};

export default App;
