let a = 0
let iconLeft = document.querySelectorAll('.icon_left')
let slide = document.querySelectorAll('.slide')
let Up = document.querySelector('.fa-angle-up')
let Down = document.querySelector('.fa-angle-down')
let progress = document.querySelectorAll('.progress-bar')

function update(x) {
    slide.forEach(function(link) {
        link.classList.remove('up')
        link.classList.remove('down')
        link.classList.remove('iconMenu')
        // progress.forEach(function(ele) {
        //     ele.classList.remove('addAbout')
        // })
    })
    let y = slide[4]
    console.log(y.style.width)
    // if(y == 1) {
    //     Contact.style.pointerEvents = 'none'
    // }else {
    //     Contact.style.pointerEvents = 'auto'
    // }
    a = x
    progress.forEach(function(ele) {
        ele.classList.add('addAbout')
    })
    slide[x].classList.add('iconMenu')
}

iconLeft.forEach(function(btn, index) {
    btn.addEventListener('click', function() {
        update(index)
    })
})

// -----------------------------

Down.addEventListener('click', function() {
    slide[a].classList.remove('up')
    slide[a].classList.remove('down')
    slide[a].classList.remove('iconMenu')
    a = (a+1) % slide.length
    slide[a].classList.add('down')
})
Up.addEventListener('click', function() {
    slide[a].classList.remove('up')
    slide[a].classList.remove('down')  
    slide[a].classList.remove('iconMenu')  
    a = ((a-1) + slide.length) % slide.length
    slide[a].classList.add('up')
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
