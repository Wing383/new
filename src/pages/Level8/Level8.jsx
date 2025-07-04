import { useNavigate } from 'react-router-dom'
import styles from './Level8.module.css'
import StyledButton from '../../components/StyledButton/StyledButton.jsx';


function Level8() {
  const navigate = useNavigate()
  const button1 = [
    { label: "レベル1へ", path: "/" },//@fix8:レベル1のページだけは一番最初にアクセスされるページなので「/」になる。
    { label: "レベル2へ", path: "/Level2" },
    { label: "レベル3へ", path: "/Level3" },
  ];
  const button2 = [
    { label: "レベル4へ", path: "/Level4" },
    { label: "レベル5へ", path: "/Level5" },
    { label: "レベル6へ", path: "/Level6" },
    { label: "レベル7へ", path: "/Level7" },
  ];
  return (
    <div className={styles.buttonContainer}>
      <StyledButton label="レベル9へ移動"
        onClick={() => navigate('/Level9')}
        variant="blueOutline"
      />
      <div className={styles.buttonContainer}>
      {button1.map((btn, index) => (
        <StyledButton
          key={index}
          label={btn.label}
          onClick={() => navigate(btn.path)}
          variant="brownOutline"
        />
      ))}
      </div>

      <div className={styles.buttonContainer}>
      {button2.map((btn, index) => (
        <StyledButton
          key={index}
          label={btn.label}
          onClick={() => navigate(btn.path)}
          variant="brownOutline"
        />
      ))}
      </div>
    </div>
  )
}

export default Level8
