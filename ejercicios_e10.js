const partidos = [
  { 
   juego: 1,
   losToros: 0,
  SanFernado: 4
  },
  {
   juego: 2,
   losToros: 6,
    SanFernado: 8 
  },
  {
   juego: 3,
   losToros: 5,
    SanFernado: 3 
  },
  {
    juego: 4,
    losToros: 7,
    SanFernado: 4
  },
  {
    juego: 5,
    losToros: 5,
    SanFernado: 3 
  },
  {
    juego: 6,
    losToros: 6,
    SanFernado: 3 
  },
  {
    juego: 7,
    losToros: 7,
    SanFernado: 3 
  }

];

const numPartidos = partidos.length;

for (let i = 0; i < numPartidos; i++) {
  let p = partidos.shift();
  console.log(
    `Resultado del partido ${p.juego}: Los Toros ${p.losToros} - San Fernando ${p.SanFernando}`
  );
}



partidos.forEach((partido))
const p1 =partidos.shift();
console.log(`Resultado del partido  Los Toros ${p1.losToros} - San Fernando ${p1.SanFernado}`);

const p2=partidos.shift();
console.log(`Resultado del partido  Los Toros ${p2.losToros} - San Fernando ${p2.SanFernado}`);

const p3=partidos.shift();
console.log(`Resultado del partido  Los Toros ${p3.losToros} - San Fernando ${p3.SanFernado}`);

const p4=partidos.shift();
console.log(`Resultado del partido  Los Toros ${p4.losToros} - San Fernando ${p4.SanFernado}`);

const p5=partidos.shift();
console.log(`Resultado del partido  Los Toros ${p5.losToros} - San Fernando ${p5.SanFernado}`);

const p6=partidos.shift();
console.log(`Resultado del partido  Los Toros ${p6.losToros} - San Fernando ${p6.SanFernado}`);

const p7=partidos.shift();
console.log(`Resultado del partido  Los Toros ${p7.losToros} - San Fernando ${p7.SanFernado}`);
