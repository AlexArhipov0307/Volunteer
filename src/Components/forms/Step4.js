import {Step4Styled} from "./Step4Styled";

const Step4 = ({setNumber}) => {
    return (
        <Step4Styled>
            <p className='step4Instruction'>Мы благодарим Вас за те данные, которые Вы предоставили и ценим Вашу заботу
                о друзьях, родных и близких. Очень надеемся на то, что данные, которыми мы теперь располагаем позволят
                нам найти указанного человека. Мы гарантируем конфиденциальность и постараемся оправдать Ваши
                ожидания.</p>
            <p className='step4Instruction'>Ожидайте сообщение по указанному вами контакту.</p>
            <button type='button' onClick={()=>setNumber(1)} className='homePageRedirectButton'>Новый поиск</button>
        </Step4Styled>
    )
}

export default Step4