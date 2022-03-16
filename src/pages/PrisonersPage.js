import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPrisonersOperation} from "../store/prisoners/prisonersOperations";
import {prisonersListSelector} from "../store/prisoners/prisonersSelectors";
import useDeviceSizes from "../hooks/useDeviceSizes";

import sprite from '../icons/icons.svg'
import Modal from "../Components/modal/Modal";
import Loader from "../Components/loader/Loader";
import {PrisonersPageStyled} from "./PrisonersPageStyled";

const PrisonersPage = () => {
    const {isMobileDevice} = useDeviceSizes();
    const dispatch = useDispatch();
    const prisonersList = useSelector(prisonersListSelector);
    const [filter, setFilter] = useState('')
    useEffect(() => {
        !prisonersList.length && dispatch(getPrisonersOperation())
    }, [dispatch, prisonersList.length])

    const prepareBirthDate = (date) => {
        return date ? date.split('-').reverse().join('.') : 'Информация уточняется'
    }
    const onHandleChange = (e) => {
        setFilter(e.target.value);
    }

    const getFilteredList = () => {
        return prisonersList.filter(prisoner => prisoner.name.toLowerCase().includes(filter.toLowerCase())
            || prisoner.base.includes(filter))
    }

    return (<PrisonersPageStyled isMobileDevice={isMobileDevice}>
        <label className='prisonersFilterLabel'>
            Поиск <span className='prisonersFilterLabelText'>( ФИО или номер части )</span>
            <input type='text' onChange={onHandleChange} className='prisonersFilterInput'/>
        </label>
        <div className='prisonersTable'>
            <ul className='prisonersBody'>
                {getFilteredList().length ? getFilteredList().map(prisoner => <li key={prisoner.capturedSoldierId}
                                                                                  className='prisonersBodyRow'>
                    <div className='prisonersItemRowContainer'>
                        <div className='prisonersItemRow'>
                            <div className='prisonersItemIconContainer'>
                                <svg className='prisonersItem'>
                                    <use href={sprite + '#icon-user'}/>
                                </svg>
                            </div>
                            <span className='prisonerColored'>{prisoner.name}</span>
                        </div>

                        <div className='prisonersItemRow'>
                            <div className='prisonersItemIconContainer'>
                                <svg className='prisonersItem'>
                                    <use href={sprite + '#icon-price-tags'}/>
                                </svg>
                            </div>
                            <span>{prisoner.rank}</span>
                        </div>
                        <div className='prisonersItemRow'>
                            <div className='prisonersItemIconContainer'>
                                <svg className='prisonersItem'>
                                    <use href={sprite + '#icon-home'}/>
                                </svg>
                            </div>
                            <span>воинская часть {prisoner.base}</span>
                        </div>
                        <div className='prisonersItemRow'>
                            <div className='prisonersItemIconContainer'>
                                <svg className='prisonersItem'>
                                    <use href={sprite + '#icon-birthday-cake'}/>
                                </svg>
                            </div>
                            <span>{prepareBirthDate(prisoner.birthDate)}</span>
                        </div>
                        <div className='prisonersItemRow'>
                            <div className='prisonersItemIconContainer'>
                                <svg className='prisonersItem'>
                                    <use href={sprite + '#icon-location2'}/>
                                </svg>
                            </div>
                            <span>{prisoner.region}</span>
                        </div>
                        {prisoner.link && <div className='prisonersItemRow'>
                            <div className='prisonersItemIconContainer'>
                                <svg className='prisonersItem'>
                                    <use href={sprite + '#icon-film'}/>
                                </svg>
                            </div>
                            <a href={prisoner.link} rel="noreferrer" target='_blank' className='prisonerLink'>Ссылка на телеграмм</a>
                        </div>}

                    </div>
                </li>) : <Modal><Loader/></Modal> }
            </ul>
        </div>
    </PrisonersPageStyled>)
}

export default PrisonersPage