const manusia = {
    name: 'hartono',
    lastname: 'gokil',
    getFullname(){
        return `${this.name} ${this.lastname}`

    },
    changeName(namaYgDiubah){
        this.name = namaYgDiubah;
    },
    setAnak(...args){
        let anakArray = [];
        for (let anak of args) {
            anakArray.push(anak);
        }
        this.anak = anakArray;
    },
    getAnak() {
        return this.anak
    }
}
console.log(manusia.getFullname());

let namaLengkap = manusia.getFullname();
console.log(namaLengkap);

manusia.changeName('budi');
namaLengkap = manusia.getFullname();
console.log(namaLengkap);

// date function
const date = new Date();

const tanggal = `${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()}`
console.log(`tanggal hari ini adalah: ${tanggal}`);

//destructure
// const name = manusia.name;
// const lastname = manusia.lastname;

const{ name, lastName} = manusia;
console.log(`${name} ${lastName}`);

//learn DOM event listener
document.querySelector('#clickMe').addEventListener('click', (event) => {
    const stringHTML = '<button class="btn btn-danger">Awas</button>'; 
    document.getElementById('content').innerHTML += stringHTML
    //window.alert('saya terclick')
})
