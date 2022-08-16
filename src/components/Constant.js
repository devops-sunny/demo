export const allowedImageTypes = [
  "png",
  "jpg",
  "jpeg",
  "svg",
  "webp",
  "jfif",
  "pjpeg",
  "pjp",
  "gif",
  "avif",
  "apng",
];
export const allowedImages = [
  "image/png",
  "image/jpg",
  "image/jpeg",
  "image/svg",
  "image/webp",
  "image/jfif",
  "image/pjpeg",
  "image/pjp",
  "image/gif",
  "image/avif",
  "image/apng",
];
export const allowedDocTypes = ["pdf", "docx", "xlsx"];
export const allowedDocs = [
  "application/pdf",
  "application/docx",
  "application/xlsx",
];

export const environment = {
  DEVELOPMENT: "development",
  PRODUCTION: "production",
};

export const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const Role = {
  Admin: "Admin",
  Doctors: "Doctors",
  Pharmacists: "Pharmacists",
};

export const statusField = [
  { id: 0, title: "Inactive" },
  { id: 1, title: "Active" },
  { id: 2, title: "Deleted" },
];

export const genderItems = [
  { id: 0, title: "Female" },
  { id: 1, title: "Male" },
  { id: 2, title: "Other" },
];

export const phoneRegExp = RegExp(
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);
