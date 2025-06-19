const DB = {
  TESTING: 'false',
  QUESTIONSCREEN: 1,
  NO: 5,
  TITLE: '',
  SUBHEADING: 'Fill in the blanks with the correct words.',

  ALLQUESTIONS: [
    {
      options: ['At &nbsp; ______________, computers are used to shop for things using the internet.'],
      ans: ['home']
    },
    {
      options: [
        `We use computers to prepare test papers and report cards at &nbsp; ______________ . `
      ],
      ans: ['school']
    },
    {
      options: [
        `Computers are used in the &nbsp; ______________ &nbsp; to maintain records of money and
customers. `
      ],
      ans: ['Bank']
    },
    {
      options: [
        `Computers are used to maintain records of the items in the &nbsp; ______________. `
      ],
      ans: ['shop']
    }
  ],
  ONLOADAUDIO: './assets/audio/sfx.mp3',
  CORRECT: [
    { audio: './assets/audio/Feedback/Correct1.mp3', text: '' }
  ],
  WRONG: [
    { audio: './assets/audio/Feedback/Wrong1.mp3', text: '' }
  ],
  CONCLUSION: {
    audio: '',
    text: ''
  },
  NARRATOR: [
    'animAppear.gif',
    'static.png',
    'speaking.gif',
    'thinking.gif',
    'right.gif',
    'wrong.gif',
    'animDisappear.gif'
  ],

  SCORE: 40,
  TOTSCORE: 200
}
