const DB = {
  TESTING: 'false',
  QUESTIONSCREEN: 1,
  NO: 5,
  TITLE: '',
  SUBHEADING: 'Answer the following in one or two words:',

  ALLQUESTIONS: [
    {
      options: ['&nbsp;Which tool will you use to start a new drawing in Tux Paint? &nbsp; ______________ &nbsp;'],
      ans: ['New Tool']
    },
    {
      options: [
        `&nbsp;Which tool is used to add text and titles to the drawings? &nbsp; ______________ &nbsp;`
      ],
      ans: ['Text Tool']
    },
    {
      options: [
        `&nbsp;Name the tool that helps you to close Tux Paint. &nbsp; ______________ &nbsp;`
      ],
      ans: ['Quit Tool']
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
