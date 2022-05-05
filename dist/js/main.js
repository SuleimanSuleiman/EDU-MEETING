//portfolio
let links = document.querySelectorAll('.portfolio ul li')
let boxs = document.querySelectorAll('.portfolio .cart')


links.forEach((link) =>{
    link.addEventListener('click' , (ele) =>{

        links.forEach((ele) =>{

            ele.classList.remove('active')

        })
        ele.target.classList.add('active')

        boxs.forEach((box) =>{
            
            if(box.classList.contains(link.dataset.cut)){

                box.classList.add('open')
                setTimeout(()=>{
                    box.style='display: flex ' ;
                },400)

            }else{

                box.classList.remove('open')
                setTimeout(()=>{
                    box.style='display: none';
                },400)
            }
        })
    })
})