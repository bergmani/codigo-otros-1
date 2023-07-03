const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const nameUser = document.querySelector('.name'); //se cambiaron lo # por . porque es una clase
const blog = document.querySelector('.blog');
const locationUser = document.querySelector('.location');
//Secambiaron los nombres de las variables

//Se agrega async a la funcion
async function displayUser(username) {
  nameUser.textContent = 'cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    console.log(data);
    nameUser.textContent = data.name; //se quitaron las comillas siples y los ${}
    blog.textContent = data.blog;
    locationUser.textContent = data.location;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  nameUser.textContent = `Algo salió mal: ${err}`;
} //corrige el nombre

displayUser('stolinski').catch(handleError);