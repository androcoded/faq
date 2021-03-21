const toggleBtn = document.querySelectorAll('.toggle-btn')
toggleBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        btn.parentElement.classList.toggle('active')
    })
})