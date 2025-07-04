import { useState, useEffect } from 'react';
/*@fix11:ここで抑えてほしいこととしては普通にhooksフォルダの中身に入れるやつは
宣言の手間を省いているということ。
タイマーを複数個所のページで活用する際下記のように作成しておけば
どのページからでもconst count = useTimer();の1行でタイマーの作成の宣言が可能になる。*/
export function useTimer() {
  const [count, setCount] = useState(0);

  //useEffect内で宣言した関数や変数はreturnで削除しなきゃいけないというルール的なものがある。
  useEffect(() => {
    //「timerId」を最初にページに遷移してきたタイミングに1度だけ宣言(useEffect内で)。
    const timerId = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timerId);//ページ移動時にuseEffect内で宣言した「timerId」を削除
  }, []);

  return {count,setCount};//@fix11:最初の「return count;」の状態で全く問題はないが
  //このようにすることで複数個の関数や値を活用できるようにすることが可能ということだけ知ってくれればと思う
}
