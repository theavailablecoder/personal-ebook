const DB = {
  TESTING:'false',
  QUESTIONSCREEN: 1,
  NO: 5,
  TITLE: "Assess Yourself",

  SUBHEADING: 'Choose the correct option.',
 ALLQUESTIONS: [
    {
      heading: `What does a set of letters arranged from up to down in a word grid make?`, 
      options: [
       	
        `<div>Row</div>`,
		`<div>Column</div>`,
		`<div>Diagonal</div>`,
        `<div>Pattern</div>`
      ],
      ans: [1]
    },
    {
      heading: 'Identify the following shape and choose the correct option:<br><img src="./assets/images/1.png" alt="">', 
      options: [
	  `<div>Triangle</div>`,
        `<div>Square</div>`,
		`<div>Rectangle</div>`,
        `<div>Circle</div>`
      ],
      ans: [0]
    },
    {
      heading: 'Which of the following has four sides and only the opposite sides are equal?', 
      options: [
       `<div>Triangle</div>`,
        `<div>Square</div>`,
		`<div>Rectangle</div>`,
        `<div>Circle</div>`
      ],
      ans: [2]
    },
	 {
      heading: 'What will be the next number in the given series?<br>5, 15, 25, 35, 45, 55, 65, .................', 
      options: [
        `<div>70</div>`,
        `<div>75</div>`,
		`<div>80</div>`,
        `<div>85</div>`
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
