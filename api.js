const foto = document.querySelector('#foto');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido')
const edad = document.querySelector('#edad');
const direccion = document.querySelector('#direccion');
const contacto = document.querySelector('#contacto');
const mail = document.querySelector('#mail');
const nat = document.querySelector('#nat');

const tomarDatos = async () =>{ 
    const url = 'https://randomuser.me/api/?gender=female';
    const res = await fetch(url);
    const { results } = await res.json();
    const datos = results[0];

    console.log(datos);
    foto.src = datos.picture.large;
    nombre.textContent = datos.name.first;
    apellido.textContent = datos.name.last;
    edad.textContent = datos.dob.age;
    direccion.textContent = datos.location.city;
    contacto.textContent = datos.phone;
    mail.textContent = datos.email;
    nat.textContent = datos.nat;
}
document.addEventListener('DOMContentLoaded', tomarDatos);


