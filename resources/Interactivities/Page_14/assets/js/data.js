const DB = {
  TESTING: 'false',
  QUESTIONSCREEN: 1,
  NO: 5,
  TITLE: '',
  SUBHEADING: 'Identify the following things, write their names, and also match them with their use.',

  ALLQUESTIONS: [
    {
      options: ['<img src="./assets/images/image1.png"> ______________ &nbsp; sharpens a pencil'],
      ans: ['Sharpener']
    },
    {
      options: ['<img src="./assets/images/image2.png"> ______________ &nbsp; stitches our clothes'],
      ans: ['Sewing machine']
    },
    {
      options: ['<img src="./assets/images/image3.png"> ______________ &nbsp; keeps food fresh'],
      ans: ['Refrigerator']
    },
    {
      options: ['<img src="./assets/images/image4.png"> ______________ &nbsp; keeps room cool'],
      ans: ['Air conditioner']
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
