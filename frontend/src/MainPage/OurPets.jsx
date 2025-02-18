import PetsCard from './PetsCars';
import s from './Style_main/OurPets.module.scss';
import { GlobalSvgSelector } from "../Style/GlobalSelectorSvg";
import React, { useState, useEffect } from 'react';
import { findSelectedPets } from './JS_main/OurPets';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const OurPets = ({ selectedPets = ['dog'] }) => {
  const [page, setPage] = useState(-1);
  const [petsCardsInfo, setPetsCardsInfo] = useState([]);
  const [isLastList, setIsLastList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Reset state and reload cards when selectedPets changes
    setPage(-1);
    setIsLastList(false);
    setPetsCardsInfo([])
  }, [selectedPets]);

  const scrollTop = () => {
    window.scrollTo({ top: 885, behavior: 'smooth' });
  };

  const loadCards = () => {
    if (selectedPets.length > 0) {
      
      if(!isLastList){
        setIsLoading(true); // Set loading state to true
        // Simulate a 300-milisecond delay before loading new data
        setTimeout(() => {
          const nextPage = page + 1;
          
          fetch(`${SERVER_URL}/petCardsInfo?` + new URLSearchParams({
            selectedPets: selectedPets,
            page: nextPage,
            size: 4,
          }))
            .then(res => res.json())
            .then(data => {
              if (!data.length) {
                setIsLastList(true);
              }
              setPetsCardsInfo([...petsCardsInfo, ...data]);
              setPage(nextPage);
            })
            .finally(() => {
              setIsLoading(false); // Set loading state to false when data is loaded
            });
        }, 300); // Adjust the delay time as needed
      }
    }
  };

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 1000) && !isLoading) {
      // Load more data when the user scrolls to the bottom (adjust 20 according to your needs)
      loadCards();
    }
  };

  const renderComponents = () => {
    return petsCardsInfo.map((value, index) => (
      <PetsCard petId={value.pet_id} petName={value.name} petImage={value.first_pet_photo} petLocation={[value.city, " ", value.country]} key={index} />
    ));
  };

  useEffect(() => {
    // Attach the scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <h1 className={s.headText}>Our Pets</h1>
      <div className={s.group_card}>
        {renderComponents()}
      </div>
      {/* {isLoading && <p>Loading...</p>} // Display a loading message while data is being loaded */}
      <svg className={s.svg_arrow} onClick={scrollTop} width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="#782620" />
        <path d="M50.2076 40L72.9998 59.6419" stroke="white" strokeWidth="6" strokeLinecap="round" />
        <path d="M27 60L49.7922 40.3581" stroke="white" strokeWidth="6" strokeLinecap="round" />
      </svg>    </>
  );
};

export default OurPets;
