// burger bar 
let navigation = document.getElementById('navBar')
let burger = document.getElementById('burgerBar')
burger.addEventListener('click',function(click){
  navigation.classList.toggle('activeNav')
})