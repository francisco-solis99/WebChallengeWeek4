// SLIDES INFO
const SLIDES = [
    {

        texto: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
        src: './images/image-tanya.jpg',
        name: 'Tanya Sinclair',
        job: 'UX Engineer'


    }, 

    {

        texto:'"If you want to lay the best foundation possible I’d recommend takng this course. The depth te instructors go into is incredible. I now feel so confident about starting up as a professional developer "',
        src: './images/image-john.jpg',
        name: 'Jonh Tarkpor',
        job: 'Junior Front-end Developer'

    }
]
// console.log(SLIDES[0].texto)


// DOM Elements
const principalText = document.getElementById('testimonie');
const person = document.getElementById('name');
const jobPerson = document.getElementById('job');
const buttonNext = document.getElementById('next') ; 
const buttonPrev =  document.getElementById('prev');
const image = document.getElementById('image');


// console.log(principalText, person, jobPerson, buttonNext, buttonPrev);


// Functions

buttonNext.addEventListener('click', nextSlide)
buttonPrev.addEventListener('click', prevSlide)

n = 0;
function nextSlide(){
    if(SLIDES[n+1]){
        n+=1;
        fillInfo()
    }
}

function prevSlide(){
    if(SLIDES[n-1]){
        n-=1;
        fillInfo()
    }
}

function fillInfo(){
    principalText.innerText=SLIDES[n].texto;
    person.innerText=SLIDES[n].name;
    jobPerson.innerText=SLIDES[n].job;
    image.src = SLIDES[n].src;
}





