import React from "react";
import {Step3Styled} from "./Step3Styled";
import {useDispatch} from "react-redux";
import {addTargetOperation} from "../../store/find/findOperations";

const Step3 = ({setNumber}) => {
    const dispatch = useDispatch();
    return (
        <Step3Styled>
            <h2 className='step3Title'>Шаг 3</h2>
            <p className='step3Instruction'>На третьем шаге Вам ничего заполнять не нужно. Но этот шаг не менее важен,
                нежели предыдущие. Очень просим Вас передать информацию о нашем ресурсе своим друзьям и знакомым. Это
                очень важно. Поверьте, что не Вы один ищете дорогого Вам человека. Обратившись к нам Вы оказали нам
                доверие, и мы постараемся его оправдать.</p>
            <p className='step3Instruction'>Мы очень надеемся, что в ближайшее время сможем Вас проинформировать о
                местонахождении человека, которого Вы ищете. Мы понимаем, что Вам тяжело и Вы не знаете что делать.
                Постарайтесь набраться терпения и будьте сильными. Как только мы получим хоть какую-то информацию - мы
                непременно свяжемся с Вами и дальше будем действовать по обстановке.</p>
            <p className='step3Instruction'>Убедительно просим не прекращать попытки поиска обратившись только на наш
                ресурс. К сожалению мы несколько ограничены в своих возможностях и заботимся и о собственной
                безопасности. Мы не делаем ничего плохого. Наша задача - помогать людям. Верьте, что все будет хорошо.
                Мы в это верим!</p>
            <div className='step3buttonsOptions'>
                <button
                    type='step2button'
                    onClick={() => setNumber(2)}
                    className='step3PrevButton'>
                    Назад
                </button>
                <button
                    type='button'
                    onClick={async () => {
                        await dispatch(addTargetOperation())
                        setNumber(4);
                    }}
                    className='step3NextButton'>
                    Далее
                </button>
            </div>
        </Step3Styled>
    )
}
export default Step3