import React from 'react'
import './css/App.css';
import './css/media.css'
import Dropdown from './components/Dropdown';
import {useForm} from 'react-hook-form';
import validateInfo from './lib/validation/validateInfo';
import classNames from 'classnames';

function App() {
  const languages = ['Русский', 'Английский', 'Китайский', 'Испанский']

  const [user, setUserProp] = React.useState({
    name: '',
    email: '',
    phone: '',

  })

  const [errors, setErrors] = React.useState({})

  const checkInputField = () => {
    const {name, email, phone, politics, language} = user
   return name && email && phone && politics && language
}

const {register, handleSubmit} = useForm();


  function onSubmit(data) {
    const errs = validateInfo(data)
    setErrors(errs);
  }


const handleChange = (event) => {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value
  const name = target.name
  setUserProp({
    ...user,
    [name]: value
  })
}


 const setLang = (language) => {
    setUserProp({
      ...user,
      language
    })
 }
 
return (
  <div className="App">
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-title-wrapper">
          <p className="form__title">Регистрация</p>
            <p className="form__subtitle">Уже есть аккаунт ? <a href="!#">Войти</a></p>
        </div>
      <div className="info">

          <div className="input-wrapper">
                <p className="input-title">Имя</p>
                <input 
                  onChange={handleChange}
                  name="name"  
                  className="input"
                  placeholder="Введите ваше имя"
                  type="text"
                  ref={register()}
                /> 
                {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="input-wrapper">
              <p className="input-title">Email</p>
              <input 
                onChange={handleChange}
                name="email"  
                className="input" 
                placeholder="Введите ваш email"
                type="email"
                ref={register()}
                />
              {errors.email && <span className="error-message">{errors.email}</span>}
          </div>


          <div className="input-wrapper">
              <p className="input-title">Номер телефона</p>
              <input 
                onChange={handleChange}
                name="phone" 
                className="input" 
                placeholder="Номер телефона"
                type="tel" 
                ref={register()}
                />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

        <Dropdown isLanguageSelected={setLang} languages={languages}/>
        </div>

        <div className="submit">
          <div className="submit-checkbox">
            <label className="checkbox__label" for="politics">
            <input onChange={handleChange} name="politics" id="politics" className="checkbox__input" type="checkbox"/>
            <span className="check__box"></span>
              <span className="accept">Принимаю <a href="!#">условия</a> использования</span>
            </label>
          </div>
        <input 
        disabled={!checkInputField()} 
        className={
          classNames(
            " submit-input",
            {
            "disabled": !checkInputField(),
            "active": checkInputField()
            }
          )
        } 
        type="submit" 
        value="Зарегистрироваться" />
        </div>
      </form>
      </div>
    </div>
  );
}

export default App;
