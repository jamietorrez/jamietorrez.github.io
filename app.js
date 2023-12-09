function randomizeColors(){
    function colorPicker(){
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
        return `rgb(${red}, ${green}, ${blue})`
    }
    
    let color1 = colorPicker();
    let color2 = colorPicker();
    let color3 = colorPicker();

    let body = document.querySelector('body')
    body.style.setProperty('--white-color', color1)
    body.style.setProperty('--light-color', color2)
    body.style.setProperty('--bright-color', color3)
}
