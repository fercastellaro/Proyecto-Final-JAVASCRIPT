window.onload = iniciarCov;


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bc87b0752cmsh0722bf834abb465p17cf1ejsn195c48666cf1',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
}

function iniciarCov() {
    let boton = document.getElementById('btnCargar');
    boton.addEventListener('click', clickBoton);
}

let paises = []


async function renderUrl(url){
    let response = await fetch(url, options)
    return response.json();
        
}


document.addEventListener('DOMContentLoaded', selectora)


async function selectora(e){

    e.preventDefault()

    let selector = document.getElementById('selectorPaises')
    let opcionesPaises = await renderUrl('https://covid-193.p.rapidapi.com/countries')

    paises.push(opcionesPaises.response)
    let arrayPaises = paises[0]

    for (elm of arrayPaises){
        let option = document.createElement('option')
        option.text = elm
        selector.add(option)
    }
}


async function clickBoton(){
    let pais = document.getElementById('selectorPaises').value;

    let error = document.getElementById('error-estadistico')

    let listaDatos = document.getElementById('lista-datos')

    let json = await renderUrl(`https://covid-193.p.rapidapi.com/statistics?country=${pais}`)

    if (document.getElementById('selectorPaises').value === '0'){
        error.innerHTML = 'Elegi un pais para poder ver las estadisticas'
    }else{

        listaDatos.style.display = 'block';
        error.innerText = ''
 
        let estadisticas = document.getElementById('estadisticas')

        estadisticas.style.height = '480px'
        document.getElementById('nuevos').innerHTML = json.response[0].cases.new,
        document.getElementById('activos').innerHTML = json.response[0].cases.active,
        document.getElementById('recuperados').innerHTML = json.response[0].cases.recovered,
        document.getElementById('muertesNuevas').innerHTML = json.response[0].deaths.new,
        document.getElementById('muertesTotales').innerHTML = json.response[0].deaths.total

        if (json.response[0].deaths.new === null){
            document.getElementById('muertesNuevas').innerHTML = 0
        }
        if (json.response[0].cases.new === null){
            document.getElementById('nuevos').innerHTML = 0
        }
    }

}

let links = document.getElementsByClassName('covid-button')

for(let link of links){
    link.addEventListener ('click', cargarPagina)
}


function cargarPagina(e){
    e.preventDefault()

    let urlCovid = e.target.dataset.page + '.html'
    const myPage = document.querySelector('#myPage')

    fetch(urlCovid)
        .then((resp) => {
            return resp.text()
        })
        .then ((page) => {
            myPage.innerHTML = page
        })
        .catch((err => {
            alert('fallo' + err)
        }))
}
