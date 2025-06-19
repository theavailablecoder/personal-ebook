let score = 0
var audio = new Audio()
var start = false
let gamestart = false
let totalAns = 0
var soundplaying = false
let len = CONFIG.QUES.length
totalAns = len
$(document).ready(function () {
  $('.butsubmit').prop('disabled', true)
  $('.butanswer').prop('disabled', true)
  $('.title').html(CONFIG.ACT_TITLE)
  $('#heading h5').html(CONFIG.HEADING)

  $('#overlay').on('click', function () {
    $('#overlay').fadeOut()
    $('.start').removeClass('hidden')
    gamestart = true
    playAudio(['sfx'], enableClick)
    setTimeout(() => {
      $('.start').addClass('hidden')
      $('.thinking').removeClass('hidden')
    }, 1500)
  })
  loadElements()

  $('.butsubmit').on('click', function () {
    $('.drags img').draggable('disable')
    $('.score').css('display', 'flex')
    $('#mtf-user-score').text(`${score}`)
    $('#mtf-total-marks').text(`${totalAns}`)
    let allAnswered = true
    $('.tickimage').css('opacity', '1')
    $('.crossimage').css('opacity', '1')
    // Loop through each question to check if it has been answered correctly
    $('.drops').each(function () {
      if (!$(this).hasClass('solved')) {
        allAnswered = false
      }
    })

    if (allAnswered) {
      // If all answers are correct, play the correct audio
      playAudio('right', checkforNext)
    } else {
      // If not all answers are correct, play the incorrect audio
      playAudio('wrong')
      $('.butanswer').prop('disabled', false)
    }
    $('.butsubmit').prop('disabled', true)
  })

  $('.butanswer').on('click', function () {
    fillCorrectAnswers()
    $('.butanswer').prop('disabled', true)
    $('.butsubmit').prop('disabled', true)
  })
})

function enableClick () {
  if (audio) audio.pause()
  start = true
  startDrag()
}

function startDrag () {
  enableDrag()

  $('.drops').droppable({
    accept: '.drags img',
    drop: function (event, ui) {
      let id = Number($(this).attr('id').replace('Ques_part_', ''))

      let currAns = CONFIG.QUES[id - 1].ans
      let userAns = $(ui.draggable)
        .parent()
        .attr('class')
        .replace('drags ans', '')

      let _img = new Image()

      _img.src = $(ui.draggable).attr('src')

      $(this).html(_img)

      if (currAns == userAns && !$(this).hasClass('solved')) {
        $(this).addClass('solved')
        score++
        console.log(`Score updated: ${score}`)
        $(this).append('<span class="tickimage">&#10003;</span>')
      } else {
        $(this).append('<span class="crossimage">&#10060;</span>')
      }

      $(ui.draggable).css({ top: '0px', left: '0px' })

      let allFilled = true
      $('.drops').each(function () {
        if ($(this).is(':empty')) {
          allFilled = false
          return false
        }
      })

      if (allFilled) {
        $('.butsubmit').prop('disabled', false)
      } else {
        $('.butsubmit').prop('disabled', true)
      }
    }
  })
}

function onright () {
  playAudio('right', checkforNext)
}

function onwrong () {
  playAudio('wrong')
}

function checkforNext () {
  if (score < totalAns) {
  } else {
  }
}

function enableDrag () {
  $('.drags img').draggable({
    containment: '.main',
    revert: function (is_valid_drop) {
      if (!is_valid_drop) {
        removeStyle($(this))

        if ($(this).hasClass('alreadyDropped')) {
          console.log('drop already')
        } else {
          console.log('to be droped')
        }

        return true
      } else {
        console.log('valid drop')
      }
    },
    revertDuration: 600,
    start: function (event, ui) {},
    stop: function () {
      $('.drops').css('zIndex', 999)
    },
    drag: function (event, ui) {}
  })
}

function removeStyle (ele) {
  setTimeout(() => {
    ele.removeAttr('style')
  }, 1000)
}

function loadElements () {
  let len = CONFIG.QUES.length
  totalAns = len
  let str = '<ul class="all_ques">'

  for (let i = 0; i < len; i++) {
    str += '<li id="Ques_' + (i + 1) + '">'

    // Add the number before the question
    str += `<span class="number">${i + 1}. </span>`
    str += '<span class="k_font quess">' + CONFIG.QUES[i].ques + '</span>'
    str += '<span class="drops" id="Ques_part_' + (i + 1) + '"></span>'
    str += '</li>'
  }

  str += '</ul>'

  $('.left_area').html(str)

  $('.drag_area').html(
    '<div class="drags anstrue"><img src="img/tick.png"></div><div class="drags ansfalse"><img src="img/cross.png"></div>'
  )
}

function fillCorrectAnswers () {
  $('.drops').each(function (index) {
    let correctAns = CONFIG.QUES[index].ans
    let dropbox = $(this)

    if (!dropbox.hasClass('solved')) {
      let _img = new Image()

      if (correctAns === 'true') {
        _img.src = 'img/tick.png'
      } else {
        _img.src = 'img/cross.png'
      }

      dropbox.html(_img)
      dropbox.addClass('solved')
    }
  })
  $('.tickimage').css('display', 'none')
  $('.butsubmit').prop('disabled', false) // Enable submit button after filling answers
}

function mascot (view) {
  $('#mascot').attr('src', 'img/' + view + '.gif')
}

function playAudio (audioname, fun, arg) {
  soundplaying = true

  if (typeof audioname == 'string') {
    sound = [audioname]
    playAudio(sound, fun, arg)
  } else if (typeof audioname == 'object') {
    let sounds = audioname.shift()

    if (sounds == 'activity') {
    } else {
      newSound = sounds.toLowerCase()

      if (
        newSound.indexOf('pos') != -1 ||
        newSound.indexOf('correct') != -1 ||
        newSound.indexOf('right') != -1
      ) {
        mascot('welldone')
        $('body').append(
          '<div class="welldone"><img src="./img/welldone.gif" alt="Well Done"></div>'
        )
      } else if (
        newSound.indexOf('neg') != -1 ||
        newSound.indexOf('wrong') != -1
      ) {
        mascot('tryagain')
        $('body').append(
          '<div class="tryagain"><img src="./img/tryagain.gif" alt="Try Again"></div>'
        )
      } else {
        if (newSound != 'numpad') {
        }
      }
    }

    if (audio) audio.pause()
    audio = new Audio()

    $(audio).attr({
      src: 'audio/' + sounds + '.mp3',
      type: 'audio/mp3'
    })

    audio.play()

    audio.onended = event => {
      if (sounds == 'numpad') {
      } else {
        if (sounds == 'conclusion') {
        } else {
        }
      }
      if (fun != null) {
        soundplaying = false
        if (!audioname.length) {
          if (arg == null) fun()
          else fun(arg)
        } else playAudio(audioname, fun, arg)
      }
    }
  }
}
