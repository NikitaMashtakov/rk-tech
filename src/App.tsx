import { useEffect, useState } from 'react';
import Button from './components/Button/Button';
import { getCat } from './api/httpClient';
import Image from './components/Image/Image';
import Loader from './components/Loader/Loader';
import CheckboxInput from './components/CheckboxInput/CheckboxInput';
import styles from './App.module.css';

let intervalId: number | undefined;

function App() {
  const [catUrl, setCatUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const [timerEnabled, setTimerEnabled] = useState<boolean>(false);

  useEffect(() => {
    getNewCat();
    return clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (timerEnabled) {
      intervalId = setInterval(() => {
        getNewCat();
      }, 5000);
    } else {
      clearInterval(intervalId);
    }
  }, [timerEnabled]);

  const onCheckEnabled = () => {
    setIsEnabled((prev) => !prev);
  };
  const onCheckTimer = () => {
    setTimerEnabled((prev) => !prev);
  };

  function getNewCat() {
    setIsLoading(true);
    getCat()
      .then((newCat) => setCatUrl(newCat))
      .finally(() => setIsLoading(false));
  }
  const onButtonClick = () => {
    getNewCat();
  };
  return (
    <div className={styles.container}>
      <CheckboxInput onChange={onCheckEnabled} checked={isEnabled} label={'Enabled'} />

      <CheckboxInput
        onChange={onCheckTimer}
        checked={timerEnabled}
        label={'Auto-refresh every 5 seconds'}
      />
      <Button onClick={onButtonClick} disabled={!isEnabled} label={'Get cat'} />

      {isLoading ? <Loader /> : null}
      {catUrl && !isLoading ? <Image src={catUrl} /> : null}
    </div>
  );
}

export default App;
