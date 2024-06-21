const tabHeaders = document.querySelectorAll('[data-tab]')

   
const contentBoxes  = document.querySelectorAll('[data-tab-content]')

tabHeaders.forEach(function (item){
  item.addEventListener('click', function(){
  

    // 1 Скрыть все content box и

     contentBoxes.forEach(function (item) {
      item.classList.add('hidden')
     })

    // 2 Вырать нужный content box и показать его
    const contentBox  = document.querySelector('#' + this.dataset.tab)
    contentBox.classList.remove('hidden')
  })
})