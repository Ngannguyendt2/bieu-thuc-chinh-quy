function checkPassword(str) {
   let regexp=/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;
   return regexp.test(str);
}
console.log(checkPassword("AA"));