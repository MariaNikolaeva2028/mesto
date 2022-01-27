let profileEditButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close');

//Открытие и закрытие popup
function openedPopup() {
  popup.classList.add('popup__opened');
}
function closedPopup() {
  popup.classList.remove('popup__opened');
}

profileEditButton.addEventListener('click', openedPopup);
popupCloseButton.addEventListener('click', closedPopup);

//Редактирование имени и информации о себе посредством submit

// Находим форму в DOM
let formElement = document.querySelector('.popup__container');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__profession');
let nameInput = document.getElementById('name');
let jobInput = document.getElementById('profession');

// Обработчик «отправки» формы
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closedPopup()
}
// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

