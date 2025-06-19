const DB = {
  TESTING:'false',
  QUESTIONSCREEN: 1,
  NO: 5,
  TITLE: "Assess Yourself",

  SUBHEADING: 'Choose the correct option.',
 ALLQUESTIONS: [
    {
      heading: `Look at the picture below. Which of the following is not a natural thing?      
      <img src='./assets/images/bigimage.png' class='bigimage'>
      `, 
      options: [
        `<div>Boy</div>`,
        `<div>Girl</div>`,
        `<div>Car</div>`,
        `<div>Tree</div>`
      ],
      ans: [2]
    },
    {
      heading: 'Which of these is a human-made thing?', 
      options: [
        `<img src="./assets/images/2.png" alt="">`,
        `<img src="./assets/images/3.png" alt="">`,
        `<img src="./assets/images/4.png" alt="">`,
        `<img src="./assets/images/5.png" alt="">`
      ],
      ans: [2]
    },
    {
      heading: 'Which of these things is gifted by nature to us?', 
      options: [
        `<img src="./assets/images/6.png" alt="">`,
        `<img src="./assets/images/7.png" alt="">`,
        `<img src="./assets/images/8.png" alt="">`,
        `<img src="./assets/images/9.png" alt="">`
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
