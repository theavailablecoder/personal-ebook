const DB = {
  TESTING:'false',
  QUESTIONSCREEN: 1,
  NO: 5,
  TITLE: "Assess Yourself",

  SUBHEADING: 'Choose the correct option.',
 ALLQUESTIONS: [
    {
      heading: `Which of the following fingers we keep on the left mouse button?`, 
      options: [
       `<div>Ring finger</div>`,
        `<div>Little finger</div>`,
		`<div>Middle finger</div>`,
        `<div>Index finger</div>`
      ],
      ans: [3]
    },
    {
      heading: 'Which of the following keys is the longest key on the keyboard?', 
      options: [
        `<img src="./assets/images/1.png" alt="">`,
        `<img src="./assets/images/2.png" alt="">`,
        `<img src="./assets/images/3.png" alt="">`,
        `<img src="./assets/images/4.png" alt="">`
      ],
      ans: [1]
    },
    {
      heading: 'Which of the following is the arrow on the monitor?', 
      options: [
       `<div>Scroll</div>`,
        `<div>Single-clicking</div>`,
		`<div>Mouse pointer</div>`,
        `<div>Double-clicking</div>`
      ],
      ans: [2]
    },
	 {
      heading: 'Which of the following devices helps us point at objects and select items on the monitor?', 
      options: [
        `<img src="./assets/images/7.png" alt="">`,
        `<img src="./assets/images/8.png" alt="">`,
        `<img src="./assets/images/1.png" alt="">`,
        `<img src="./assets/images/4.png" alt="">`
      ],
      ans: [1]
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
