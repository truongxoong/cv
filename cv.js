let a = 0
let iconLeft = document.querySelectorAll('.icon_left')
let slide = document.querySelectorAll('.slide')
let Up = document.querySelector('.fa-angle-up')
let Down = document.querySelector('.fa-angle-down')
let progress = document.querySelectorAll('.progress-bar')
let English = document.querySelector('.englishSkills > .english_read')
let Personal = document.querySelector('.personalSkills > .english_read')
let h3 = document.querySelectorAll('.all h3')
let iResume = document.querySelectorAll('.education h2 i')
let h3Resume = document.querySelectorAll('.eduContent .borderBottom')
let Doc = document.querySelector('.education .doc')

function update(x) {
    slide.forEach(function(link) {
        link.classList.remove('up')
        link.classList.remove('down')
        link.classList.remove('iconMenu')
    })
    a = x
    slide[x].classList.add('iconMenu')
}

function ProSkills() {
    progress.forEach(function(ele) {
        ele.classList.remove('addAbout')
    })
    setInterval(function() {
        progress.forEach(function(ele) {
            ele.classList.add('addAbout')
        })
    }, 10) 

    English.classList.remove('english')
    setInterval(function() {
        English.classList.add('english')
    }, 10) 

    Personal.classList.remove('personal')
    setInterval(function() {
        Personal.classList.add('personal')
    }, 10) 

    h3.forEach(function(ele) {
        ele.classList.remove('skillsH3')
    })
    setInterval(function() {
        h3.forEach(function(ele) {
            ele.classList.add('skillsH3')
        })
    }, 10)
    
    iResume.forEach(function(ele) {
        ele.classList.remove('iconResume')
    })
    setInterval(function() {
        iResume.forEach(function(ele) {
            ele.classList.add('iconResume')
        })
    }, 10)
    
    h3Resume.forEach(function(ele) {
        ele.classList.remove('textEdu')
    })
    setInterval(function() {
        h3Resume.forEach(function(ele) {
            ele.classList.add('textEdu')
        })
    }, 10)

    Doc.classList.remove('Doc')
    setInterval(function() {
        Doc.classList.add('Doc')
    }, 10)   
}

iconLeft.forEach(function(btn, index) {
    btn.addEventListener('click', function() {
        update(index)
        ProSkills()
    })
})
// -----------------------------

Down.addEventListener('click', function() {
    slide[a].classList.remove('up')
    slide[a].classList.remove('down')
    slide[a].classList.remove('iconMenu')
    a = (a+1) % slide.length
    slide[a].classList.add('down')
    ProSkills()
})
Up.addEventListener('click', function() {
    slide[a].classList.remove('up')
    slide[a].classList.remove('down')  
    slide[a].classList.remove('iconMenu')  
    a = ((a-1) + slide.length) % slide.length
    slide[a].classList.add('up')
    ProSkills()
})

// Up.addEventListener('click', function() {
//     console.log(a)
//     if(a == 0) {
//         a = slide.length - 1
//     }else {
//         a--
//     }
//     update(a)
// })

// ---------------------------------

// Down.addEventListener('click', function() {
//     console.log(a)
//     if(a == slide.length - 1) {
//         a = 0
//     }else {
//         a++
//     }
//     update(a)
// })
