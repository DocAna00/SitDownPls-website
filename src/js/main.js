// form validate
const contactsValidation = new window.JustValidate('.contacts__form', {
  errorFieldCssClass: 'field-error',
  errorLabelCssClass: 'label-error',
  successFieldCssClass: 'success-field',
  errorLabelStyle: {
    color: '#FF6972',
  },
  focusInvalidField: false,
});

contactsValidation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Имя слишком короткое',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя слишком длинное',
    },
    {
      rule: 'required',
      errorMessage: 'Введите имя',
    },
  ])

  .addField('#tel', [
    {
      rule: 'minLength',
      value: 11,
      errorMessage: 'Короткий номер',
    },
    {
      rule: 'maxLength',
      value: 11,
      errorMessage: 'Длинный номер',
    },
    {
      rule: 'required',
      errorMessage: 'Введите номер телефона',
    },
    {
      rule: 'customRegexp',
      value: /^\d+$/,
      errorMessage: 'Неверный формат'
    }
  ])

  .addField('#mail', [
    {
      rule: 'required',
      errorMessage: 'Введите почту',
    },
    {
      rule: 'email',
      errorMessage: 'Неверный формат',
    },
  ]);





