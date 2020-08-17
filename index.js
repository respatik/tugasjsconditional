// TUGAS CONDITIONAL JAVASCRIPT

// RESPATI KUSUMAWARDHANI

/* Buat conditional IF .. ELSE IF yang menggambarkan divisi dan tugas divisi pada STARTUP.
Contoh: Jika saya sebagai HR maka tugas saya adalah melakukan rekrutmen untuk calon pegawai baru */

// saya pakai contoh ruang guru

let divisiStartUp = "technology"

if (divisiStartUp === "product&operation") {
    console.log("Strategize and monitor the running of the business");
} else if (divisiStartUp === "marketing") {
    console.log("Be in the heart of the customers with our remarkable marketing initiatives");
} else if (divisiStartUp === "contentdevelopment") {
    console.log("Content is our essence. Research, create, and launch the most suitable educational content for the customer.");
} else if (divisiStartUp === "technology") {
    console.log("Develop intelligent approaches to engineer the core system and deal with complex data");
} else if (divisiStartUp === "hr&ga") {
    console.log("Oversee and maintain the welfare of the business and the people within.");
} else if (divisiStartUp === "socialimpact") {
    console.log("Use technology to provide non-profit education to students all over Indonesia");
}else if (divisiStartUp === "fieldcounselor") {
    console.log("Connect students to education solution");
}else if (divisiStartUp === "sales&service") {
    console.log("Turn product innovations into vital client solutions that is dedicated to top-notch client service");
}else if (divisiStartUp === "managementassociateprogram") {
    console.log("Rigorous, accelerated track emphasizing on the depth and breadth in personal development");
}else if (divisiStartUp === "productdesign") {
    console.log("We are always obsessed about how we can create the best user experience");
}else if (divisiStartUp === "brainacademy") {
    console.log("As the new breakthrough, we combine an online and offline course system to make learning more fun and easy");
}else if (divisiStartUp === "finance,tax,&accounting") {
    console.log("Monitor and analyze operational and financial key performance indicators across businesses");
}else {
    console.log("there is no division here");
}

/* Buat conditional untuk membandingkan 2 buah nilai. 
Tampilkan apakah salah satu nilai misal a lebih besar dari b, 
a lebih kecil dari b, 
dan a sama dengan b */

let a = 550

if (a > 550){
    console.log("nilai lebih besar daripada a");
} else if (a < 550){
    console.log("nilai lebih kecil daripada a");
} else {
    console.log("nilai sama dengan a");
}

/*Gunakan switch case untuk mengetahui nama hari berdasarkan angka.
Hari minggu dimulai dari angka 1 dan seterusnya*/

var hari = 1;

switch (hari) {
    case 1: {console.log("minggu");
    break;}
    case 2: {console.log("senin");
    break;}
    case 3: {console.log("selasa");
    break;}
    case 4: {console.log("rabu");
    break;}
    case 5: {console.log("kamis");
    break;}
    case 6: {console.log("jumat");
    break;}
    case 7: {console.log("sabtu");
    break;}
    default: {console.log("silahkan lihat kalender"); }
}

/* Gunakan switch case untuk membuat sebuah game sederhana.
UP -> Karakter berjalan keatas
RIGHT -> Karakter berjalan kekanan
BOTTOM -> Karakter berjalan kebawah
LEFT -> Karakter berjalan kekiri */

var direction = "up";

switch (direction) {
    case "up": {console.log("Karakter berjalan ke atas");
    break;}
    case "bottom": {console.log("Karakter berjalan ke bawah");
    break;}
    case "left": {console.log("Karakter berjalan ke kiri");
    break;}
    case "right": {console.log("Karakter berjalan ke kanan");
    break;}
}