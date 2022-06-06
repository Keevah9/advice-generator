

document.querySelector('.icon').addEventListener('click', getAdvice)
let para = document.querySelector('p')
let num = document.querySelector('#adviceNo')

async function getAdvice(){
    let url = 'https://api.adviceslip.com/advice';

    const res = await fetch(url)
    const data = await res.json()
    para.textContent = data.slip.advice
    num.textContent = data.slip.id
    console.log(data.slip.advice)
    console.log(data.slip.id)
}