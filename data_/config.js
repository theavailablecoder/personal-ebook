const PRODUCTION_MODE = true;
const appdb = {
  config: {
    subject: "",
    class: "Class 1",
    id: "riz_569",
    totalPages: 94,
    bookWidth: 1259,
    bookHeight: 1646,
    prePages: [
      { pageUrl: "cover.jpg", pageName: "Cover" },
      { pageUrl: "blank.jpg", pageName: "Blank" },
    ],
  },

  ebook: {
    toc: {
      icon: "fa-book",
      menu: "Table of Contents",
      link: "content",
      data: [
	    {
          page: 7,
          title: "1. Computer—My Best Friend",
        },
		{
          page: 14,
          title: "2. Parts of a Computer",
        },
        {
          page: 22,
          title: "3. Parts of a Computer",
        },
		{
          page: 28,
          title: "4. Using a Keyboard and a Mouse",
        },
		{
          page: 41,
          title: "5. Introduction to Paint",
        },
		{
          page: 53,
          title: "6. Introduction to Tux Paint",
        },
		{
          page: 66,
          title: "7. Reasoning and Critical Thinking",
        },
		{
          page: 72,
          title: "8. Introduction to ScratchJr",
        }, 
        {
          page: 80,
          title: "9. AI Around Us",
        },      
      ],
    },
    Animations: {
      icon: "fa-video-camera",
      menu: "Animations",
      link: "video",
      data: [
        {
          path: "resources/animations/ch_1_1.mp4",
          title: "Computer—My Best Friend",
          size: "850x480",
          page: 7,
          chapter: "Chapter 1",
        },
		{
          path: "resources/animations/ch_1_2.mp4",
          title: "Natural and Human-made Things",
          size: "850x480",
          page: 8,
          chapter: "Chapter 1",
        },
		{
          path: "resources/animations/ch_1_3.mp4",
          title: "Computer—A Smart Machine",
          size: "850x480",
          page: 9,
          chapter: "Chapter 1",
        },
		
		
		
		
		
		
		
		
		{
          path: "resources/animations/ch_2_1.mp4",
          title: "Uses of a Computer",
          size: "850x480",
          page: 14,
          chapter: "Chapter 2",
        },
		{
          path: "resources/animations/ch_2_2.mp4",
          title: "Features of a Computer",
          size: "850x480",
          page: 15,
          chapter: "Chapter 2",
        },
		{
          path: "resources/animations/ch_2_3.mp4",
          title: "Role of Computer in Daily Life",
          size: "850x480",
          page: 15,
          chapter: "Chapter 2",
        },
        {
          path: "resources/animations/ch_2_4.mp4",
          title: "Places where Computers are used",
          size: "850x480",
          page: 16,
          chapter: "Chapter 2",
        },
		
		
		

		
		
		
		{
          path: "resources/animations/ch_3_1.mp4",
          title: "Parts of a Computer",
          size: "850x480",
          page: 22,
          chapter: "Chapter 3",
        },
		{
          path: "resources/animations/ch_3_2.mp4",
          title: "Main Parts of a Computer",
          size: "850x480",
          page: 23,
          chapter: "Chapter 3",
        },
        {
          path: "resources/animations/ch_3_3.mp4",
          title: "Additional Parts of a Computer",
          size: "850x480",
          page: 24,
          chapter: "Chapter 3",
        },
		
		
		
		
		
		
		
		{
          path: "resources/animations/ch_4_1.mp4",
          title: "Using a Keyboard and a Mouse",
          size: "850x480",
          page: 28,
          chapter: "Chapter 4",
        },
		{
          path: "resources/animations/ch_4_2.mp4",
          title: "Keyboard",
          size: "850x480",
          page: 29,
          chapter: "Chapter 4",
        },
		{
          path: "resources/animations/ch_4_3.mp4",
          title: "Types of Keys",
          size: "850x480",
          page: 29,
          chapter: "Chapter 4",
        },
        {
          path: "resources/animations/ch_4_4.mp4",
          title: "Mouse",
          size: "850x480",
          page: 31,
          chapter: "Chapter 4",
        },
        {
          path: "resources/animations/ch_4_5.mp4",
          title: "Parts of a Mouse",
          size: "850x480",
          page: 32,
          chapter: "Chapter 4",
        },
        {
          path: "resources/animations/ch_4_6.mp4",
          title: "Holding a Mouse",
          size: "850x480",
          page: 32,
          chapter: "Chapter 4",
        },
        {
          path: "resources/animations/ch_4_7.mp4",
          title: "Actions of a Mouse",
          size: "850x480",
          page: 33,
          chapter: "Chapter 4",
        },
		
		
		
		
		
		
		
		
		{
          path: "resources/animations/ch_5_1.mp4",
          title: "Introduction to Paint",
          size: "850x480",
          page: 41,
          chapter: "Chapter 5",
        },
		{
          path: "resources/animations/ch_5_2.mp4",
          title: "Opening Paint",
          size: "850x480",
          page: 42,
          chapter: "Chapter 5",
        },
		{
          path: "resources/animations/ch_5_3.mp4",
          title: "Parts of the Paint Window",
          size: "850x480",
          page: 43,
          chapter: "Chapter 5",
        },
		{
          path: "resources/animations/ch_5_4.mp4",
          title: "Drawing Different Shapes",
          size: "850x480",
          page: 44,
          chapter: "Chapter 5",
        },
        {
          path: "resources/animations/ch_5_5.mp4",
          title: "Tools of Paint",
          size: "850x480",
          page: 45,
          chapter: "Chapter 5",
        },
		
		
		
		
		
		
		
		{
          path: "resources/animations/ch_6_1.mp4",
          title: "Introduction to Tux Paint",
          size: "850x480",
          page: 53,
          chapter: "Chapter 6",
        },
		{
          path: "resources/animations/ch_6_2.mp4",
          title: "Tux Paint",
          size: "850x480",
          page: 54,
          chapter: "Chapter 6",
        },
		{
          path: "resources/animations/ch_6_3.mp4",
          title: "Starting Tux Paint",
          size: "850x480",
          page: 54,
          chapter: "Chapter 6",
        },
		{
          path: "resources/animations/ch_6_4.mp4",
          title: "Components of the Tux Paint Window",
          size: "850x480",
          page: 55,
          chapter: "Chapter 6",
        },
		{
          path: "resources/animations/ch_6_5.mp4",
          title: "Using the Paint Tool",
          size: "850x480",
          page: 56,
          chapter: "Chapter 6",
        },
        {
          path: "resources/animations/ch_6_6.mp4",
          title: "Using the Eraser Tool",
          size: "850x480",
          page: 57,
          chapter: "Chapter 6",
        },
        {
          path: "resources/animations/ch_6_7.mp4",
          title: "Using the Lines Tool",
          size: "850x480",
          page: 58,
          chapter: "Chapter 6",
        },
        {
          path: "resources/animations/ch_6_8.mp4",
          title: "Using the Stamp Tool",
          size: "850x480",
          page: 58,
          chapter: "Chapter 6",
        },
        {
          path: "resources/animations/ch_6_9.mp4",
          title: "Saving a File in Tux Paint",
          size: "850x480",
          page: 59,
          chapter: "Chapter 6",
        },
        {
          path: "resources/animations/ch_6_10.mp4",
          title: "Opening a Saved File",
          size: "850x480",
          page: 59,
          chapter: "Chapter 6",
        },
        {
          path: "resources/animations/ch_6_11.mp4",
          title: "Quitting Tux Paint",
          size: "850x480",
          page: 60,
          chapter: "Chapter 6",
        },
		
		
		
		
		
		
		
		{
          path: "resources/animations/ch_7_1.mp4",
          title: "Reasoning and Critical Thinking",
          size: "850x480",
          page: 66,
          chapter: "Chapter 7",
        },
		{
          path: "resources/animations/ch_7_2.mp4",
          title: "Working with Shapes",
          size: "850x480",
          page: 67,
          chapter: "Chapter 7",
        },
		{
          path: "resources/animations/ch_7_3.mp4",
          title: "Recognising Patterns",
          size: "850x480",
          page: 67,
          chapter: "Chapter 7",
        },
		{
          path: "resources/animations/ch_7_4.mp4",
          title: "Word Search",
          size: "850x480",
          page: 68,
          chapter: "Chapter 7",
        },
		{
          path: "resources/animations/ch_7_5.mp4",
          title: "Directions",
          size: "850x480",
          page: 68,
          chapter: "Chapter 7",
        },
		
		
		
		
		
		{
          path: "resources/animations/ch_8_1.mp4",
          title: "Introduction to ScratchJr",
          size: "850x480",
          page: 72,
          chapter: "Chapter 8",
        },
		{
          path: "resources/animations/ch_8_2.mp4",
          title: "Advantages of ScratchJr",
          size: "850x480",
          page: 73,
          chapter: "Chapter 8",
        },
		{
          path: "resources/animations/ch_8_3.mp4",
          title: "Starting the ScratchJr",
          size: "850x480",
          page: 73,
          chapter: "Chapter 8",
        },
		{
          path: "resources/animations/ch_8_4.mp4",
          title: "Components of ScratchJr Window",
          size: "850x480",
          page: 74,
          chapter: "Chapter 8",
        },
        {
          path: "resources/animations/ch_8_5.mp4",
          title: "Adding Text",
          size: "850x480",
          page: 75,
          chapter: "Chapter 8",
        },
        {
          path: "resources/animations/ch_8_6.mp4",
          title: "Adding a New Character",
          size: "850x480",
          page: 75,
          chapter: "Chapter 8",
        },
        {
          path: "resources/animations/ch_8_7.mp4",
          title: "Changing the Background",
          size: "850x480",
          page: 76,
          chapter: "Chapter 8",
        },





        {
          path: "resources/animations/ch_9_1.mp4",
          title: "AI Around Us",
          size: "850x480",
          page: 80,
          chapter: "Chapter 9",
        },
        {
          path: "resources/animations/ch_9_2.mp4",
          title: "What is Artificial Intelligence?",
          size: "850x480",
          page: 81,
          chapter: "Chapter 9",
        },
        {
          path: "resources/animations/ch_9_3.mp4",
          title: "Goals of Artificial Intelligence",
          size: "850x480",
          page: 81,
          chapter: "Chapter 9",
        },
        {
          path: "resources/animations/ch_9_4.mp4",
          title: "AI and Us",
          size: "850x480",
          page: 81,
          chapter: "Chapter 9",
        },
		


     
      ],
    },
    "Interactivities.": {
      icon: "fa-users",
      menu: "Activities",
      link: "iframe",
      data: [
        {
          path: "resources/interactivities/tf/chap_1_tf_1.html",
          title: "Chapter 1, Activity 1",
          size: "1024x1200",
          page: 10,
        },	
         {
          path: "resources/interactivities/mtf/chap_1_mtf_1.html",
          title: "Chapter 1, Activity 2",
          size: "1024x1050",
          page: 12,
        },	
		
		
		
		
		
		
		
		{
          path: "resources/interactivities/mcq/chap_2_mcq_1.html",
          title: "Chapter 2, Activity 1",
          size: "1024x700",
          page: 17,
        },	
		{
          path: "resources/interactivities/tf/chap_2_tf_2.html",
          title: "Chapter 2, Activity 2",
          size: "1024x750",
          page: 18,
        },	
        {
          path: "resources/interactivities/fib/chap_2_fib_3.html",
          title: "Chapter 2, Activity 3",
          size: "1024x550",
          page: 18,
        },	
		{
          path: "resources/interactivities/fib/chap_2_fib_4.html",
          title: "Chapter 2, Activity 4",
          size: "1024x550",
          page: 18,
        },	




        {
          path: "resources/interactivities/mcq/chap_3_mcq_1.html",
          title: "Chapter 3, Activity 1",
          size: "1024x1200",
          page: 25,
        },	
		{
          path: "resources/interactivities/tf/chap_3_tf_2.html",
          title: "Chapter 3, Activity 2",
          size: "1024x750",
          page: 26,
        },	
        {
          path: "resources/interactivities/fib/chap_3_fib_3.html",
          title: "Chapter 3, Activity 3",
          size: "1024x550",
          page: 26,
        },	
		{
          path: "resources/interactivities/fib/chap_3_fib_4.html",
          title: "Chapter 3, Activity 4",
          size: "1024x550",
          page: 26,
        },	
        
        


        {
          path: "resources/interactivities/mcq/chap_4_mcq_1.html",
          title: "Chapter 4, Activity 1",
          size: "1024x1300",
          page: 35,
        },	
		{
          path: "resources/interactivities/tf/chap_4_tf_2.html",
          title: "Chapter 4, Activity 2",
          size: "1024x750",
          page: 36,
        },	
        {
          path: "resources/interactivities/fib/chap_4_fib_3.html",
          title: "Chapter 4, Activity 3",
          size: "1024x550",
          page: 36,
        },	
		{
          path: "resources/interactivities/fib/chap_4_fib_4.html",
          title: "Chapter 4, Activity 4",
          size: "1024x550",
          page: 36,
        },





        {
          path: "resources/interactivities/mcq/chap_5_mcq_1.html",
          title: "Chapter 5, Activity 1",
          size: "1024x1100",
          page: 49,
        },	
		{
          path: "resources/interactivities/tf/chap_5_tf_2.html",
          title: "Chapter 5, Activity 2",
          size: "1024x750",
          page: 50,
        },	
        {
          path: "resources/interactivities/fib/chap_5_fib_3.html",
          title: "Chapter 5, Activity 3",
          size: "1024x550",
          page: 50,
        },	
		{
          path: "resources/interactivities/fib/chap_5_fib_4.html",
          title: "Chapter 5, Activity 4",
          size: "1024x550",
          page: 50,
        },






        {
          path: "resources/interactivities/mcq/chap_6_mcq_1.html",
          title: "Chapter 6, Activity 1",
          size: "1024x750",
          page: 61,
        },	
		{
          path: "resources/interactivities/tf/chap_6_tf_2.html",
          title: "Chapter 6, Activity 2",
          size: "1024x750",
          page: 62,
        },	
        {
          path: "resources/interactivities/fib/chap_6_fib_3.html",
          title: "Chapter 6, Activity 3",
          size: "1024x550",
          page: 62,
        },	
		{
          path: "resources/interactivities/fib/chap_6_fib_4.html",
          title: "Chapter 6, Activity 4",
          size: "1024x550",
          page: 62,
        },







        {
          path: "resources/interactivities/mcq/chap_7_mcq_1.html",
          title: "Chapter 7, Activity 1",
          size: "1024x900",
          page: 70,
        },	
		{
          path: "resources/interactivities/fib/chap_7_fib_2.html",
          title: "Chapter 7, Activity 2",
          size: "1024x500",
          page: 70,
        },	






        {
          path: "resources/interactivities/mcq/chap_8_mcq_1.html",
          title: "Chapter 8, Activity 1",
          size: "1024x700",
          page: 77,
        },	
		{
          path: "resources/interactivities/tf/chap_8_tf_2.html",
          title: "Chapter 8, Activity 2",
          size: "1024x750",
          page: 77,
        },	
        {
          path: "resources/interactivities/fib/chap_8_fib_3.html",
          title: "Chapter 8, Activity 3",
          size: "1024x600",
          page: 78,
        },	
		{
          path: "resources/interactivities/fib/chap_8_fib_4.html",
          title: "Chapter 8, Activity 4",
          size: "1024x550",
          page: 78,
        },





        {
          path: "resources/interactivities/mcq/chap_9_mcq_1.html",
          title: "Chapter 9, Activity 1",
          size: "1024x900",
          page: 84,
        },	
		{
          path: "resources/interactivities/tf/chap_9_tf_2.html",
          title: "Chapter 9, Activity 2",
          size: "1024x750",
          page: 84,
        },	








        
		
		
		
		
		
		
		
      ],
    },
    // "Games.": {
    //   icon: "fa-users",
    //   menu: "Games",
    //   link: "iframe",
    //   data: [
    // {
    //   path: "",
    //   title: "Coming Soon",
    //   size: "1024x800",
    //   page: "",
    // },
    // {
    //   path: "resources/interactivities/fib/chap_2_fib_1.html",
    //   title: "Chapter 1, Activity A",
    //   size: "1100x900",
    //   page: 22,
    // },
    //   ],
    // },
    // "Test Paper Generator.": {
    //   icon: "fa-users",
    //   menu: "Test Paper Generator",
    //   link: "iframe",
    //   data: [
    // {
    //   path: "",
    //   title: "Coming Soon",
    //   size: "1024x800",
    //   page: "",
    // },
    // {
    //   path: "resources/interactivities/fib/chap_2_fib_1.html",
    //   title: "Chapter 1, Activity A",
    //   size: "1100x900",
    //   page: 22,
    // },
    //   ],
    // },

    zother: [],
  },
};

var TOOLS_OPTIONS = {
  sidebar: {
    activate: true,
    id: "tool-sidebar",
  },
  notes: {
    activate: true,
    id: "ebook-addnote",
  },
  zoomin: {
    activate: true,
    id: "tool-zoom-in",
  },
  zoomout: {
    activate: true,
    id: "tool-zoom-out",
  },
  mode: {
    activate: true,
    id: "tool-bookmode-single-double",
  },
  fullscreen: {
    activate: true,
    id: "tool-fullscreen",
  },
  assetmode: {
    activate: true,
    id: "app-btn-toggleres",
  },
  spotlight: {
    activate: true,
    id: "app-btn-spotlight",
  },
  backgroundmusic: {
    activate: true,
    id: "tool-backgroundmusic",
  },
  pen: {
    activate: true,
    id: "app-tool-pen",
  },
  highlighter: {
    activate: true,
    id: "app-tool-highlight",
  },
  thumbnail: {
    activate: true,
    id: "app-tool-thumbnail",
  },
  glossary: {
    activate: false,
    id: "app-btn-glossary",
  },
  bookmarkslist: {
    activate: true,
    id: "app-list-bookmark",
  },
  highlightsList: {
    activate: true,
    id: "app-list-highlights",
  },
  notesList: {
    activate: true,
    id: "app-list-notes",
  },
};
