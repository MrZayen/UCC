const getAvatar = ["S", "M", "T", "W", "T", "F", "S"];
const getAvatarColor = ["#FCC834", "#AF5CF6", "#ED675C", "#4DCDE6", "#FF63B7", "#FA8F3D", "#5CB973", "#ED675C"];
const getColor = [];
const getDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const getImages = {
  system: "./images/ic_default.jpg",
  brahmin: "./images/ic_brahmin.jpg",
  dhak: "./images/ic_dhak.jpg",
  pandal: "./images/ic_pandal.jpg",
  soundSystemOne: "./images/ic_default.jpg",
  soundSystemTwo: "./images/ic_default.jpg",
  transportation: "./images/ic_transportation.jpg"
};
const getTitle = {
  brahmin: "",
  dhak: "পূজার ঢাকের বাবদ",
  pandal: "পূজার প্যান্ডেলের বাবদ",
  soundSystemOne: "",
  soundSystemTwo: "",
  transportation: "যাতায়াত খরচ"
};
const getBtnClasses = {
  system: "#",
  brahmin: "#",
  dhak: "#",
  pandal: "#",
  soundSystemOne: "#",
  soundSystemTwo: "#",
  transportation: "#",
  //Button Active Status 
  systemIsShow: "#",
  brahminIsShow: "#",
  dhakIsShow: "#",
  pandalIsShow: "#",
  soundSystemOneIsShow: "#",
  soundSystemTwoIsShow: "#",
  transportationIsShow: "#"
};

const getSubCardClasses = {
  default: "#",
  clicked: "subCard"
};
const getSubCardBtnClasses = {
  default: "#",
  clicked: "show"
};
const getSubCardId = {
  default: "subCard",
  dhak: "dhak"
};


//Place Your Code Is Here
const expenses = [{
  getId: "02092024",
  getAvatar: getAvatar[1],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[3]},
  getInformation: {getDay: getDay[1], getDate: "2 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "পূজার রশিদ বায়না", getAmount: 500}
  },{
    getClasses: [getBtnClasses.transportation, getBtnClasses.transportationIsShow, "remove"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.transportation, getAmount: 100}
  }],
  getAmount: 500 + 100
},

{
  getId: "05092024",
  getAvatar: getAvatar[4],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[5]},
  getInformation: {getDay: getDay[4], getDate: "5 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "রশিদের অবশিষ্ট টাকা", getAmount: 3970}
  },{
    getClasses: [getBtnClasses.transportation, getBtnClasses.transportationIsShow, "remove"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.transportation, getAmount: 230}
  }],
  getAmount: 3970 + 230
},

{
  getId: "06092024",
  getAvatar: getAvatar[5],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[3]},
  getInformation: {getDay: getDay[5], getDate: "6 Sep, 2024"},
  getExpenses: [{
    getId: getSubCardId.dhak,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "remove"],
    getImage: getImages.dhak,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "পূজার ঢাকি বায়না", getAmount: 500}
  }],
  getAmount: 500
},

{
  getId: "07092024",
  getAvatar: getAvatar[6],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[0]},
  getInformation: {getDay: getDay[6], getDate: "7 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.pandal, getBtnClasses.pandalIsShow, "remove"],
    getImage: getImages.pandal,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "পূজার প্যান্ডেল বায়না", getAmount: 500}
  }],
  getAmount: 500
},

{
  getId: "08092024",
  getAvatar: getAvatar[0],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[1]},
  getInformation: {getDay: getDay[0], getDate: "8 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "খাতা এবং কলম", getAmount: 170}
  },{
    getClasses: [getBtnClasses.transportation, getBtnClasses.transportationIsShow, "remove"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "থানার মিটিং যাতায়াত", getAmount: 120}
  }],
  getAmount: 170 + 120
},

{
  getId: "11092024",
  getAvatar: getAvatar[3],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[4]},
  getInformation: {getDay: getDay[3], getDate: "11 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.brahmin, getBtnClasses.brahminIsShow, "remove"],
    getImage: getImages.brahmin,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "পূজার পুরোহিত বায়না", getAmount: 200}
  }],
  getAmount: 200
},

{
  getId: "12092024",
  getAvatar: getAvatar[4],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[2]},
  getInformation: {getDay: getDay[4], getDate: "12 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: "./images/ic_manik-ghose.jpg",
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "মানিক ঘোষের সার্টিফিকেট", getAmount: 1500}
  },{
    getClasses: [getBtnClasses.transportation, getBtnClasses.transportationIsShow, "#"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.transportation, getAmount: 150}
  },{
    getClasses: [getBtnClasses.soundSystemOne, getBtnClasses.soundSystemOneIsShow, "#"],
    getImage: getImages.soundSystemOne,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "সাউন্ড সিস্টেম (১) বায়না", getAmount: 500}
  },{
    getClasses: [getBtnClasses.transportation, getBtnClasses.transportationIsShow, "remove"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.transportation, getAmount: 250}
  }],
  getAmount: 1500 + 150 + 500 + 250
},

{
  getId: "13092024",
  getAvatar: getAvatar[5],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[6]},
  getInformation: {getDay: getDay[5], getDate: "13 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "বৈদ্যুতিক বিল", getAmount: 4550}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: "./images/ic_document.jpg",
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "জেরক্স, ফর্ম ও অন্যান্য", getAmount: 200}
  },{
    getClasses: [getBtnClasses.transportation, getBtnClasses.transportationIsShow, "remove"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.transportation, getAmount: 130}
  }],
  getAmount: 4550 + 200 + 130
},

{
  getId: "14092024",
  getAvatar: getAvatar[6],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[0]},
  getInformation: {getDay: getDay[6], getDate: "14 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: "./images/ic_document.jpg",
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "পারমিশনের জেরক্স, প্রিন্ট", getAmount: 130}
  },{
    getClasses: [getBtnClasses.transportation, getBtnClasses.transportationIsShow, "remove"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.transportation, getAmount: 120}
  }],
  getAmount: 130 + 120
},

{
  getId: "15092024",
  getAvatar: getAvatar[0],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[3]},
  getInformation: {getDay: getDay[0], getDate: "15 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "পারমিশন কম্পিউটার চার্জ", getAmount: 400}
  },{
    getClasses: [getBtnClasses.transportation, getBtnClasses.transportationIsShow, "remove"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.transportation, getAmount: 115}
  }],
  getAmount: 400 + 115
},

{
  getId: "16092024",
  getAvatar: getAvatar[1],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[4]},
  getInformation: {getDay: getDay[1], getDate: "16 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: "./images/ic_tiffin.jpg",
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "বাড়ি কালেকশনের টিফিন", getAmount: 50}
  }],
  getAmount: 50
},

{
  getId: "19092024",
  getAvatar: getAvatar[4],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[1]},
  getInformation: {getDay: getDay[4], getDate: "19 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getVideo: "./videos/ic_orchestra.mp4",
    getLogoInfo: {getType: "vid"},
    getInformation: {getTitle: "অর্কেস্ট্রা বায়না", getAmount: 1000}
  },{
    getClasses: [getBtnClasses.transportation, getBtnClasses.transportationIsShow, "#"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "থানা থেকে চেক আনতে", getAmount: 200}
  },
  {
    getClasses: [getBtnClasses.soundSystemTwo, getBtnClasses.soundSystemTwoIsShow, "remove"],
    getImage: getImages.soundSystemTwo,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "সাউন্ড সিস্টেম (২) বায়না", getAmount: 100}
  }],
  getAmount: 1000 + 200 + 100
},

{
  getId: "20092024",
  getAvatar: getAvatar[5],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[6]},
  getInformation: {getDay: getDay[5], getDate: "20 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.transportation, getBtnClasses.transportationIsShow, "remove"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "স্কুলে রশিদ দেওয়ার জন্য", getAmount: 50}
  }],
  getAmount: 50
},

{
  getId: "24092024",
  getAvatar: getAvatar[2],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[2]},
  getInformation: {getDay: getDay[2], getDate: "24 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.transportation, getBtnClasses.transportationIsShow, "remove"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "রাস্তার কন্ডাক্টরের বাড়ি যেতে", getAmount: 200}
  }],
  getAmount: 200
},

{
  getId: "25092024",
  getAvatar: getAvatar[3],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[3]},
  getInformation: {getDay: getDay[3], getDate: "25 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: "./images/ic_orchestra-banner.jpg",
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "অর্কেস্ট্রা ব্যানার ২ টা", getAmount: 300}
  },{
    getClasses: [getBtnClasses.transportation, getBtnClasses.transportationIsShow, "remove"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "ব্যাংকে চেক জমা দিতে", getAmount: 150}
  }],
  getAmount: 300 + 150
},

{
  getId: "26092024",
  getAvatar: getAvatar[4],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[4]},
  getInformation: {getDay: getDay[4], getDate: "26 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: "./images/ic_dg-set.jpg",
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "DG-সেট বায়না", getAmount: 500}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "ব্যানারের ফ্রেম তৈরি", getAmount: 150}
  }],
  getAmount: 500 + 150
},

{
  getId: "28092024",
  getAvatar: getAvatar[6],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[0]},
  getInformation: {getDay: getDay[6], getDate: "28 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "স্কুলের দোলনা টি তুলতে", getAmount: 300}
  }],
  getAmount: 300
},

{
  getId: "29092024",
  getAvatar: getAvatar[0],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[6]},
  getInformation: {getDay: getDay[0], getDate: "29 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "ক্লাবের ফ্যান, বাল্ব, তার", getAmount: 1600}
  }],
  getAmount: 1600
},

{
  getId: "04102024",
  getAvatar: getAvatar[5],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[1]},
  getInformation: {getDay: getDay[5], getDate: "4 Oct, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "নতুন রশিদ ছাপাতে", getAmount: 450}
  },{
    getClasses: [getBtnClasses.transportation, getBtnClasses.transportationIsShow, "remove"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.transportation, getAmount: 100}
  }],
  getAmount: 450 + 100
},

{
  getId: "06102024",
  getAvatar: getAvatar[0],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[3]},
  getInformation: {getDay: getDay[0], getDate: "6 Oct, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.pandal, getBtnClasses.pandalIsShow, "#"],
    getImage: getImages.pandal,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.pandal, getAmount: 6000}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "চুন, নীল, ব্রাশ, ফেভিকল", getAmount: 400}
  },{
    getClasses: [getBtnClasses.transportation, getBtnClasses.transportationIsShow, "#"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "দমকলের মিটিং যাতায়াত", getAmount: 70}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "গাছ, রাস্তা রং করতে টিফিন", getAmount: 50}
  }],
  getAmount: 6000 + 400 + 70 + 50
},

{
  getId: "07102024",
  getAvatar: getAvatar[1],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[5]},
  getInformation: {getDay: getDay[1], getDate: "7 Oct, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "কীটনাশক", getAmount: 120}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "দয়াল দার স্প্রেচার্জ", getAmount: 50}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "পাড়ার জঙ্গল পরিষ্কার", getAmount: 100}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "ক্লাব ঘরের নতুন তালা", getAmount: 80}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "বিকৃত নোট (৫০০) বদলাতে", getAmount: 50}
  }],
  getAmount: 120 + 50 + 100 + 80 + 50
},

{
  getId: "08102024",
  getAvatar: getAvatar[2],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[4]},
  getInformation: {getDay: getDay[2], getDate: "8 Oct, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "ধুতি, শাড়ি  ইত্যাদি", getAmount: 3470}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "ফলমূল, ডাব, পদ্ম", getAmount: 1650}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "সর্ষের তেল", getAmount: 950}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "পান সুপারি", getAmount: 150}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "কোষাধ্যক্ষের জন্য ব্যাগ", getAmount: 200}
  },{
    getClasses: [getBtnClasses.transportation, getBtnClasses.transportationIsShow, "remove"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.transportation, getAmount: 620}
  }],
  getAmount: 3470 + 1650 + 950 + 150 + 200 + 620
},

{
  getId: "09102024",
  getAvatar: getAvatar[3],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[6]},
  getInformation: {getDay: "দুর্গাষষ্ঠী", getDate: "9 Oct, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.dhak, getBtnClasses.dhakIsShow, "#"],
    getImage: getImages.dhak,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.dhak, getAmount: 2500}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "পূজার জন্য খরচ", getAmount: 820}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "আতশবাজি বা পটকা", getAmount: 150}
  },{
    getClasses: [getBtnClasses.transportation, getBtnClasses.transportationIsShow, "#"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.transportation, getAmount: 130}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "রাতের খাবার ( Staff )", getAmount: 120}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "রাতের খরচ ( Duty )", getAmount: 200}
  }],
  getAmount: 2500 + 820 + 150 + 130 + 120 + 200
},

{
  getId: "10102024",
  getAvatar: getAvatar[4],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[2]},
  getInformation: {getDay: "দুর্গাসপ্তমী", getDate: "10 Oct, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "পূজার জন্য খরচ", getAmount: 700}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "রাতের খাবার ( Staff )", getAmount: 130}
  }],
  getAmount: 700 + 130
},

{
  getId: "11102024",
  getAvatar: getAvatar[5],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[1]},
  getInformation: {getDay: "মহানবমী", getDate: "11 Oct, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "টিফিন বাটি এবং খাতা", getAmount: 3645}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "সুই, সুতো, বেলুন, মোমবাতি", getAmount: 290}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "পূজার জন্য খরচ", getAmount: 150}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "সদস্য / পুলিশ টিফিন", getAmount: 430}
  }],
  getAmount: 3645 + 290 + 150 + 430
},

{
  getId: "12102024",
  getAvatar: getAvatar[6],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[3]},
  getInformation: {getDay: "বিজয়াদশমী", getDate: "12 Oct, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.dhakIsShow, getBtnClasses.dhakIsShow, "#"],
    getImage: getImages.dhak,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.dhak, getAmount: 6000}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getVideo: "./videos/ic_orchestra.mp4",
    getLogoInfo: {getType: "vid"},
    getInformation: {getTitle: "অর্কেস্ট্রার বাবদ", getAmount: 4500}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: "./images/ic_dg-set.jpg",
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "DG Set-এর তেল", getAmount: 3220}
  },{
    getClasses: [getBtnClasses.transportation, getBtnClasses.transportationIsShow, "#"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.transportation, getAmount: 100}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "পূজার জন্য খরচ", getAmount: 100}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "পুলিশ প্রশাসনের টিফিন", getAmount: 1000}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "জলের বোতল ও জিলাপি", getAmount: 600}
  }],
  getAmount: 6000 + 4500 + 3220 + 100 + 100 + 1000 + 600
},

{
  getId: "13102024",
  getAvatar: getAvatar[0],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[6]},
  getInformation: {getDay: "বিসর্জন", getDate: "13 Oct, 2024"},
  getExpenses: [{
    getId: getSubCardId.dhak,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "#"],
    getImage: getImages.dhak,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.dhak, getAmount: 5500}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "আতশবাজি এবং আবির", getAmount: 2350}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "জেনারেটর-এর তেল", getAmount: 500}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "সাউন্ড সিস্টেম পৌঁছে দিতে", getAmount: 250}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "বিসর্জনের অন্নান্য খরচ", getAmount: 800}
  }],
  getAmount: 5500 + 2350 + 500 + 250 + 800
}];


export default expenses;