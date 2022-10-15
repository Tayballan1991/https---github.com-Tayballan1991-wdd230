// Announcement for Meet and Greet on Wednesday to show up Mondays and Tuesdays.
const d = new Date();
let day = d.getDay()

if (day === 1) {
    document.getElementById("meet").style.display = "";
}
else if (day === 4) {
    document.getElementById("meet").style.display = "";
}
else {
    document.getElementById("meet").style.display = "none";
}