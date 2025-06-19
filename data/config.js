const PRODUCTION_MODE = true;
const appdb = {
  config: {
    subject: "",
    class: "Class 1",
    id: "riz_569",
    totalPages: 22,
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
          page: 3,
          title: "1. One Stormy Day",
        },
        {
          page: 12,
          title: "2. The Talking Cave",
        },
      ],
    },
    Animations: {
      icon: "fa-film",
      menu: "Animations",
      link: "video",
      data: [
        {
          path: "resources/animations/ch_1_1.mp4",
          title: "One Stormy Day",
          size: "850x480",
          page: 3,
          chapter: "Chapter 1",
        },

        {
          path: "resources/animations/ch_2_1.mp4",
          title: "The Talking Cave",
          size: "850x480",
          page: 12,
          chapter: "Chapter 2",
        },
      ],
    },
    "Interactivities.": {
      icon: "fa-pencil",
      menu: "Activities",
      link: "iframe",
      data: [
        {
          path: "resources/interactivities/tf/chap_1_tf_1.html",
          title: "Chapter 1, Activity A",
          size: "1024x800",
          page: 6,
        },
        {
          path: "resources/interactivities/tf/chap_1_tf_2.html",
          title: "Chapter 1, Activity B",
          size: "1024x720",
          page: 6,
        },

        {
          path: "resources/interactivities/mtf/chap_2_mtf_1.html",
          title: "Chapter 2, Activity A",
          size: "1024x700",
          page: 14,
        },
        {
          path: "resources/interactivities/fib/chap_2_fib_2.html",
          title: "Chapter 2, Activity B",
          size: "1024x750",
          page: 14,
        },
      ],
    },

    "Test Generator.": {
      icon: "fa-file-text",
      menu: "Test Generator",
      link: "iframe",
      data: [
        {
          path: "resources/test_generator/index.html",
          title: "Test Generator",
          size: "1100x700",
          //page: 00,
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
