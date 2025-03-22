let inpSearch = document.getElementById('search')
let btnSearch = document.getElementById('sub')
let main = document.getElementById('main')
let spiner = document.getElementById('spiner')

let data;


async function findUser(){
    spiner.style.display = 'block'
    inpSearch = inpSearch.value
    let res = await fetch(`https://api.github.com/users/${inpSearch}`)
    data = await res.json()
    console.log(data)
    if (res.ok){
        let login = data.login
        let logo = data.avatar_url
        let bio = data.bio
        let location = data.location
        let followers = data.followers
        let following = data.following
        let repositoring = data.public_repos
        main.innerHTML =`
        <img src="${logo}">
        <h1>${login}</h1>
        <p>${bio}</p>
        <div>
          <i class="fas fa-map-pin"></i>
          <span>${location}</span>
          <i class="fas fa-heart"></i>
          <span>${followers}</span>
          <i class="fas fa-star"></i>
          <span>${following}</span>
          <i class="fas fa-book"></i>
          <span>${repositoring}</span>
        </div>
        `
        spiner.style.display = 'none'
        main.style.display = "flex"
    }
    else{
        main.innerHTML = `
        <h1>Пользователь не найден</h1>
        `
        spiner.style.display = 'none'
        main.style.display = "flex"
    }
}

btnSearch.addEventListener("click",findUser)