window.addEventListener("load", () => {
    const button = document.querySelector('.share-icon')
    const ballon = document.querySelector('.container-contact')


    function showPopUp(){
        ballon.classList.toggle('active')
        if (ballon.classList.contains('active')){
            button.classList.add('active-color')
        }else{
            ballon.classList.add('desative')
        }
    }
    button.addEventListener('click', showPopUp)
})