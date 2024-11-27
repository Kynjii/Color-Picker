
// Get Elements //
const btnEl = document.getElementById('get-btn')
const colorInput = document.getElementById('color-input')
const schemeEl = document.getElementById('color-scheme')


//  Function that sends a request to Color API when 'btnEl' is clicked
btnEl.addEventListener('click', function(){
    const baseUrl = "https://www.thecolorapi.com/scheme"
    const hex = colorInput.value.replace('#', '')
    const mode = schemeEl.value
    const params = new URLSearchParams({
        hex: hex,
        mode: mode,
        count: 5
    })
    const fetchUrl = `${baseUrl}?${params.toString()}`

    fetch(fetchUrl)
    .then(res => res.json())
    .then(data => {
        const colorArr = data.colors
        let html = ``
        for (let color of colorArr) {
            html += `
                <img src="${color.image.bare}">
                <div class="hex">#${color.hex.clean}</div>
            `
        }  
        document.getElementById('color-container').innerHTML = html              
    })  
    
})