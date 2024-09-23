const colors = ["#FCC834","#AF5CF6", "#ED675C", "#4DCDE6", "#FF63B7", "#FA8F3D", "#5CB973", "#ED675C"];
const images = {
  icDefault: "./images/ic_default.jpg",
  icCow: "./images/ic_cow.jpg",
  icVillage: "./images/ic_village.jpeg"
};
const expenses = [
  {
    getId: "02092024",
    getLogo: "M",
    getLogoInfo: {getType: "text", getColor: colors[3]},
    getInformation: {getDay: "Monday", getDate: "2 Sep, 2024"},
    getExpenses: [{
      getClasses: ["#","#","#"],
      getLogo: images.icDefault,
      getLogoInfo: {getType: "image"},
      getInformation: {getTitle: "Bill Book Earnest", getAmount: "₹500"}
    },
    {
      getClasses: ["#","#","remove"],
      getLogo: images.icDefault,
      getLogoInfo: {getType: "image"},
      getInformation: {getTitle: "Transportation Costs", getAmount: "₹100"}
    }],
    getAmount: "₹600"
  },
  {
    getId: "03092024",
    getLogo: "T",
    getLogoInfo: {getType: "text", getColor: colors[7]},
    getInformation: {getDay: "Tuesday", getDate: "3 Sep, 2024"},
    getExpenses: [{
      getClasses: ["#","#","remove"],
      getLogo: images.icDefault,
      getLogoInfo: {getType: "image"},
      getInformation: {getTitle: "Idol Earnest", getAmount: "₹500"}
    }],
    getAmount: "₹500"
  },
  {
    getId: "05092024",
    getLogo: "T",
    getLogoInfo: {getType: "text", getColor: colors[5]},
    getInformation: {getDay: "Thursday", getDate: "5 Sep, 2024"},
    getExpenses: [{
      getClasses: ["#","#","#"],
      getLogo: images.icDefault,
      getLogoInfo: {getType: "image"},
      getInformation: {getTitle: "Bill Book Earnest", getAmount: "₹3970"}
    },
    {
      getClasses: ["#","#","remove"],
      getLogo: images.icDefault,
      getLogoInfo: {getType: "image"},
      getInformation: {getTitle: "Transportation Costs", getAmount: "₹230"}
    }],
    getAmount: "₹4200"
  },
  {
    getId: "06092024",
    getLogo: "F",
    getLogoInfo: {getType: "text", getColor: colors[3]},
    getInformation: {getDay: "Friday", getDate: "6 Sep, 2024"},
    getExpenses: [{
      getClasses: ["#","#","remove"],
      getLogo: images.icDefault,
      getLogoInfo: {getType: "image"},
      getInformation: {getTitle: "Dhak Earnest", getAmount: "₹500"}
    }],
    getAmount: "₹500"
  },
  {
    getId: "07092024",
    getLogo: "S",
    getLogoInfo: {getType: "text", getColor: colors[0]},
    getInformation: {getDay: "Saturday", getDate: "7 Sep, 2024"},
    getExpenses: [{
      getClasses: ["#","#","remove"],
      getLogo: images.icDefault,
      getLogoInfo: {getType: "image"},
      getInformation: {getTitle: "Pandal Earnest", getAmount: "₹500"}
    }],
    getAmount: "₹500"
  }
  
  
  ];
export default expenses;