const DB = {
  TESTING:'false',
  QUESTIONSCREEN: 1,
  NO: 5,
  TITLE: "Assess Yourself",

  SUBHEADING: 'Choose the correct option.',
 ALLQUESTIONS: [
    {
      heading: 'Swara wants to edit her birthday party`s video to make it more attractive. Which of the following software should she use to do so?', 
      options: [
        `<div>Paint</div>`,
        `<div>PowerPoint</div>`,
		`<div>OpenShot Video Editor</div>`,
        `<div>Excel</div>`
      ],
      ans: [2]
    },
    {
      heading: 'Which of the following are the special effects that can change the appearance of a photo by modifying its shades and colours?', 
      options: [
        `<div>Filters</div>`,
        `<div>3D effects</div>`,
		`<div>Flipping</div>`,
        `<div>Both a. and b.</div>`
      ],
      ans: [0]
    },
    {
      heading: 'Which of the following features of Photos app is used to make minor changes or touch up blemishes in a photo?', 
      options: [
        `<div>Sunscreen filter</div>`,
        `<div>Appearance</div>`,
		`<div>Crop handle</div>`,
        `<div>Adjustments </div>`
      ],
      ans: [3]
    },
	 {
      heading: 'Which component of OpenShot Video Editor allows to switch between Project Files, Transitions, and Effects.', 
      options: [
        `<div>Function Tabs</div>`,
        `<div>Preview Window</div>`,
		`<div>Edit Toolbar</div>`,
        `<div>None of these</div>`
      ],
      ans: [0]
    },
	 {
      heading: 'You can import media files using .', 
      options: [
        `<div>Ctrl+O</div>`,
        `<div>Ctrl+H</div>`,
		`<div>Ctrl+D</div>`,
        `<div>Ctrl+F</div>`
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
