function hitungDenda(a){

var hari = a;
var pelajaran = 1000;
var novel = 2000;
var cerpen = 1500;
if (hari > 10){
  console.log("Meminjam selama : "+a+" hari");
  console.log("Telat mengembalikan : "+(a-10)+" hari");
  console.log("Denda buku mata pelajaran : "+(a-10)*pelajaran);
  console.log("Denda novel :"+(a-10)*novel);
  console.log("Denda cerpen :"+(a-10)*cerpen);
  console.log("Total : "+((a-10)*pelajaran+(a-10)*novel+(a-10)*cerpen));
}
}
hitungDenda(14);