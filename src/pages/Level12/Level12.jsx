import { useNumberListStore } from '@/store/numberListStore';
import { useNavigate,useLocation } from 'react-router-dom';
import styles from './Level12.module.css';
import InputItem from '@/components/ui/InputItem/InputItem';
import { useAtom } from 'jotai'; // ← JotaiのuseAtomをインポート
import { valueAtom } from '@/atom/valueAtom';

function Level12() {
  const navigate = useNavigate();
  const {
    numbers,        // Zustand で管理されている入力リスト
    addNumber,
    updateNumber,
    deleteNumber
  } = useNumberListStore();
  const [value, setValue] = useAtom(valueAtom);

  return (
    <div className={styles.parent}>
      <p>レベル10で入力した数値</p>
      <p>{value}</p>
      <button onClick={addNumber} style={{ width: '200px' }}>＋ 入力欄を追加</button>
      <p>レベル14の画面に表示させたい数値群を入力</p>
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
      <button onClick={() => navigate('/Level13')}>level13</button>

      
    </div>
  );
}

export default Level12;
