const DB = {
  TESTING:'false',
  QUESTIONSCREEN: 1,
  NO: 5,
  TITLE: "Assess Yourself",

  SUBHEADING: 'Choose the correct option.',
 ALLQUESTIONS: [
    {
      heading: `Which of the following can do many things that a dog can do?`, 
      options: [
       `<div>Aibo</div>`,
        `<div>Aido</div>`,
		`<div>Ailo</div>`,
        `<div>Aelo</div>`
      ],
      ans: [0]
    },
    {
      heading: 'Which of these is not a natural thing?', 
      options: [
        `<img src="./assets/images/1.png" alt="">`,
        `<img src="./assets/images/2.png" alt="">`,
        `<img src="./assets/images/3.png" alt="">`,
        `<img src="./assets/images/4.png" alt="">`
      ],
      ans: [2]
    },
    {
      heading: 'Rohan noticed various objects around him. Which of the following did he point to and identify as a natural thing?', 
      options: [
       `<img src="./assets/images/5.png" alt="">`,
        `<img src="./assets/images/6.png" alt="">`,
        `<img src="./assets/images/7.png" alt="">`,
        `<img src="./assets/images/8.png" alt="">`
      ],
      ans: [0]
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
