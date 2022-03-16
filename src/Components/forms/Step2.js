import React, {useEffect, useState} from "react";
import {Step2Styled} from "./Step2Styled";
import {useDispatch, useSelector} from "react-redux";
import {addParentAction} from "../../store/find/findActions";

const initiatorState = {
    name: '',
    relations: '',
    phone: '',
    address: '',
    email: '',
}

const Step2 = ({setNumber}) => {
    const [parent, setParent] = useState(initiatorState);
    const dispatch = useDispatch()
    const parentDataFromState = useSelector(state => state.find.parent);

    const onHandleChange = (e) => {
        const {name, value} = e.target;
        setParent(prev => ({...prev, [name]: value}));
    }

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(addParentAction(parent));
        setNumber(3)
    }

    useEffect(() => {
        setParent(prev => ({...prev, ...parentDataFromState}))
    }, [parentDataFromState]);

    return (
        <Step2Styled>
            <h2 className='step2Title'>Шаг 2</h2>
            <p className='step2Instruction'>Для того чтобы мы могли с Вами связаться мы просим внести контактные данные.
                Эти поля не обязательны и Вы сами решаете, какую информацию указать. Мы рекомендуем заполнить все поля
                так как это сократит время для осуществления поиска. Кроме того эта информация позволит нам быстро и
                эффективно с Вами связаться. Это важно, так как к нам обращается много людей и не всегда есть
                возможность дать информацию по телефону или на почтовый ящик.</p>
            <form onSubmit={onHandleSubmit} className='step2FormStyled'>
                <label className='step2FormLabel'>
                    Фамилия имя отчество
                    <input type='text' name='name' value={parent.name} onChange={onHandleChange}
                           placeholder='Луговая Нина Михайловна'/>
                </label>
                <label className='step2FormLabel'>
                    Степень родства (мать, отец, брат ...)
                    <input type='text' name='relations' value={parent.relations} onChange={onHandleChange}
                           placeholder='мама'/>
                </label>
                <label className='step2FormLabel'>
                    Телефон
                    <input type='text' name='phone' value={parent.phone} onChange={onHandleChange}
                           placeholder='8 xxx xxx-xx-xx'/>
                </label>
                <label className='step2FormLabel'>
                    Электронная почта
                    <input type='email' name='email' value={parent.email} onChange={onHandleChange}
                           placeholder='volunteer@mail.ru'/>
                </label>
                <label className='step2FormLabel'>
                    Место проживания (адрес)
                    <input type='text' name='address' value={parent.address} onChange={onHandleChange}
                           placeholder='117405, г. Москва, ул. Дорожная, 56'/>
                </label>
                <div className='step2buttonsOptions'>
                    <button
                        type='button'
                        onClick={() => setNumber(1)}
                        className='step2PrevButton'>
                        Назад
                    </button>
                    <button
                        type='submit'
                        className='step2NextButton'>
                        Далее
                    </button>
                </div>
            </form>
        </Step2Styled>
    )
}

export default Step2