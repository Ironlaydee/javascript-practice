let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse === true) {
  if (givesCertificate === true) {
    generateCertificate()
  }
}

//Easiest way to write the above is statement
//if (hasCompletedCourse === true && givesCertificate === true) {
//      generateCertificate()
//}

function generateCertificate() {
  console.log("Generateing certificate ....")
}