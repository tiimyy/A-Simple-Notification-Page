'use strict'
const sections=document.querySelectorAll('section')
const read=document.querySelector('.read')
const notification=document.querySelector('span')


read.addEventListener('click',function(e){
    e.preventDefault()
 sections.forEach(mov=>mov.classList.remove('unread'))
 notification.classList.remove('num')
 notification.innerHTML=''

})
