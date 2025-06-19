const DB = {
  TESTING: 'false',
  QUESTIONSCREEN: 1,
  NO: 5,
  TITLE: '',
  SUBHEADING: 'Fill in the blanks with the correct words.',

  ALLQUESTIONS: [
    {
      options: ['&nbsp;______________ &nbsp; is an actor which acts on the stage.'],
      ans: ['Character']
    },
    {
      options: [
        `&nbsp;______________ &nbsp; is used to return to the Home page.`
      ],
      ans: ['Home Button']
    },
    {
      options: [
        `&nbsp;______________ &nbsp; is used to add characters.`
      ],
      ans: ['Plus Button']
    },
    {
      options: [
        `&nbsp;______________ &nbsp; is where you connect programming blocks to create scripts.`
      ],
      ans: ['Programming Area']
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
