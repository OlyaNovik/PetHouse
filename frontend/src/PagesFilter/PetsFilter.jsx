import s from './Style/Filter.module.scss'
import { useState, useRef, useEffect } from 'react'
import '.././Style/GlobalStyle.scss'
import Footer from '../MainPage/Footer'
import { GlobalSvgSelector } from '../Style/GlobalSelectorSvg'
import {useNavigate} from 'react-router-dom'
import { logOutHandler } from '../auth/actions/userActions'
import { connect } from 'react-redux'

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const PetsFilter = ({logOutHandler}) => {
    const navigate = useNavigate();
    const arrow = (<svg xmlns="http://www.w3.org/2000/svg" width="38" height="20" viewBox="0 0 38 20" fill="none">
        <path d="M19.1355 17L34 3.2507" stroke="white" strokeWidth="6" strokeLinecap="round" />
        <path d="M4 3L18.8645 16.7493" stroke="white" strokeWidth="6" strokeLinecap="round" />
    </svg>)
    let FilterData = {}
    const [vision2, SetVision2] = useState({
        pets: [1, 'none', '25px'],
        location: [1, 'none', '25px'],
        breed: [1, 'none', '25px'],
        Dog: [1, 'none', '25px'],
        Cat: [1, 'none', '25px'],
        Rabbit: [1, 'none', '25px'],
        Reptiles: [1, 'none', '25px'],
        size: [1, 'none', '25px'],
        age: [1, 'none', '25px'],
        gender: [1, 'none', '25px'],

    })
    const [location,setLocation] = useState(['Lviv', 'Kyiv', 'Odessa', 'Zhytomyr'])
    const [breed,setBreed] = useState({
        Dog: ['Akita', 'Boxer', 'Corgi', 'Pumi', 'Samoid'],
        Cat: ['Abyssinian', 'Burmese', 'Cornish Rex', 'Himalayan', 'Maine_Coon'],
        Rabbit: ['Chinchilla', 'Humster', 'Rabbit', 'Mouse'],
        Reptiles: ['Fish', 'Reptile', 'Snake', 'Turtle']

    })

    const loadDataFromDB = async() => {
        try {
            const res = await fetch(`${SERVER_URL}/loadFilterData`);
            const data = await res.json();
    
            // Assuming data is an array of objects with a 'city' property
            setLocation(data.location.map(item => item.city));
            setBreed(data.breed)
            // You might want to log or do something with the updated Filter.location
            console.log(Filter.location);
        } catch (error) {
            console.error('Error loading data from the server:', error);
        }
    }
    const id_array = ['pets', 'location', 'breed', 'size', 'age', 'gender']
    const Filter = {
        pets: ['Dog', 'Cat', 'Rabbit', 'Reptiles'],
        location: location,
        breed: breed,
        size: ['Small', 'Medium', 'Large'],
        age: ['Puppy', 'Young', 'Adult'],
        gender: ['Male', 'Female']
    }
    const optionParent = {
        pets: 'pets',
        location: 'location',
        breed: 'breed',
        size: 'size',
        age: 'age',
        gender: 'gender'
    }
    const [option, setOption] = useState({
        pets: 'Choose pets',
        location: 'Location',
        breed: 'Breed',
        size: 'Size',
        age: 'Age',
        gender: 'Gender'
    })

    const [erorr,Seterror]= useState('')
    const Filterhandle = (e) => {
        const children = e.target;
        id_array.map((i) => {
            if (children.id === i) {
                if (vision2[i][0] === 1) {
                    SetVision2({
                        ...vision2,
                        [i]: [0, 'block', '25px 25px 0 0']
                    })
                    if (children.id === 'breed') {
                        Filter.pets.map((el) => {
                            if (option.pets == el) {
                                for (let opt_Breed in Filter.breed) {
                                    if (el === opt_Breed) {
                                        
                                        console.log(el);
                                        console.log(opt_Breed);
                                        SetVision2({
                                            ...vision2,
                                            breed: [0, 'block', '25px 25px 0 0'],
                                            [opt_Breed]: [0, 'block', '25px 25px 0 0'],
                                        })
                                    }
                                }
                                
                            }
                        })
                    }
                    
                }
                else {
                    SetVision2({
                        ...vision2,
                        [i]: [1, 'none', '25px'],
                        Cat: [1, 'none', '25px'],
                        Dog: [1, 'none', '25px'],
                        Rabbit: [1, 'none', '25px'],
                        Reptiles: [1, 'none', '25px']
                    })
                }
            }
        })
    }



    const [btnFilter, setBtnFilter] = useState({
        btn: 'block',
        close: 'none'
    })
    const MobileFilter = () => {
        setBtnFilter({
            ...btnFilter,
            btn: 'none',
            close:'flex',
            container: 'flex'
        })
    }
    const CloseBtn =()=>{
        setBtnFilter({
            ...btnFilter,
            btn: 'block',
            close:'none',
            container: 'none'
        })
    }


    const OptionHandle = (e) => {
        const idComp = e.target.id;
        console.dir();
        for (let elem in optionParent) {
            if (idComp === optionParent[elem]) {
                setOption({
                    ...option,
                    [elem]: e.target.innerText
                })
                if (option.pets === 'Cat') {

                }
            }
        }
    }
    const getFilterData = () => {
        FilterData.pet = document.getElementById('pets').querySelector('p').textContent;
        FilterData.location = document.getElementById('location').querySelector('p').textContent;
        FilterData.breed = document.getElementById('breed').querySelector('p').textContent;
        FilterData.size = document.getElementById('size').querySelector('p').textContent;
        FilterData.age = document.getElementById('age').querySelector('p').textContent;
        FilterData.gender = document.getElementById('gender').querySelector('p').textContent;

    }

    const searchPets = () =>{
        fetch(`${SERVER_URL}/searchPets`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(FilterData),
        })
    }
    useEffect( () => {
        getFilterData();
    }, [Filter]);



    return (
        <>  
            <div onLoad={loadDataFromDB} className={s.main}>
                <div className={s.header}>
                <div className={s.button_exit}> 
                <div className={s.cont_logo}></div>
                    <input onClick={()=>{logOutHandler(navigate)}} type="button" defaultValue="Exit" className={s.inp_btn} /> 
                    </div> 
                    </div>
                <div className={s.container}>
                    <div className={s.mobile_filter}>
                        <input type="button" onClick={MobileFilter} value="Filter" style={{ display: btnFilter.btn }} className={s.filter_btn} />
                    </div>
                    <div className={s.close_svg} onClick={CloseBtn} style={{ display: btnFilter.close }}><GlobalSvgSelector id="close_filter"/> </div>
                    <div className={s.filter} style={{ display: btnFilter.container }} >

                        <p className={s.label}>Choose pets</p>
                        <div className={s.chooser} id='pets' style={{ borderRadius: vision2.pets[2] }} onClick={Filterhandle} ><p>{option.pets}</p><div className={s.arrow}>{arrow}</div></div>
                        {Filter.pets.map((el, index) => <div key={index} id={el} onClick={OptionHandle} className={s.list_pets} style={{ display: vision2.pets[1] }}><p id="pets">{el}</p></div>)}

                        <p className={s.label}>Location</p>
                        <div className={s.chooser} id='location' style={{ borderRadius: vision2.location[2] }} onClick={Filterhandle} ><p>{option.location}</p><div className={s.arrow}>{arrow}</div></div>
                        {Filter.location.map((el, index) => <div key={index} id={el} onClick={OptionHandle} className={s.list_pets} style={{ display: vision2.location[1] }}><p id="location">{el}</p></div>)}

                        <p className={s.label}>Breed</p>
                        <div className={s.chooser} id='breed' style={{ borderRadius: vision2.breed[2] }} onClick={Filterhandle} ><p>{option.breed}</p><div className={s.arrow}>{arrow}</div></div>
                        <p id={s.message_error}>{erorr}</p>
                        {Filter.breed.Dog.map((el, index) => <div key={index} id={el} onClick={OptionHandle} className={s.list_pets} style={{ display: vision2.Dog[1] }}><p id="breed">{el}</p></div>)}
                        {Filter.breed.Cat.map((el, index) => <div key={index} id={el} onClick={OptionHandle} className={s.list_pets} style={{ display: vision2.Cat[1] }}><p id="breed">{el}</p></div>)}
                        {Filter.breed.Rabbit.map((el, index) => <div key={index} id={el} onClick={OptionHandle} className={s.list_pets} style={{ display: vision2.Rabbit[1] }}><p id="breed">{el}</p></div>)}
                        {Filter.breed.Reptiles.map((el, index) => <div key={index} id={el} onClick={OptionHandle} className={s.list_pets} style={{ display: vision2.Reptiles[1] }}><p id="breed">{el}</p></div>)}
                        



                        <p className={s.label}>Size</p>
                        <div className={s.chooser} id='size' style={{ borderRadius: vision2.size[2] }} onClick={Filterhandle} ><p>{option.size}</p><div className={s.arrow}>{arrow}</div></div>
                        {Filter.size.map((el, index) => <div key={index} id={el} className={s.list_pets} onClick={OptionHandle} style={{ display: vision2.size[1] }}><p id="size">{el}</p></div>)}


                        <p className={s.label}>Age</p>
                        <div className={s.chooser} id='age' style={{ borderRadius: vision2.age[2] }} onClick={Filterhandle} ><p>{option.age}</p><div className={s.arrow}>{arrow}</div></div>
                        {Filter.age.map((el, index) => <div key={index} id={el} className={s.list_pets} onClick={OptionHandle} style={{ display: vision2.age[1] }}><p id="age">{el}</p></div>)}

                        <p className={s.label}>Gender</p>
                        <div className={s.chooser} id='gender' style={{ borderRadius: vision2.gender[2] }} onClick={Filterhandle} ><p>{option.gender}</p><div className={s.arrow}>{arrow}</div></div>
                        {Filter.gender.map((el, index) => <div key={index} id={el} className={s.list_pets} onClick={OptionHandle} style={{ display: vision2.gender[1] }}><p id="gender">{el}</p></div>)}

                        <p className={s.label}>Sterilized</p>
                        <div className={s.button_group}>
                            <div className={s.choose_1}><p>Yes</p></div>
                            <div className={s.choose_2}><p>No</p></div>
                        </div>

                        <p className={s.label}>Chipped</p>
                        <div className={s.button_group}>
                            <div className={s.choose_1}><p>Yes</p></div>
                            <div className={s.choose_2}><p>No</p></div>
                        </div>
                         <button className={s.inp_btn} onClick={searchPets}>Search</button> 

                    </div>

                    <div className={s.petsCard}>

                    </div>
                </div>
                

                <div className={s.footer}>
                    <Footer />
                </div></div>

        </>
    )


}

export default connect(null,{logOutHandler}) (PetsFilter);