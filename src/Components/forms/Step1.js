import {useEffect, useState} from "react";
import Avatar from "../avatar/Avatar";
import {Step1Styled} from "./Step1Styled";
import {addTargetAction} from "../../store/find/findActions";
import {useDispatch, useSelector} from "react-redux";

const targetState = {
    firstName: '',
    lastName: '',
    fathersName: '',
    base: '',
    birthday: '',
    phone: '',
    email: '',
    position: '',
    rank: '',
    baseAddress: '',
    otherInfo: '',
    specialFeatures: '',
    images: []
}

const Step1 = ({setNumber}) => {
    const [target, setTarget] = useState(targetState);
    const [isOpen, setIsOpen] = useState(false);
    const targetDataFromState = useSelector(state => state.find.target)
    const dispatch = useDispatch()

    useEffect(() => {
        setTarget(prev => ({...prev, ...targetDataFromState}))
    }, [targetDataFromState]);

    const onHandleChange = (e) => {
        const {name, value} = e.target;
        setTarget(prev => ({...prev, [name]: value}))
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTargetAction(target))
        setNumber(2)
    }
    const toggleModal = () => setIsOpen(prev => !prev);
    const setAvatar = (avatar) => setTarget(prev => ({...prev, images: [...prev.images, avatar]}))
    return (<Step1Styled>
        <h2 className='step1Title'>Шаг 1</h2>
        <p className='step1Instruction'>На этом шаге мы рекомендуем Вам указать максимально полную информацию о
            человеке, которого Вы ищете. Это даст нам возможность значительно сократить время на поиск и уточнение
            информации. Поверьте, это не так просто как кажется. Любая деталь, любая мелочь, любая, даже не существенная
            по вашему мнению информация, может нам помочь достичь желаемого результата в наших поисках. </p>
        <ul className='imagesList'>
            {target.images.map((item, idx) => <li className='imagesListItem' key={idx}>
                <img className='imageListItemImage' src={item.img} alt='data'/>
            </li>)}
        </ul>
        <button type='button' onClick={toggleModal} className='step1AddImageButton'>Добавить фото</button>
        <form onSubmit={onHandleSubmit} className='step1FormStyled'>
            {isOpen && <Avatar setAvatarModuleOpen={toggleModal} setAvatar={setAvatar}/>}
            <label className='step1FormLabel'>
                Фамилия
                <input className='step1FormInput' type='text' name='firstName' value={target.firstName}
                       onChange={onHandleChange} placeholder='Астахов' autoComplete='off'/>
            </label>
            <label className='step1FormLabel'>
                Имя
                <input className='step1FormInput' type='text' name='lastName' value={target.lastName}
                       onChange={onHandleChange} placeholder='Никита' autoComplete='off'/>
            </label>
            <label className='step1FormLabel'>
                Отчество
                <input className='step1FormInput' type='text' name='fathersName' value={target.fathersName}
                       onChange={onHandleChange} placeholder='Александрович' autoComplete='off'/>
            </label>
            <label className='step1FormLabel'>
                Дата рождения
                <input className='step1FormInput' type='date' name='birthday' value={target.birthday}
                       onChange={onHandleChange} autoComplete='off'/>
            </label>
            <label className='step1FormLabel'>
                Воинская часть
                <input className='step1FormInput' type='text' name='base' value={target.base}
                       onChange={onHandleChange} placeholder='xxxxx' autoComplete='off'/>
            </label>
            <label className='step1FormLabel'>
                Адрес воинской части
                <input className='step1FormInput' type='text' name='baseAddress' value={target.baseAddress}
                       onChange={onHandleChange} placeholder='117405, г. Москва, ул. Дорожная, 56'
                       autoComplete='off'/>
            </label>

            <label className='step1FormLabel'>
                Звание
                <input className='step1FormInput' type='text' name='rank' value={target.rank}
                       onChange={onHandleChange} placeholder='рядовой' autoComplete='off'/>
            </label>
            <label className='step1FormLabel'>
                Телефон
                <input className='step1FormInput' type='text' name='phone' value={target.phone}
                       onChange={onHandleChange} placeholder='8 xxx xxx-xx-xx' autoComplete='off'/>
            </label>
            <label className='step1FormLabel'>
                Электронная почта
                <input className='step1FormInput' type='email' name='email' value={target.email}
                       onChange={onHandleChange} placeholder='volonter@mail.ru'/>
            </label>
            <label className='step1FormLabel'>
                Особые приметы:
                <textarea className='step1FormArea' cols="33" name='specialFeatures' value={target.specialFeatures}
                          onChange={onHandleChange}
                          placeholder='Имеется шрам на правом виске. Родимое пятно на правом предплечье.
                          Татуировка на левом плече в виде орла...'/>
            </label>
            <label className='step1FormLabel'>
                Любая информация на Ваше усмотрение, которая может помочь найти человека
                <textarea className='step1FormArea' cols="33" name='other' value={target.other}
                          onChange={onHandleChange}/>
            </label>
            <button type='submit' className='step1FormSubmitButton'>Далее</button>
        </form>
    </Step1Styled>)
}

export default Step1