const modalButtons = document.querySelectorAll('[data-modal-button]')
const allModal = document.querySelectorAll('[data-modal]')
const modalClisebuttons = document.querySelectorAll('[data-modal-close]')
// Кнопки - Открыть Модалку


		// Находим внутри открываемой модалки блок .modal-window и запрещаем ему передавать клики "наверх"


// Кнопки - Закрыть Модалку


// Закрытие модалок по фейду

modalButtons.forEach(function(item){
	item.addEventListener('click', function (){
		const modalid = this.dataset.modalButton;

		const modal = document.querySelector('#' + modalid)
        

		modal.classList.remove('hidden')

		modal.querySelector('.modal-window').addEventListener('click', function (e){
			e.stopPropagation()
		})
	})
})


modalClisebuttons.forEach(function(item){
	item.addEventListener('click', function(){
		const modal = this.closest('[data-modal]')

		modal.classList.add('hidden')
	})
})



allModal.forEach(function(item){
	item.addEventListener('click', function(){
		this.classList.add('hidden')
	})
})











