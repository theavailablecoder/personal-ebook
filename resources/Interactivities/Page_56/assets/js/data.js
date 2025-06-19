const DB = {
  TESTING:'false',
  QUESTIONSCREEN: 1,
  NO: 5,
  TITLE: "Assess Yourself",

  SUBHEADING: 'Choose the correct option.',
 ALLQUESTIONS: [
    {
      heading: `What can you do with Tux Paint?`, 
      options: [
       `<div>Play music</div>`,
        `<div>Draw and paint</div>`,
		`<div>Watch videos</div>`,
        `<div>Send emails</div>`
      ],
      ans: [1]
    },
    {
      heading: 'By pressing which key do you finish typing text in Tux Paint?', 
      options: [
        `<img src="./assets/images/1.png" alt="">`,
        `<img src="./assets/images/2.png" alt="">`,
        `<img src="./assets/images/3.png" alt="">`,
        `<img src="./assets/images/4.png" alt="">`
      ],
      ans: [0]
    },
    {
      heading: 'You want to add extra effects to your Tux Paint drawing to give it a more interesting look. Which tool would you use?', 
      options: [
       `<img src="./assets/images/5.png" alt="">`,
        `<img src="./assets/images/6.png" alt="">`,
        `<img src="./assets/images/7.png" alt="">`,
        `<img src="./assets/images/8.png" alt="">`
      ],
      ans: [2]
    },
	 {
      heading: '................... is the blank area on which you can draw.', 
      options: [
        `<div>Toolbox</div>`,
        `<div>Colors Palette</div>`,
		`<div>Help Area</div>`,
        `<div>Drawing canvas</div>`
      ],
      ans: [3]
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
