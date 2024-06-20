// // Prevent Right Click
// document.oncontextmenu = () => {
//     alert("Don't Try Right Click")
//     return false
// }

// // Other Ways

// document.onkeydown = (e) => {
//     // Prevent F12 Key
//     if (e.key === "F12") {
//         alert("Don't Try To Inspect Element")
//         return false
//     }
//     // Ctrl + U  Prevent Source code
//     if (e.ctrlKey && (e.key === "u" || e.key === "U")) {
//         alert("Don't Try To View Source code");
//         return false;
//     }

//     // Ctrl + Shift + i  Prevent Developer Panel
//     if (e.ctrlKey && e.shiftKey && (e.key === "i" || e.key === "I")) {
//         alert("Don't Try To Open Developer Panel");
//         return false;
//     }

//     // Ctrl + Shift + i  Prevent Element Panel
//     if (e.ctrlKey && e.shiftKey && (e.key === "c" || e.key === "C")) {
//         alert("Don't Try To Open Element Panel");
//         return false;
//     }
    
//     // Ctrl + Shift + i  Prevent Console Panel
//     if (e.ctrlKey && e.shiftKey && (e.key === "j" || e.key === "J")) {
//         alert("Don't Try To Open Console Panel");
//         return false;
//     }
// }


