'use strict'

$(document).ready(function () {
  $('a[href^="#"]').on('click', function (event) {
    var target = $($(this).attr('href'))
    var marginTop = 10
    if (target.length) {
      event.preventDefault()
      $('html, body').animate({
        scrollTop: target.offset().top - marginTop
      }, 1000)
    }
  })

  $('.acc h3').click(function () {
    $(this).hasClass('selected') ? $(this).addClass('minus') : $(this).removeClass('minus')
  })
  $(window).on('resize', function () {
    var viewportWidth = $(window).width()
    if (viewportWidth < 768) {
      $('.about-sec div.row').removeClass('vertical-align')
    } else {
      $('.about-sec div.row').addClass('vertical-align')
    }
  })
  if ($(window).width() < 768) {
    $('#about div.vertical-align').removeClass('vertical-align')
  }
})

window.requestAnimationFrame = window.requestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.msRequestAnimationFrame
  || function (f) { setTimeout(f, 1000 / 60) }

var elem = Array.from(document.querySelectorAll('.elem div'))
var elemTop = elem.map(function (el) {
  return parseInt(el.getBoundingClientRect().top)
})

function parallaxElem () {
  var scrolltop = window.pageYOffset
  elem[0].style.top = elemTop[0] + scrolltop * 0.047 + 'px'
  elem[1].style.top = elemTop[1] + scrolltop * 0.045 + 'px'
  elem[2].style.top = elemTop[2] + scrolltop * 0.045 + 'px'
  elem[3].style.top = elemTop[3] + scrolltop * 0.044 + 'px'
  elem[4].style.top = elemTop[4] + scrolltop * 0.042 + 'px'
  elem[5].style.top = elemTop[5] + scrolltop * 0.043 + 'px'
  elem[6].style.top = elemTop[6] + scrolltop * 0.035 + 'px'
  elem[7].style.top = elemTop[7] + scrolltop * 0.048 + 'px'
  elem[8].style.top = elemTop[8] + scrolltop * 0.05 + 'px'
  elem[9].style.top = elemTop[9] + scrolltop * 0.049 + 'px'

  var rotate1 = 'rotate(' + scrolltop * 0.1 + 'deg) translateZ(500px)'
  var rotate2 = 'rotate(' + scrolltop * 0.2 + 'deg) translateZ(1500px)'
  var rotate3 = 'rotate(' + scrolltop * 0.15 + 'deg) translateZ(3000px)'

  elem[0].style.transform = rotate1
  elem[2].style.transform = rotate2
  elem[3].style.transform = rotate3
  elem[4].style.transform = rotate1
  elem[9].style.transform = rotate3
  elem[8].style.transform = rotate1
}

function morph () {
  elem.forEach(function (el) {
    var c = el.classList
    var isDia = c.contains('dia')
    var isCirc = c.contains('circ')
    var isRect = c.contains('rect')
    var isB = c.contains('b')
    var isR = c.contains('r')
    var isY = c.contains('y')
    c.remove('anim')
    if (isDia) {
      c.remove('dia')
      c.add('circ', 'anim')
    }
    if (isCirc) {
      c.remove('circ')
      c.add('rect', 'anim')
    }
    if (isRect) {
      c.remove('rect')
      c.add('dia', 'anim')
    }
    if (isR) {
      c.remove('r')
      c.add('y')
    }
    if (isY) {
      c.remove('y')
      c.add('b')
    }
    if (isB) {
      c.remove('b')
      c.add('r')
    }
  })
}

setInterval(morph, 3000)
window.addEventListener('scroll', function () {
  window.requestAnimationFrame(parallaxElem)
}, false)

var card = document.querySelector('.card')
var logo = document.querySelector('.footer-logo')

var count = 0
card.addEventListener('mouseleave', function () {
  card.classList.remove('flipped')
  logo.style.width = '120px'
  count = 0
})

logo.addEventListener('click', function () {
  count === 4 ? card.classList.add('flipped') : count += 1; logo.style.width = 120 - 10 * count + 'px'
})
