// // const glintsXImpactByte=[
// //     'arb712',
// //     'ozy-ahmad',
// //     'EvanCharles16'
// // ]

// // glintsXImpactByte.forEach(item => {
// //     fetch(`https://api.github.com/users/${item}`)
// //         .then(response => {
// //             console.log(response);
            
// //         })
// // })

fetch('https:swapi.co/api/people/1')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
    const {name, skin_color, gender, films} = data;

    const linkHTML = '<a href=""></a>';
    let linksFilm = '';
    films.forEach( (item, index) => {
        linksFilm += `<a href="${item}"> film ${index + 1},</a>`;
    })

    const peopleHTMLString = ` <div class="col-sm-6 col-md-4">
        name: ${name}
        <br>
        skin color: ${skin_color}
        <br>
        gender: ${gender}
        <br>
        films: ${linksFilm}
    </div>`;

    document.getElementById('starwars').innerHTML = peopleHTMLString;
})

//wanderlink api
const addWondelink = item => {
    const {destinationName, address, city, images} = item;

    const stringHTML = `
        <div class="col-sm-6 col-md-4">
        <img width="100%" height="200px" src="${serverWanderlink}${images && images[0]}"/>
        ${destinationName}
        <br>
        ${address}
        <br>
        ${city}
        `
        document.getElementById('wanderlink').innerHTML += stringHTML
}

const serverWanderlink = 'http://35.240.201.155:3000/';
fetch(`${serverWanderlink}api/v1/wanderlink/show/idn/destination`)
.then (response => {
    return response.json();
})
.then (data => {
    console.log(data)
    // data.forEach(item => {
    //     addWondelink(item)
    // });

    for(let i=10;i=20; i++) {
        addWondelink(data[i]);
        }
    })



    
const show10 = (noIndex = 0) => {
    const maxNomor = 10 + noIndex;
    for (noIndex; noIndex < maxNomor; noIndex++) {
        addWondelink(dataWonderlink[noIndex]);
    }
    currentPages = maxNomor;
}

const previous = () => {

    }

const next = () => {
        
    }