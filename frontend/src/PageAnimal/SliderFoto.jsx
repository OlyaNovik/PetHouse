import { useEffect, useState } from 'react';
import s from '../PageAnimal/SliderFoto.module.scss';

const SliderFoto = ({ petImages, petName }) => {
    const [currentIndex, setCurrentIndex] = useState(0)  

    const incrementIndex = () => {
        if (currentIndex + 1 < petImages.length)
            setCurrentIndex(currentIndex + 1)
        else 
            setCurrentIndex(0)
    }

    const decrementIndex = () => {
        if (currentIndex - 1 > -1)
            setCurrentIndex(currentIndex - 1)
        else 
            setCurrentIndex(petImages.length-1)
    }

    // useEffect(() => {
    //     console.log(petImages);
    // })
    return (
        <>
            <div className={s.group_foto}>
                <img src={petImages[currentIndex-1 > -1 ? currentIndex - 1:petImages.length-1]} className={s.one_foto} alt={petName} />
                <div onClick={decrementIndex} className={s.arrow}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="38" viewBox="0 0 21 38" fill="none">
                    <path d="M3.2583 19.1355L17.0458 34" stroke="#782620" strokeWidth="6" strokeLinecap="round" />
                    <path d="M17.2974 4L3.50987 18.8645" stroke="#782620" strokeWidth="6" strokeLinecap="round" />
                </svg></div>
                <img src={petImages[currentIndex]} className={s.main_foto} alt={petName} />
                <div onClick={incrementIndex} className={s.arrow}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="38" viewBox="0 0 21 38" fill="none">
                    <path d="M17.7422 18.8645L3.9547 4.00002" stroke="#782620" strokeWidth="6" strokeLinecap="round" />
                    <path d="M3.70312 34L17.4906 19.1355" stroke="#782620" strokeWidth="6" strokeLinecap="round" />
                </svg></div>
                <img src={petImages[currentIndex + 1 < petImages.length ? currentIndex + 1:0]} className={s.one_foto} alt={petName} />
            </div>
            <div className={s.group_svg_slider}>
                <svg xmlns="http://www.w3.org/2000/svg" width="83" height="8" viewBox="0 0 83 8" fill="none">
                    <path d="M3.6167 4H78.825" stroke="#782620" strokeOpacity="0.25" strokeWidth="7" strokeLinecap="round" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="83" height="8" viewBox="0 0 83 8" fill="none">
                    <path d="M3.89453 4H79.1029" stroke="#782620" strokeWidth="7" strokeLinecap="round" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="83" height="8" viewBox="0 0 83 8" fill="none">
                    <path d="M3.6167 4H78.825" stroke="#782620" strokeOpacity="0.25" strokeWidth="7" strokeLinecap="round" />
                </svg>

                </div>
        </>
    )
}

export default SliderFoto;