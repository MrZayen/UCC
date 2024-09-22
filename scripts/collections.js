const colors = ["#FCC834","#AF5CF6", "#ED675C", "#4DCDE6", "#FF63B7", "#FA8F3D", "#5CB973", "#ED675C"];
const images = {
  icDefault: "./images/ic_default.jpg",
  icCow: "./images/ic_cow.jpg",
  icVillage: "./images/ic_village.jpeg"
};
const collections = [
  {
    getId: "05092024",
    getLogo: "T",
    getLogoInfo: {getType: "text", getColor: colors[5]},
    getInformation: {getDay: "Thursday", getDate: "5 Sep, 2024"},
    getCollections: [{
      getClasses: ["#","#","remove"],
      getLogo: images.icDefault,
      getLogoInfo: {getType: "image"},
      getInformation: {getTitle: "Remaining Amount", getAmount: "₹3500"}
    }],
    getAmount: "₹3500"
  },
  {
    getId: "07092024",
    getLogo: "S",
    getLogoInfo: {getType: "text", getColor: colors[3]},
    getInformation: {getDay: "Saturday", getDate: "7 Sep, 2024"},
    getCollections: [{
      getClasses: ["#","#","remove"],
      getLogo: images.icDefault,
      getLogoInfo: {getType: "image"},
      getInformation: {getTitle: "Water Tank", getAmount: "₹5000"}
    }],
    getAmount: "₹5000"
  },
  {
    getId: "12092024",
    getLogo: "T",
    getLogoInfo: {getType: "text", getColor: colors[1]},
    getInformation: {getDay: "Thursday", getDate: "12 Sep, 2024"},
    getCollections: [{
      getClasses: ["#","#","remove"],
      getLogo: images.icCow,
      getLogoInfo: {getType: "image"},
      getInformation: {getTitle: "Cow Collection", getAmount: "₹50"}
    }],
    getAmount: "₹50"
  },
  {
    getId: "15092024",
    getLogo: "S",
    getLogoInfo: {getType: "text", getColor: colors[7]},
    getInformation: {getDay: "Sunday", getDate: "15 Sep, 2024"},
    getCollections: [{
      getClasses: ["#","#","#"],
      getLogo: images.icCow,
      getLogoInfo: {getType: "image"},
      getInformation: {getTitle: "Cow Collection", getAmount: "₹800"}
    },
    {
      getClasses: ["#","#","remove"],
      getLogo: images.icVillage,
      getLogoInfo: {getType: "image"},
      getInformation: {getTitle: "Village Collection", getAmount: "₹300"}
    }],
    getAmount: "₹1100"
  }
  
  ];

export default collections;