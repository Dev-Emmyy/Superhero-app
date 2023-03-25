
const searchHero = document.getElementById("searchhero");
const heroName = document.getElementById("superheroname")
const btnEL = document.getElementById("searchbtn");
const imgEL = document.getElementById("image");
const image = document.getElementById("img");
const powerstatsEL = document.getElementById("power");
const powerInfo = document.getElementById("powerinfo");
const bioEL = document.getElementById("bio");
const biographyEL = document.getElementById("biography2");
const appear = document.getElementById("appear");
const appearanceEL = document.getElementById("appearance2");
const connects = document.getElementById("connect");
const connectEL = document.getElementById("connections2");
const powerBtn = document.getElementById("powerstats");
const bioBtn = document.getElementById("biography");
const appearBtn = document.getElementById("appearance");
const connectBtn = document.getElementById("connections")



const urL = `https://superheroapi.com/api/1388520485233153`

function Superhero(){
    fetch(`${urL}/search/${searchHero.value}`)
    .then(res => res.json())
    .then(data => {
       const hero = data.results[0]
        console.log(hero.connections)
        imgEL.innerHTML = `<img src=${hero.image.url} width="380px" id="image" />`
        heroName.innerHTML = `<h2 id="superheroname">${hero.name}</h2>`
        image.style.display = "none";
        powerInfo.style.display = "none";
        biographyEL.style.display = "none";
        appear.style.display = "none";
        connects.style.display = "none";
        powerstatsEL.innerHTML = `
        <div>
        <div class="powerstats">
                    <p>INTELLIGENCE</p>
                    <p><em>${hero.powerstats.intelligence}</em></p>
                </div>
                <div class="powerstats">
                    <p>STRENGTH</p>
                    <p><em>${hero.powerstats.strength}</em></p>
                </div>
                <div class="powerstats">
                    <p>SPEED</p>
                    <p><em>${hero.powerstats.speed}</em></p>
                </div>
                <div class="powerstats">
                    <p>DURABILITY</p>
                    <p><em>${hero.powerstats.durability}</em></p>
                </div>
                <div class="powerstats">
                    <p>POWER</p>
                    <p><em>${hero.powerstats.power}</em></p>
                </div>
                <div class="powerstats">
                    <p>COMBAT</p>
                    <p><em>${hero.powerstats.combat}</em></p>
                </div>
        </div>`

            bioEL.innerHTML = `
            <div>
                <div class="bio">
                <p>FULL-NAME</p>
                <em>${hero.biography["full-name"]}</em>
                </div >
                <div class="bio">
                <p>ALIASES</p>
                <em>${hero.biography.aliases[2]}</em>
                </div>
            </div>`

            appearanceEL.innerHTML = `
             <div>
                <div class="appear">
                    <p>GENDER</p>
                    <em>${hero.appearance.gender}</em>
                </div>
                <div class="appear">
                    <p>RACE</p>
                    <em>${hero.appearance.race}</em>
                </div>
                <div class="appear">
                    <p>HEIGHT</p>
                    <em>${hero.appearance.height}</em>
                </div>
                </div>`

            connectEL.innerHTML = `
                        <div>
                    <div class="connect">
                        <p>GROUP-AFFLIATION</p>
                        <em>${hero.connections["group-affiliation"]}</em>
                    </div>
                    <div class="connect">
                        <p>RELATIVES</p>
                        <em>${hero.connections.relatives}</em>
                    </div>
                        </div> `


    })
};

btnEL.addEventListener("click",Superhero);


bioBtn.addEventListener("click",() => {
    biographyEL.style.display = "none";
    bioEL.style.display = "block";
    powerInfo.style.display = "none";
    powerstatsEL.style.display = "none"
    appear.style.display = "none";
    appearanceEL.style.display = "none";
    connects.style.display = "none";
    connectEL.style.display = "none";
})

appearBtn.addEventListener("click", () => {
    biographyEL.style.display = "none";
    bioEL.style.display = "none";
    powerInfo.style.display = "none";
    powerstatsEL.style.display = "none"
    appear.style.display = "none";
    appearanceEL.style.display = "block";
    connects.style.display = "none";
    connectEL.style.display = "none";
})

connectBtn.addEventListener("click", () => {
    biographyEL.style.display = "none";
    bioEL.style.display = "none";
    powerInfo.style.display = "none";
    powerstatsEL.style.display = "none"
    appear.style.display = "none";
    appearanceEL.style.display = "none";
    connects.style.display = "none";
    connectEL.style.display = "block";
})

powerBtn.addEventListener("click", () => {
    biographyEL.style.display = "none";
    bioEL.style.display = "none";
    powerInfo.style.display = "none";
    powerstatsEL.style.display = "block"
    appear.style.display = "none";
    appearanceEL.style.display = "none";
    connects.style.display = "none";
    connectEL.style.display = "none";
})




//https://superheroapi.com/api/1388520485233153/search/name