const getAvatar = ["S", "M", "T", "W", "T", "F", "S"];
const getAvatarColor = ["#FCC834", "#AF5CF6", "#ED675C", "#4DCDE6", "#FF63B7", "#FA8F3D", "#5CB973", "#ED675C"];
const getColor = [];
const getDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const getImages = {
  system: "./images/ic_default.jpg",
  dhak: "./images/ic_default.jpg",
  pandal: "./images/ic_pandal.jpg",
  transportation: "./images/ic_default.jpg"
};
const getTitle = {
  transportation: "যাতায়াত খরচ"
};
const getBtnClasses = {
  system: "#",
  //Button Active Status 
  systemIsShow: "#"
};


//Template
/*{
  getId: "",
  getAvatar: getAvatar[],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[]},
  getInformation: {getDay: getDay[], getDate: ""},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle[], getAmount: }
  }],
  getAmount: 
p}*/


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
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.transportation, getAmount: 100}
  }],
  getAmount: 600
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
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.transportation, getAmount: 230}
  }],
  getAmount: 4200
},

{
  getId: "06092024",
  getAvatar: getAvatar[5],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[3]},
  getInformation: {getDay: getDay[5], getDate: "6 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
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
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
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
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "থানার মিটিং যাতায়াত", getAmount: 120}
  }],
  getAmount: 290
},

{
  getId: "11092024",
  getAvatar: getAvatar[3],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[4]},
  getInformation: {getDay: getDay[3], getDate: "11 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: "./images/ic_brahmin.jpg",
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
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "মানিক ঘোষের সার্টিফিকেট", getAmount: 1500}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.transportation, getAmount: 150}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "সাউন্ড সিস্টেম (১) বায়না", getAmount: 500}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.transportation, getAmount: 250}
  }],
  getAmount: 2400
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
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "জেরক্স, ফর্ম ও অন্যান্য", getAmount: 200}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.transportation, getAmount: 130}
  }],
  getAmount: 4880
},

{
  getId: "14092024",
  getAvatar: getAvatar[6],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[0]},
  getInformation: {getDay: getDay[6], getDate: "14 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "পারমিশনের জেরক্স, প্রিন্ট", getAmount: 130}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.transportation, getAmount: 120}
  }],
  getAmount: 250
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
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.transportation, getAmount: 115}
  }],
  getAmount: 515
},

{
  getId: "16092024",
  getAvatar: getAvatar[1],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[4]},
  getInformation: {getDay: getDay[1], getDate: "16 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
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
    getImage: getImages.system,
    getLogoInfo: {getType: "img"},
    getInformation: {getTitle: "অর্কেস্ট্রা বায়না", getAmount: 1000}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "থানা থেকে চেক আনতে", getAmount: 200}
  },
  {
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "সাউন্ড সিস্টেম (২) বায়না", getAmount: 100}
  }],
  getAmount: 1300
},

{
  getId: "20092024",
  getAvatar: getAvatar[5],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[6]},
  getInformation: {getDay: getDay[5], getDate: "20 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
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
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
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
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "অর্কেস্ট্রা ব্যানার ২ টা", getAmount: 300}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "ব্যাংকে চেক জমা দিতে", getAmount: 150}
  }],
  getAmount: 450
},

{
  getId: "26092024",
  getAvatar: getAvatar[4],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[4]},
  getInformation: {getDay: getDay[4], getDate: "26 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "DG-সেট বায়না", getAmount: 500}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.transportation,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "ব্যানারের ফ্রেম তৈরি", getAmount: 150}
  }],
  getAmount: 650
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
}];


export default expenses;