let valgiai = ['mesainis', 'steakas', 'makaronai', 'ryziai', 'plovas', 'troskinys'];

valgiai.push('KOTLETAS');
valgiai.unshift('BURGERIS');
valgiai.splice(4, -4, 'LAZANIJA');

for (let i = 0; i < valgiai.length; i++) {
    console.log('Maistas-', valgiai[i]);
}


valgiai.pop('KOTLETAS');
valgiai.shift('BURGERIS');
valgiai.splice(3, -3);

for (let i = 0; i < valgiai.length; i++) {
    console.log('Apdorotas maistas-', valgiai[i]);
}