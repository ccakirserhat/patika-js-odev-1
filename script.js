 var name1 = prompt("Lütfen İsminizi Giriniz: ")
     
 if(!name1)
 {
    window.alert("BOŞ BIRAKILAMAZ!")
 }
 else
 {
    name1 = name1.toUpperCase();
    document.querySelector("#name").innerHTML = name1;
 }


 function tarihSaat() {
    var date = new Date().toLocaleString();
    document.getElementById("zaman").innerHTML = date;
}
// her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
setInterval(tarihSaat, 1000); 
