$(document).ready(function () {
  $('.btn_submit').attr('disabled', true)
  $('.btn_answer').attr('disabled', true)
  let audioIsPlayed = false

  $('body').append(`
    <div class="welldone" style="display: none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1000;">
      <img src="./assets/images/welldone.gif" alt="Well done!">
    </div>
    <div class="tryagain" style="display: none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1000;">
      <img src="./assets/images/tryagain.png" alt="Try Again!" style="width: 300px;">
    </div>
  `)

  const titleBox = $('<div class="titlebox"><h2><span></span></h2></div>')
  $('.subheading').before(titleBox)
  $('.titlebox h2 span').text(DB.TITLE)
  const subheading = DB.SUBHEADING || ''
  $('.subheading p').html(subheading)
  $('.totalmarks').text(DB.TOTSCORE)
  $('.narratorbox').css('opacity', '0')

  const narratorImages = DB.NARRATOR
  const correctAudioFiles = DB.CORRECT
  const wrongAudioFiles = DB.WRONG
  const conclusionAudioFile = DB.CONCLUSION.audio
  const conclusionText = DB.CONCLUSION.text

  let audio = null
  let correctAnswersCount = 0
  const frame = $('.frame')
  const questionSelections = {}

  function updateSubmitButtonState () {
    const allAnswered =
      Object.keys(questionSelections).length === DB.ALLQUESTIONS.length &&
      Object.values(questionSelections).every(val => val)
    $('.btn_submit').prop('disabled', !allAnswered)
  }

  function playAudio (audioFile, callback) {
    if (audio) {
      audio.onended = null
      audio.pause()
    }
    audio = new Audio(audioFile.audio)
    audio.play()
    audio.onplay = function () {
      $('.chatbox').css('opacity', '1')
    }
    audio.onended = callback
  }

  if (DB.TESTING === 'false') {
    const overlay = $('<div>')
      .css({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        zIndex: 9999,
        pointerEvents: 'none'
      })
      .appendTo('body')

    $('.btn').on('click', function () {
      const onloadAudioSrc = DB.ONLOADAUDIO
      const onloadAudioElement = new Audio(onloadAudioSrc)
      overlay.css('pointer-events', 'auto')
      onloadAudioElement.play()
      $('.playbtnbox').css('opacity', '0')
      onloadAudioElement.onended = function () {
        overlay.css('pointer-events', 'none')
        setTimeout(() => {
          $('.narratorbox').css('opacity', '1')
          $('.narratorbox img').attr(
            'src',
            './assets/images/' + narratorImages[6]
          )
        }, 400)
        $('.narratorbox').css('opacity', '1')
        $('.narratorbox img').attr(
          'src',
          './assets/images/' + narratorImages[0]
        )
      }
    })
  } else {
    $('.btn').on('click', function () {
      $('.playbtnbox').css('opacity', '0')
    })
  }

  function displayConclusion () {
    var Conclusion = new Audio(conclusionAudioFile)
    Conclusion.play()
    $('.narratorbox img').attr('src', './assets/images/' + narratorImages[1])
    $('.chattext').text(conclusionText).css('opacity', '1')
  }

  function displayAllQuestions () {
    frame.empty()
    const ul = $('<ul>').addClass('q_list')
    frame.append(ul)

    DB.ALLQUESTIONS.forEach((questionObj, index) => {
      const questionFontStyle = {
        'font-family': questionObj.font,
        'font-size': questionObj.fontSize
      }

      const questionHeading = $('<li>')
        .addClass('question-heading')
        .attr('data-index', index)
      const questionSpan = $('<span>')
        .html(`${questionObj.heading}`)
        .css(questionFontStyle)
      questionHeading.append(questionSpan)
      ul.append(questionHeading)

      questionObj.options.forEach((option, optIndex) => {
        const input = $('<input>').attr({
          type: 'checkbox',
          name: `question${index}`,
          value: optIndex
        })

        const sequenceLabel = String.fromCharCode(97 + optIndex)

        input.on('change', function () {
          $(this)
            .closest('.question-heading')
            .find(`input[name="question${index}"]`)
            .not(this)
            .prop('checked', false)

          questionSelections[index] = !!$(
            `input[name="question${index}"]:checked`
          ).length
          updateSubmitButtonState()
        })

        const optionDiv = $('<div>').addClass('option-item')
        const labelSpan = $('<span>')
          .addClass('option-label')
          .text(sequenceLabel + '. ')
          .css({ 'margin-right': '5px' })
        const optionSpan = $('<span>')
          .html(option)
          .css({
            'font-family': questionObj.font,
            'font-size': `${parseInt(questionObj.fontSize) - 3}px`
          })

        optionDiv.append(labelSpan).append(optionSpan).append(input)
        questionHeading.append(optionDiv)
      })
    })
  }

  function handleGlobalSubmit () {
    score = 0
    correctAnswersCount = 0
    const totalQuestions = $('li.question-heading').length
    const totalMarks = totalQuestions

    DB.ALLQUESTIONS.forEach((questionObj, index) => {
      const selectedValues = $(`input[name="question${index}"]:checked`)
        .map(function () {
          return parseInt($(this).val(), 10)
        })
        .get()

      const correctAnswer = questionObj.ans
      const isCorrect =
        correctAnswer.every(val => selectedValues.includes(val)) &&
        correctAnswer.length === selectedValues.length

      if (isCorrect) {
        score++
        correctAnswersCount++
        $(`input[name="question${index}"]:checked`).each(function () {
          const parentOption = $(this).closest('.option-item')
          parentOption.prepend('<div class="tickimage">&#10003;</div>')
        })
      } else {
        $(`input[name="question${index}"]:checked`).each(function () {
          const parentOption = $(this).closest('.option-item')
          parentOption.prepend('<div class="crossimage">&#10060;</div>')
        })
        $(`input[name="question${index}"]`).data(
          'correct-answers',
          correctAnswer
        )
      }

      $(`input[name="question${index}"]`).attr('disabled', true)
    })

    $('.score').css('opacity', '1')
    $('#mtf-user-score').text(`${score}`)
    $('#mtf-total-marks').text(`${totalMarks}`)
    $('.btn_submit').attr('disabled', true)

    if (correctAnswersCount === totalQuestions) {
      $('.welldone').css('display', 'flex')
      const randomIndex = Math.floor(Math.random() * correctAudioFiles.length)
      playAudio(correctAudioFiles[randomIndex], displayConclusion)
    } else {
      $('.tryagain').css('display', 'flex')
      const randomIndex = Math.floor(Math.random() * wrongAudioFiles.length)
      playAudio(wrongAudioFiles[randomIndex], displayConclusion)
      $('.btn_answer').attr('disabled', false).show()
    }
  }

  $('.btn_answer').on('click', function () {
    DB.ALLQUESTIONS.forEach((questionObj, index) => {
      const correctAnswers = questionObj.ans
      if (correctAnswers) {
        $(`input[name="question${index}"]`)
          .closest('.option-item')
          .find('.crossimage')
          .remove()
        $(`input[name="question${index}"]`).prop('checked', false)
        correctAnswers.forEach(correctValue => {
          const correctInput = $(
            `input[name="question${index}"][value="${correctValue}"]`
          )
          correctInput.prop('checked', true)
          correctInput
            .closest('.option-item')
            .prepend('<div class="tickimage">&#10003;</div>')
        })
      }
    })
    $('.btn_answer').attr('disabled', true)
    $('.tryagain').css('display', 'none')
  })

  displayAllQuestions()

  // Pagination
  let currentPage = 0
  const itemsPerPage = 2

  function showPage (pageIndex) {
    const items = $('li.question-heading')
    items.hide()

    const start = pageIndex * itemsPerPage
    const end = start + itemsPerPage

    for (let i = start; i < end && i < items.length; i++) {
      const $item = $(items[i])
      $item.show()

      const index = parseInt($item.attr('data-index'))
      const questionNumber = index + 1

      const $span = $item.find('> span')
      if ($span.length) {
        const originalText = DB.ALLQUESTIONS[index].heading
        $span.html(`<strong>${questionNumber}.</strong> ${originalText}`)
      }
    }

    $('.btn_prev')
      .prop('disabled', pageIndex === 0)
      .show()
    $('.btn_next')
      .prop('disabled', end >= items.length)
      .show()
  }

  $('.btn_next').on('click', function () {
    currentPage++
    showPage(currentPage)
  })

  $('.btn_prev').on('click', function () {
    currentPage--
    showPage(currentPage)
  })

  showPage(currentPage)

  $('.btn_submit').on('click', handleGlobalSubmit)
  $('.btn_reset').on('click', function () {
    window.location.reload(true)
  })
  $('.btn').on('click', function () {
    $('.playbtnbox').css('display', 'none')
  })
})
