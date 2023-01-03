'use strict'
const sections=document.querySelectorAll('section')
const read=document.querySelector('.read')
const notification=document.querySelector('span')
const red=document.querySelectorAll('.red')


read.addEventListener('click',function(e){
    e.preventDefault()
 sections.forEach(mov=>mov.classList.remove('unread'))
 notification.classList.remove('num')
 red.forEach(red=>red.style.background='white')
 notification.innerHTML=''

})
