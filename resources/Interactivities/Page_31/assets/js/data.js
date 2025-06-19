const DB = {
  TESTING:'false',
  QUESTIONSCREEN: 1,
  NO: 5,
  TITLE: "Assess Yourself",

  SUBHEADING: 'Choose the correct option.',
 ALLQUESTIONS: [
    {
      heading: `Anaya wants to see her favourite cartoon movie on computer. Which part of the computer can she use to do it?`, 
      options: [
        `<img src="./assets/images/1.png" alt="">`,
        `<img src="./assets/images/2.png" alt="">`,
        `<img src="./assets/images/3.png" alt="">`,
        `<img src="./assets/images/4.png" alt="">`
      ],
      ans: [1]
    },
    {
      heading: 'Which of these parts helps a computer think and function like a brain?', 
      options: [
        `<img src="./assets/images/5.png" alt="">`,
        `<img src="./assets/images/3.png" alt="">`,
        `<img src="./assets/images/7.png" alt="">`,
        `<img src="./assets/images/8.png" alt="">`
      ],
      ans: [0]
    },
    {
      heading: 'On a computer, you`re playing a game. Which of these tools would you use to select objects on the screen and point at objects?', 
      options: [
        `<img src="./assets/images/3.png" alt="">`,
        `<img src="./assets/images/1.png" alt="">`,
        `<img src="./assets/images/11.png" alt="">`,
        `<img src="./assets/images/8.png" alt="">`
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
