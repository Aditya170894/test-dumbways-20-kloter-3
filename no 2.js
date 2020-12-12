function cekHuruf(array,huruf){
let count=0;

for (let i = 0; i <= array.length; i++){

  if (huruf == array[i]){
    count++;
  }
}
console.log(huruf+" muncul sebanyak "+count);
}

cekHuruf("aku calon peserta bootcamp dumbways","a");