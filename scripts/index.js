// Находим форму в DOM закрытие и открытие popup: Общее для edit и add
const popupCloseButtons = document.querySelectorAll('.popup__close');
// Находим форму в DOM блок edit
const profileForm = document.querySelector('.popup__container'); //Найдет 1-ый контейнер, блок edit
const editPopup = document.querySelector('.popup_edit');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__profession');
const nameInput = document.getElementById('name');
const jobInput = document.getElementById('profession');
const profileEditButton = document.querySelector('.profile__edit-button');
// Находим форму в DOM блок add
const addPopup = document.querySelector('.popup_add');
const formPlace = addPopup.querySelector('.popup__form');
const namePlace = document.getElementById('place-name');
const urlPlace = document.getElementById('place-url');
const profileAddButton = document.querySelector('.profile__add-button');
// Находим форму в DOM блок view
const viewPopup = document.querySelector('.popup_view');
const viewPhoto = document.querySelector('.popup__photo');
const viewFigCaption = document.querySelector('.popup__figcaption');


//Массив с карточками
const initialCards = [
  {
    name: 'Этрета',
    link: '/images/grid-etreta.jfif'
  },
  {
    name: 'Вик',
    link: '/images/grid-vik.jfif'
  },
  {
    name: 'Билгола',
    link: '/images/grid-bilgola.jfif'
  },
  {
    name: 'Кабо-Сан-Лукас',
    link: '/images/grid-CaboSanLucas.jfif'
  },
  {
    name: 'Форментор',
    link: '/images/grid-formentor.jfif'
  },
  {
    name: 'Валенсия',
    link: '/images/grid-valencia.jfif'
  }
];

//Открытие popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
//Закрытие popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
//Открытие edit
function openEditPopup() {
  openPopup(editPopup);
//Вставка в инпуты данные пользователя с сайта
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

//Обработчик к кнопке открытия Edit
profileEditButton.addEventListener('click', openEditPopup);

//Закрытие для edit, add и view
popupCloseButtons.forEach( btn => {
  btn.addEventListener('click', function () {
    closePopup(btn.closest('.popup'))
  })
});

//Редактирование имени и информации о себе посредством submit
// Обработчик «отправки» формы
function handleProfileFormSubmit (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameProfile.textContent = nameInput.value; //Данные из инпутов отправляются в карточку пользователя
  jobProfile.textContent = jobInput.value;
   closePopup(editPopup);
}
// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
profileForm.addEventListener('submit', handleProfileFormSubmit);

//Открытие add
function openAddPopup() {
  openPopup(addPopup);
}
//Обработчик к кнопке открытия Add
profileAddButton.addEventListener('click', openAddPopup);

function likeCard(event) {
  event.target.classList.toggle('element__like-button_active');//В разметку не добавлять, работает как переключатель
}

function deleteCard(event) {
  event.target.closest('.element__group').remove();
}

function handleCardClick(card){
  viewPhoto.src = card.link;
  viewPhoto.alt = card.name;
  viewFigCaption.textContent = card.name;
  openPopup(viewPopup);
}

//Объявляем переменную для содержимого блока template
const template = document.querySelector('.template').content;
//Объявляем переменную для ul, после которого вставим template
const gallery = document.querySelector('.element__gallery');
//Добавление карточек
function creatCard(card) {
  const cardElement = template.querySelector('.element__group').cloneNode(true); //Находим группу, начиная с li (в dom оно не записывается)
  const cardPhoto = cardElement.querySelector('.element__image'); //Находим фото из template(в dom оно не записывается)
  cardElement.querySelector('.element__title').textContent = card.name;
  cardPhoto.alt = card.name; //Присваивание фотографиям из template значений из массива(название и ссылка)
  cardPhoto.src = card.link;
  cardElement.querySelector('.element__like-button').addEventListener('click', likeCard);
  cardElement.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  cardPhoto.addEventListener('click', () => handleCardClick(card));
  return cardElement; //Вернули готовую карточку
}

//Добавление карточки в начало массива
 function handleCardFormSubmit(evt) {
  evt.preventDefault();
  if (namePlace.value && urlPlace.value) { //Проверка переданы ли пользователем данные, если нет, то карточка не добавляется и addpopup закрывается
  gallery.prepend(creatCard({name: namePlace.value, link: urlPlace.value})); //Вставка карточки перед массивом
  }
  closePopup(addPopup);
  formPlace.reset(); //Очистка формы
}
// Прикрепляем обработчик к форме: он будет следить за событием “submit” - для add
formPlace.addEventListener('submit', handleCardFormSubmit);

//Вставка элементов в разметку
function renderInitialCards() {
  initialCards.forEach((card) => {
  gallery.append(creatCard(card))
  });
}
renderInitialCards();
