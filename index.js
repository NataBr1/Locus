const openPopupElementButton = document.querySelector('.header__sign-up') //Кнопка открытия попапа регистрации
const popupElement = document.querySelector('.popup') //попап
const closedPopupButton = popupElement.querySelector('.popup__closed') //Крестик закрытия попапа
const submitPopup = popupElement.querySelector('.popup__button') //кнопка внутри попапа

function openPopup (element) {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closedPopup (element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

//Закрытие по Esc
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closedPopup(openedPopup);
  };
};

//Открытие попапа
openPopupElementButton.addEventListener('click', () => {
  openPopup(popupElement)
});

//Закрытие попапа по крестику и оверлею
popupElement.addEventListener('mousedown', (evt) => {
  if (evt.target.classList.contains('popup_opened')) {
    closedPopup(popupElement)
  }
  if (evt.target.classList.contains('popup__closed')) {
    closedPopup(popupElement)
  }
});
