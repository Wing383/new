import { useNumberListStore } from '../../atom/numberListStore';
import styles from './Level12.module.css';
import InputItem from '../../components/ui/InputItem/InputItem';
import { useAtom } from 'jotai'; // ← JotaiのuseAtomをインポート
import { valueAtom } from '../../atom/valueAtom';

function LevelInput() {
  const {
    numbers,        // Zustand で管理されている入力リスト
    addNumber,
    updateNumber,
    deleteNumber
  } = useNumberListStore();
  const [value, setValue] = useAtom(valueAtom);

  return (
    <div>
      <p>レベル10で入力した数値</p>
      <p>{value}</p>
      <div className={styles.scrollContainer}>
        {numbers.map((input) => (
          <InputItem
            key={input.id}
            id={input.id}
            value={input.value}
            onChange={updateNumber}
            onDelete={deleteNumber} />
        ))}
      </div>

      <button onClick={addNumber}>＋ 入力欄を追加</button>
    </div>
  );
}

export default LevelInput;
