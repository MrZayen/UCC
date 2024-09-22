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
      getClasses: ["#","#","remove"],
      getLogo: images.icDefault,
      getLogoInfo: {getType: "image"},
      getInformation: {getTitle: "Bill Book Earnest", getAmount: "₹500"}
    }],
    getAmount: "₹600"
  }];
export default expenses;