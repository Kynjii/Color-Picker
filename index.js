
// Get Elements //
const colorInput = document.getElementById('color-input')
const schemeEl = document.getElementById('color-scheme')


// Grabs the input values and creates a URL with parameters to pass in the Fetch
function handleClick(){
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
    }) } 

// Listens for a button click and triggers the 'handleClick' function
document.getElementById('get-btn').addEventListener('click', handleClick)