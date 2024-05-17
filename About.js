window.addEventListener(('load'), () =>{

    loadProject()
})

function loadProject() {
    const projectcard = [
    {
        Title: 'Soft skills',
        skill: ['Attention to Details', 'Commitment', 'Collaboration', 'Teamwork','Positive Attitude'],


    },
    {
        Title: 'Hard skills',
        skill: ['C Sharp', 'SQL', 'Java/Kotlin Andriod', 'System Analysts','IT Project Management'],


    },
    {
        Title: 'Relevent Coursework',
        skill: ['Prgramming Logic and Design', 'C# programming', 'System Analysts and Design', 'TeamSQL Databaseswork','Open-Source Codeing'],


    },
]

projectcard.forEach((project)  =>{

    const Listofcards = document.getElementById('content') 

    const carddetails = document.createElement('div')

    carddetails.classList.add('card')
    carddetails.innerHTML = `
    <div class="card-content">
      <h3>${project.Title}</h3>
       <ul>
        <li>${project.skill[0]}</li>
        <li>${project.skill[1]}</li>
        <li>${project.skill[2]}</li>
        <li>${project.skill[3]}</li>
        <li>${project.skill[4]}</li>
      </ul>
    </div>`

    Listofcards.appendChild(carddetails)


})


}





