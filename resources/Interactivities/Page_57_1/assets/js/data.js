const DB = {
  TESTING: 'false',
  QUESTIONSCREEN: 1,
  NO: 5,
  TITLE: '',
  SUBHEADING: 'Fill in the blanks with the correct words.',

  ALLQUESTIONS: [
    {
      options: ['&nbsp;______________ &nbsp; arrow helps to move down to see more options.'],
      ans: ['Down']
    },
    {
      options: [
        `&nbsp;______________ &nbsp; tool is used to fill a closed area.`
      ],
      ans: ['Fill']
    },
    {
      options: [
        `&nbsp;______________ &nbsp; arrow helps move up to see more options.`
      ],
      ans: ['Up']
    },
    {
      options: [
        `&nbsp;______________ &nbsp; tool is used to draw freehand with different brush shapes. `
      ],
      ans: ['Paint']
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
