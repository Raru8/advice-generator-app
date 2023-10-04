let advice = document.querySelector('p')
let id = document.querySelector('.id-advice')
let button = document.querySelector('button')
const URL = "https://api.adviceslip.com/advice"


function FetchDevice() {
    return new Promise((resolve, reject) => {
        fetch(URL).then((response) => {
            return resolve(response.json())
        }).catch((error) => {
            return reject(error)
        })
    })
}

button.addEventListener('click', () => {
    button.disabled
    FetchDevice().then((response) => {
        let data = response.slip
        advice.innerHTML = `"${data.advice}"`
        id.innerHTML = `ADVICE #${data.id}`
        !button.disabled
    })
})

FetchDevice().then((response) => {
    let data = response.slip
    advice.innerHTML = `"${data.advice}"`
    id.innerHTML = `ADVICE #${data.id}`
})
