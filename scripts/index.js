// Находим форму в DOM закрытие и открытие popup
const profileEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
// Находим форму в DOM блок submit
const formElement = document.querySelector('.popup__container');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__profession');
const nameInput = document.getElementById('name');
const jobInput = document.getElementById('profession');

//Открытие popup
function openPopup() {
//Вставка в инпуты данные пользователя с сайта
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  popup.classList.add('popup_opened');
}
//Закрытие popup
function closePopup() {
  popup.classList.remove('popup_opened');
}

profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

//Редактирование имени и информации о себе посредством submit
// Обработчик «отправки» формы
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    nameProfile.textContent = nameInput.value; //Lанные из инпутов отправляются в карточку пользователя
    jobProfile.textContent = jobInput.value;
    closePopup()
}
// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

