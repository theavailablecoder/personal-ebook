const DB = {
  TESTING: 'false',
  QUESTIONSCREEN: 1,
  NO: 5,
  TITLE: '',
  SUBHEADING: 'Answer the following in one or two words:',

  ALLQUESTIONS: [
    {
      options: ['&nbsp;What is the name of the place where the characters move and do actions? &nbsp; ______________ &nbsp;'],
      ans: ['Programming Area']
    },
    {
      options: [
        `&nbsp;Which button is used to select a background for the stage? &nbsp; ______________ &nbsp;`
      ],
      ans: ['Change Background']
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
