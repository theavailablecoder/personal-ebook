const DB = {
  TESTING:'false',
  QUESTIONSCREEN: 1,
  NO: 5,
  TITLE: "Assess Yourself",

  SUBHEADING: 'Choose the correct option.',
 ALLQUESTIONS: [
    {
      heading: `Which of the following pictures shows that we are listening to rhymes or songs on a
computer?`, 
      options: [
        `<img src="./assets/images/1.png" alt="">`,
        `<img src="./assets/images/2.png" alt="">`,
        `<img src="./assets/images/3.png" alt="">`,
        `<img src="./assets/images/4.png" alt="">`
      ],
      ans: [0]
    },
    {
      heading: 'Which of the following is the correct action that we can do with a computer?.', 
      options: [
        `<img src="./assets/images/5.png" alt="">`,
        `<img src="./assets/images/6.png" alt="">`,
        `<img src="./assets/images/7.png" alt="">`,
        `<img src="./assets/images/8.png" alt="">`
      ],
      ans: [0]
    },
    {
      heading: 'In which place do we use the computer to create and study the medical reports of the patients?', 
      options: [
        `<img src="./assets/images/9.png" alt=""><div>In Banks</div>`,
        `<img src="./assets/images/10.png" alt=""><div>At School</div>`,
        `<img src="./assets/images/11.png" alt=""><div>In Hospitals</div>`,
        `<img src="./assets/images/12.png" alt=""><div>In Shops</div>`
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
