const $html = document.querySelector('html')
const $input = document.querySelector('#tema')

$input.addEventListener('change', function(){
  $html.classList.toggle('dark-mode')
})