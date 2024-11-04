$(document).ready(function(){

  //поделиться
  $('.first__share').on('click', (function(){
    $('.popup-share').addClass('is-open')
    $('.overlay').addClass('is-open')
  }))
  $('.close').on('click', (function(){
    $('.popup-share').removeClass('is-open')
    $('.overlay').removeClass('is-open')
  }))
  $('.overlay').on('click', (function(){
    $('.popup-share').removeClass('is-open')
    $('.overlay').removeClass('is-open')
  }))

  //переключатель соц. сетей
  $('.feedback-form__networks .item, .project__networks .item').on('click', function() {
    $(this).closest('.feedback-form__networks, .project__networks').find('.item').removeClass('is-show');
    $(this).addClass('is-show');
});

  //валидация формы
  const form = document.getElementById('feedback-form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
      $('#tel').unmask();
      $('#tel').attr('placeholder', 'Введите телефон');
      event.target.reset();
    }
  })

  const inputs = document.querySelectorAll('.input-item');
  const phoneMask = '+375 (00) 000-00-00';

  //при потере фокуса показываем ошибку, если значение пустое или неправильное
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (!input.value) {
            showError(input);
        }
        else {
            clearError(input);
        }
    });
  });

  function validateForm() {
    let isValid = true
    inputs.forEach(input => {
        if (!input.value) {
            showError(input);
            isValid = false;
        } else if (input.name === 'tel' && !validatePhone()) {
            showError(input);
            isValid = false;
      } 
        else {
            clearError(input);
        }
    })
    return isValid;
  }

  function validatePhone() {
    let isValid = true
    const phoneValue = $('#tel').val();
    const isComplete = phoneValue.length === phoneMask.length;
    if (phoneValue === '') {
      $('#tel').unmask();
      $('#tel').attr('placeholder', 'Введите телефон');
    } else if (!isComplete) {
        showError($('#tel').get(0));
        isValid = false;
    } else {
        clearError($('#tel').get(0));
    }
    return isValid;
  }
  $('#tel').on('focus', function() {
    $(this).mask(phoneMask);
    $(this).attr('placeholder', phoneMask);
  });
  $('#tel').on('blur', function() {
    const phoneValue = $(this).val();
    const isComplete = phoneValue.length === phoneMask.length;
    if (phoneValue === '') {
        $(this).unmask();
        $(this).attr('placeholder', 'Введите телефон');
    } else if (!isComplete) {
        showError($(this).get(0));
    } else {
        clearError($(this).get(0));
    }
  });

  function showError(input) {
    input.classList.add('error');
  }

  function clearError(input) {
    input.classList.remove('error');
  };
})

new Swiper('.image-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  simulateTouch: false,
  loop: true,
  resizeObserver: true,
  slidesPerView: 'auto',
});
new Swiper('.project-slider', {
  simulateTouch: false,
  loop: true,
  pagination: {
    el: '.swiper-pagination-projects',
    clickable: true,
    renderBullet: function (index, className){
      return '<span class="'+className+'">'+(index+1)+'</span>'
    }
  }
});
new Swiper('.video-slider', {
  simulateTouch: false,
  loop: true,
  resizeObserver: true,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination-videos',
    clickable: true,
  }
});

$(document).ready(function () {
  //для мобильного header
  $('img[src*="burger-icon.svg"]').click(function () {
    $('.mobile-menu__button').css('display', 'none');
    $('.mobile-menu__inner').addClass('is-open');
    $('body').css('overflow','hidden');
  })
  $('img[src*="burger-cross.svg"], .mobile-menu__content .content__item, .btn-header-mobile').click(function () {
    $('.mobile-menu__button').css('display', 'flex');
    $('.mobile-menu__inner').removeClass('is-open');
    $('body').css('overflow','');
  })

});


