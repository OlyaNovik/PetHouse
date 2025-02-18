import s from '../Style_main/Header.module.scss';


export function findSelectedPets() {
    // Get the parent div with the id 'petchooser'
    const result = []
    const petChooserDiv = document.getElementsByClassName(s.pets_choose)[0];
    console.log(petChooserDiv);
    // Check if the 'petChooserDiv' exists
    if (petChooserDiv) {
        // Find all div elements with the class name 's.selected' within 'petChooserDiv'
        const selectedDivs = petChooserDiv.children;
        // Log or do something with the selected divs
        for (let i =0;i < selectedDivs.length;i++) {
            if(selectedDivs[i].classList.contains(s.selected)) {
                result.push(selectedDivs[i].children[0]);
            }
        }
        console.log(result)
        // Return the selected divs if you need them
        return result;
    } else {
        console.error("Element with id 'petchooser' not found.");
        return null;
    }
}