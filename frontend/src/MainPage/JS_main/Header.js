import s from '../Style_main/Header.module.scss';

export const handlePetSelect = (type,e) => {
    const petElementIdArray = ["dog","cat","rabbit","turtle"]
    petElementIdArray.forEach((id) => {
        let el = document.getElementById(id).parentNode
        el.classList.remove(s.selected)
        el.classList.add(s.not_selected)
    })
    if (e.currentTarget) {
        // console.log(e.currentTarget.classList);
        if (e.currentTarget.classList.contains(s.not_selected))
        {
            e.currentTarget.classList.remove(s.not_selected)
            e.currentTarget.classList.add(s.selected)
        }
        else {
            e.currentTarget.classList.remove(s.selected)
            e.currentTarget.classList.add(s.not_selected)
        }
    }
}




export function findSelectedPets(e) {
    // Get the parent div with the id 'petchooser'
    const result = []
    const petChooserDiv = e.currentTarget
    // console.log(petChooserDiv);
    // Check if the 'petChooserDiv' exists
    if (petChooserDiv) {
        // Find all div elements with the class name 's.selected' within 'petChooserDiv'
        const selectedDivs = petChooserDiv.children;
        // Log or do something with the selected divs
        for (let i =0;i < selectedDivs.length;i++) {
            if(selectedDivs[i].classList.contains(s.selected)) {
                result.push(selectedDivs[i].children[0].id);
            }
        }
        // console.log(result)
        // Return the selected divs if you need them
        return result;
    } else {
        console.error("Element with id 'petchooser' not found.");
        return null;
    }
}

