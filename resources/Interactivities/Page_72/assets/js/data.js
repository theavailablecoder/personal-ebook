const DB = {
  TESTING:'false',
  QUESTIONSCREEN: 1,
  NO: 5,
  TITLE: "Assess Yourself",

  SUBHEADING: 'Choose the correct option.',
 ALLQUESTIONS: [
    {
      heading: `Which of the following displays different types of blocks based on their function and use?`, 
      options: [
       `<div>Blocks Palette</div>`,
        `<div>Change Background</div>`,
		`<div>Green Flag</div>`,
        `<div>Plus Button</div>`
      ],
      ans: [1]
    },
    {
      heading: 'Which of the following resets all the characters to their starting positions on the stage?', 
      options: [
        `<img src="./assets/images/1.png" alt="">`,
        `<img src="./assets/images/2.png" alt="">`,
        `<img src="./assets/images/4.png" alt="">`,
        `<img src="./assets/images/3.png" alt="">`
      ],
      ans: [3]
    },
    {
      heading: 'Which button is used to run a Scratch project?', 
      options: [
       `<img src="./assets/images/1.png" alt="">`,
        `<img src="./assets/images/3.png" alt="">`,
        `<img src="./assets/images/2.png" alt="">`,
        `<img src="./assets/images/4.png" alt="">`
      ],
      ans: [2]
    }
   
    
  ],
  ONLOADAUDIO: './assets/audio/sfx.mp3',
  CORRECT: [
    { audio: './assets/audio/Feedback/Correct1.mp3', text: 'oÉWÒûiÉ AcNåû!' }
    
  ],
  WRONG: [
    { audio: './assets/audio/Feedback/Wrong1.mp3', text: 'aÉsÉiÉ!' }
   
  ],
  CONCLUSION: {
    audio: '',
    text: ''
  },
  NARRATOR: [
    'animAppear.gif',
    'Talking.gif',
    'Thinking.gif',
    'Right.gif',
    'Wrong.gif',
    'animDisappear.gif',
    'static.png'
  ],
  RADIOBTN: 'true',
  CHECKBOX: 'false',
  SCORE: 40,
  TOTSCORE: 200
}
