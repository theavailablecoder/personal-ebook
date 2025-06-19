const DB = {
  TESTING: 'false',
  QUESTIONSCREEN: 1,
  NO: 5,
  TITLE: '',
  SUBHEADING: 'Answer the following in one or two words:',

  ALLQUESTIONS: [
    {
      options: ['&nbsp;How many curved sides does a circle have? &nbsp; ______________ &nbsp;'],
      ans: ['One line']
    },
    {
      options: [
        `&nbsp;What does a set of letters arranged from left to right in a word grid make? &nbsp; ______________ &nbsp;`
      ],
      ans: ['Row']
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
