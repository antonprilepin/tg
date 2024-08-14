// import React, { useState } from 'react';
// import './Country.css';

// const CountryInput = () => {
//   const [country, setCountry] = useState('');

//   const handleCountryChange = (event) => {
//     // Обработка изменения страны
//     setCountry(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Ваш код для обработки отправки формы
//     console.log('Выбранная страна:', country);
//   };

//   return (
//     <form className="country-input-container" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         id="country"
//         value={country}
//         onChange={handleCountryChange}
//         className="country-input"
//         placeholder="Введите страну"
//       />
//     </form>
//   );
// };

// export default CountryInput;


import React, { useState } from 'react';
import './Country.css';

const CountryInput = () => {
  const [country, setCountry] = useState('');

  const handleCountryChange = (event) => {
    // Обработка изменения страны
    setCountry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ваш код для обработки отправки формы
    console.log('Выбранная страна:', country);
  };

  return (
    <form className="country-input-container" onSubmit={handleSubmit}>
      <select
        id="country"
        value={country}
        onChange={handleCountryChange}
        className="country-input"
      >
        <option value="Russia">Россия</option>
        <option value="USA">США</option>
        <option value="Germany">Германия</option>
        <option value="Afghanistan">Афганистан</option>
        <option value="Albania">Албания</option>
        <option value="Algeria">Алжир</option>
        <option value="Andorra">Андорра</option>
        <option value="Angola">Ангола</option>
        <option value="Antigua and Barbuda">Антигуа и Барбуда</option>
        <option value="Argentina">Аргентина</option>
        <option value="Armenia">Армения</option>
        <option value="Australia">Австралия</option>
        <option value="Austria">Австрия</option>
        <option value="Azerbaijan">Азербайджан</option>
        <option value="Bahamas">Багамы</option>
        <option value="Bahrain">Бахрейн</option>
        <option value="Bangladesh">Бангладеш</option>
        <option value="Barbados">Барбадос</option>
        <option value="Belarus">Беларусь</option>
        <option value="Belgium">Бельгия</option>
        <option value="Belize">Белиз</option>
        <option value="Benin">Бенин</option>
        <option value="Bhutan">Бутан</option>
        <option value="Bolivia">Боливия</option>
        <option value="Bosnia and Herzegovina">Босния и Герцеговина</option>
        <option value="Botswana">Ботсвана</option>
        <option value="Brazil">Бразилия</option>
        <option value="Brunei">Бруней</option>
        <option value="Bulgaria">Болгария</option>
        <option value="Burkina Faso">Буркина-Фасо</option>
        <option value="Burundi">Бурунди</option>
        <option value="Cabo Verde">Кабо-Верде</option>
        <option value="Cambodia">Камбоджа</option>
        <option value="Cameroon">Камерун</option>
        <option value="Canada">Канада</option>
        <option value="Chad">Чад</option>
        <option value="Chile">Чили</option>
        <option value="China">Китай</option>
        <option value="Colombia">Колумбия</option>
        <option value="Comoros">Коморы</option>
        <option value="Congo">Конго</option>
        <option value="Costa Rica">Коста-Рика</option>
        <option value="Croatia">Хорватия</option>
        <option value="Cuba">Куба</option>
        <option value="Cyprus">Кипр</option>
        <option value="Czech Republic">Чехия</option>
        <option value="Denmark">Дания</option>
        <option value="Djibouti">Джибути</option>
        <option value="Dominica">Доминика</option>
        <option value="Zambia">Замбия</option>
        <option value="Zimbabwe">Зимбабве</option>
        <option value="Iceland">Исландия</option>
        <option value="India">Индия</option>
        <option value="Indonesia">Индонезия</option>
        <option value="Iraq">Ирак</option>
        <option value="Ireland">Ирландия</option>
        <option value="Israel">Израиль</option>
        <option value="Italy">Италия</option>
        <option value="Jamaica">Ямайка</option>
        <option value="Japan">Япония</option>
        <option value="Jordan">Иордания</option>
        <option value="Kazakhstan">Казахстан</option>
        <option value="Kenya">Кения</option>
        <option value="Kiribati">Кирибати</option>
        <option value="Kuwait">Кувейт</option>
        <option value="Kyrgyzstan">Киргизия</option>
        <option value="Laos">Лаос</option>
        <option value="Latvia">Латвия</option>
        <option value="Lebanon">Ливан</option>
        <option value="Lesotho">Лесото</option>
        <option value="Liberia">Либерия</option>
        <option value="Libya">Ливия</option>
        <option value="Liechtenstein">Лихтенштейн</option>
        <option value="Lithuania">Литва</option>
        <option value="Luxembourg">Люксембург</option>
        <option value="Madagascar">Мадагаскар</option>
        <option value="Malawi">Малави</option>
        <option value="Malaysia">Малайзия</option>
        <option value="Maldives">Мальдивы</option>
        <option value="Mali">Мали</option>
        <option value="Malta">Мальта</option>
        <option value="Marshall Islands">Маршалловы Острова</option>
        <option value="Mauritania">Мавритания</option>
        <option value="Mauritius">Маврикий</option>
        <option value="Mexico">Мексика</option>
        <option value="Micronesia">Микронезия</option>
        <option value="Moldova">Молдова</option>
        <option value="Monaco">Монако</option>
        <option value="Mongolia">Монголия</option>
        <option value="Montenegro">Черногория</option>
        <option value="Morocco">Марокко</option>
        <option value="Mozambique">Мозамбик</option>
        <option value="Myanmar">Мьянма</option>
        <option value="Namibia">Намибия</option>
        <option value="Nauru">Науру</option>
        <option value="Nepal">Непал</option>
        <option value="Netherlands">Нидерланды</option>
        <option value="New Zealand">Новая Зеландия</option>
        <option value="Nicaragua">Никарагуа</option>
        <option value="Niger">Нигер</option>
        <option value="Nigeria">Нигерия</option>
        <option value="North Korea">Северная Корея</option>
        <option value="Norway">Норвегия</option>
        <option value="Oman">Оман</option>
        <option value="Pakistan">Пакистан</option>
        <option value="Palau">Палау</option>
        <option value="Panama">Панама</option>
        <option value="Paraguay">Парагвай</option>
        <option value="Peru">Перу</option>
        <option value="Philippines">Филиппины</option>
        <option value="Poland">Польша</option>
        <option value="Portugal">Португалия</option>
        <option value="Qatar">Катар</option>
        <option value="Romania">Румыния</option>
        <option value="Rwanda">Руанда</option>
        <option value="Samoa">Самоа</option>
        <option value="San Marino">Сан-Марино</option>
        <option value="Sao Tome and Principe">Сан-Томе и Принсипи</option>
        <option value="Saudi Arabia">Саудовская Аравия</option>
        <option value="Senegal">Сенегал</option>
        <option value="Serbia">Сербия</option>
        <option value="Seychelles">Сейшельские Острова</option>
        <option value="Sierra Leone">Сьерра-Леоне</option>
        <option value="Singapore">Сингапур</option>
        <option value="Slovakia">Словакия</option>
        <option value="Slovenia">Словения</option>
        <option value="Solomon Islands">Соломоновы Острова</option>
        <option value="Somalia">Сомали</option>
        <option value="South Africa">Южная Африка</option>
        <option value="South Korea">Южная Корея</option>
        <option value="South Sudan">Южный Судан</option>
        <option value="Spain">Испания</option>
        <option value="Sri Lanka">Шри-Ланка</option>
        <option value="Sudan">Судан</option>
        <option value="Suriname">Суринам</option>
        <option value="Swaziland">Свазиленд</option>
        <option value="Sweden">Швеция</option>
        <option value="Switzerland">Швейцария</option>
        <option value="Syria">Сирия</option>
        <option value="Taiwan">Тайвань</option>
        <option value="Tajikistan">Таджикистан</option>
        <option value="Tanzania">Танзания</option>
        <option value="Thailand">Таиланд</option>
        <option value="Timor-Leste">Восточный Тимор</option>
        <option value="Togo">Того</option>
        <option value="Tonga">Тонга</option>
        <option value="Trinidad and Tobago">Тринидад и Тобаго</option>
        <option value="Tunisia">Тунис</option>
        <option value="Turkey">Турция</option>
        <option value="Turkmenistan">Туркменистан</option>
        <option value="Tuvalu">Тувалу</option>
        <option value="Uganda">Уганда</option>
        <option value="Ukraine">Украина</option>
        <option value="United Arab Emirates">Арабские Эмираты</option>
        <option value="United Kingdom">Великобритания</option>
        <option value="United States">США</option>
        <option value="Uruguay">Уругвай</option>
        <option value="Uzbekistan">Узбекистан</option>
        <option value="Vanuatu">Вануату</option>
        <option value="Vatican City">Ватикан</option>
        <option value="Venezuela">Венесуэла</option>
        <option value="Vietnam">Вьетнам</option>
        <option value="Yemen">Йемен</option>
        <option value="Zambia">Замбия</option>
        <option value="Zimbabwe">Зимбабве</option>
        {/* Добавьте другие страны, как вам необходимо */}
      </select>
    </form>
  );
};

export default CountryInput;
