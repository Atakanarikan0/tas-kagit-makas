const hamleler = [
  'taş',
  'kağıt',
  'makas'
];

function bilgisayarOyna() {
  return hamleler.at(Math.floor(Math.random() * 3));
}

let oyuncuSkor = 0;
let bilgisayarSkor = 0;

function oyna(hamle) {
  // oyuncuHamle.innerText = hamle;
  const bilgisayarinHamlesi = bilgisayarOyna();
  bilgisayarHamle.innerText = bilgisayarinHamlesi;

  if(hamle === bilgisayarinHamlesi) {
    kazananBilgi.innerText = 'Berabere';
  } else if(hamle === 'taş' && bilgisayarinHamlesi === 'makas') {
    kazananBilgi.innerText = 'Oyuncu';
    oyuncuSkor++;
  } else if(hamle === 'makas' && bilgisayarinHamlesi === 'kağıt') {
    kazananBilgi.innerText = 'Oyuncu';
    oyuncuSkor++;
  } else if(hamle === 'kağıt' && bilgisayarinHamlesi === 'taş') {
    kazananBilgi.innerText = 'Oyuncu';
    oyuncuSkor++;
  } else {
    kazananBilgi.innerText = 'Bilgisayar';
    bilgisayarSkor++;
  }

  oyuncuSkorTxt.innerText = oyuncuSkor;
  bilgisayarSkorTxt.innerText = bilgisayarSkor;

}

function tasOyna() {
  oyna('taş');
  this.classList.add("active");
  setTimeout(() => {
    this.classList.remove("active");
 }, 500);
}

tasBtn.addEventListener('click', tasOyna);

function kagitOyna() {
  oyna('kağıt');
  this.classList.add("active");
  setTimeout(() => {
    this.classList.remove("active");
 }, 500);
}

kagitBtn.addEventListener('click', kagitOyna);

function makasOyna() {
  oyna('makas');
  this.classList.add("active");
  setTimeout(() => {
    this.classList.remove("active");
 }, 500);
}

makasBtn.addEventListener('click', makasOyna);

function sifirla() {
  kazananBilgi.innerText = 'Kazanan Oyuncu';
  oyuncuSkor = 0;
  bilgisayarSkor = 0;
  oyuncuSkorTxt.innerText =  oyuncuSkor;
  bilgisayarSkorTxt.innerText = bilgisayarSkor;
}

sifirlaBtn.addEventListener('click', sifirla);




