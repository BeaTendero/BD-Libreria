'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('libros', [

    
  
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'La ciudad de las bestias',
      autor: 'Isabel Allende',
      editorial:'Delbolsillo',
      category: 'Ficción',
      url : 'https://images.cdn1.buscalibre.com/fit-in/360x360/3d/40/3d40c2f022ed4690ed2a796473e51fd5.jpg'
      
      
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Después de diciembre',
      autor: 'Joana Marcus',
      editorial:'Montena',
      category: 'Novela de amor',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/14/b9/14b9a7796430096d4ddd9916ff6738da.jpg'
      
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Cómo hacer que te pasen cosas buenas',
      autor: 'Marian Rojas Estapé',
      editorial:'Planeta',
      category:'Autoayuda y Desarrollo personal',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/0e/e8/0ee89d1b0775c8eeac5593d130452bee.jpg'
      
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Kalathras',
      autor: 'Eric Cuaresma',
      editorial:'Ediciones Martínez Roca',
      category:'Manga',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/97/4d/974dfa6b4ae7f959afd0a8345a60949e.jpg'
      
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Manga, anime y videojuegos',
      autor: 'Manuel Hernández-Pérez',
      editorial:'Prensas De La Universidad De Zaragoza',
      category:'Expresiones artísticas del arte',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/d6/0f/d60fd18c087e9e0b80328e56a32630b1.jpg'
      
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Detective Conan',
      autor: 'Gosho Aoyama',
      editorial:'Planeta De Agostini',
      category:'Manga',
      url :'https://images.cdn2.buscalibre.com/fit-in/360x360/cf/e6/cfe658e4d7a348aa988592518d1335c2.jpg'
      
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Naruto',
      autor: 'Masashi Kishimoto',
      editorial:'Planeta Cómic',
      category:'Manga',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/e0/23/e023b63244e31b0bf8dd331312105768.jpg'
      
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'My hero academia',
      autor: 'Kohei Horikoshi',
      editorial:'Planeta De Agostini',
      category:'Manga',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/3a/c8/3ac86954e31b9018ca8a678a8d042e3e.jpg'
      
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'La noche que nos escuchamos',
      autor: 'Albert Espinosa',
      editorial:'Grijalbo',
      category:'Novela',
      url :'https://images.cdn2.buscalibre.com/fit-in/360x360/d4/0d/d40d93985b1ab4746f74385b002cb4af.jpg'
      
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'El mundo azul ama tu caos',
      autor: 'Albert Espinosa',
      editorial:'Debolsillo',
      category:'Ficción moderna y contemporánea',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/93/7a/937ab0a4c33b72ad0bb7508a1e17a810.jpg'
      
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'El mundo amarillo',
      autor: 'Albert Espinosa',
      editorial:'Grijalbo',
      category:'Motivación, Autoestima y actitud positiva',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/4b/66/4b665c2cd479d2d5f972297fd0673d1f.jpg'
      
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Finales que merecen una historia',
      autor: 'Albert Espinosa',
      editorial:'Grijalbo',
      category:'Novela de amor',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/72/d7/72d7643d81b736087c34e0b4382462c6.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Lo mejor de ir es volver',
      autor: 'Albert Espinosa',
      editorial:'Debolsillo',
      category:'Autoayuda y desarrollo personal',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/89/55/895590d6de43542fad8a1db73427aa22.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Brújulas que buscan sonrisas perdidas',
      autor: 'Albert Espinosa',
      editorial:'Debolsillo',
      category:'Novelas de amor',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/d8/d8/d8d80a818605d71669d5f59dc7980295.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Herido diario',
      autor: 'Rayden',
      editorial:'Aguilar',
      category:'Poesía',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/46/0a/460a8bca00dcab8a4d9df1b2f73fb641.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Terminamos y otros poemas sin terminar',
      autor: 'Rayden',
      editorial:'Booket',
      category:'Poesía',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/59/f7/59f7141a99127600f5f67e0764404600.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Nunca será siempre',
      autor: 'Rayden',
      editorial:'Destino Infantil & Juvenil',
      category:'Poesía',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/3e/a9/3ea993eb29040a124e61e98f88eff249.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'El mundo es un gato jugando con Australia',
      autor: 'Rayden',
      editorial:'Planeta',
      category:'Poesía',
      url :'https://images.cdn2.buscalibre.com/fit-in/360x360/b6/3b/b63bdf599122a2c133a696fc60829ad5.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Vademécum del optimista',
      autor: 'Bernabé Tierno',
      editorial:'Booket',
      category:'Autoayuda y desarrollo personal',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/a2/ae/a2ae550a3bddc984d24fcc362a2706a5.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Enciclopedia Pokémon',
      autor: 'Libros De The Pokémon Company',
      editorial:'Monteana',
      category:'Animación',
      url :'https://images.cdn2.buscalibre.com/fit-in/360x360/90/86/9086aff6f311afc7a01b119a5d11d3a3.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Pokémon , Aprende a dibujar',
      autor: 'Varios autores',
      editorial:'Montena',
      category:'Videojuegos y juegos de Ordenador',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/fe/7e/fe7e8fd301a5c1880430a0157c89692d.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Guía de los Pokémon de Alola',
      autor: 'Varios autores',
      editorial:'Montena',
      category:'Animación',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/e9/61/e9614f8f9910aece75dea22c090e9f1e.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'El mundo de the witcher',
      autor: 'Marcin Batylda',
      editorial:'Gustavo Gili',
      category:'Novela gráfica',
      url :'https://images.cdn2.buscalibre.com/fit-in/360x360/e9/bc/e9bc8caef5dd1210ea98573b1f66baad.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Batman. Un hèroe de videojuego',
      autor: 'José L. Ortega',
      editorial:'Heroes De Papel',
      category:'Juegos de ordenador y en línea',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/07/12/0712f4ebdd94ef2186126bed083a07d1.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Tu vida, tu videojuego',
      autor: 'Rodrigo Río Del Arco',
      editorial:'Héroes De Papel',
      category:'Motivación, autoestima y actitud positiva',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/86/7a/867a18a659c3819a0f1a15863873c768.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Revolución Indie',
      autor: 'Jonathan Leon - Manu Delgado',
      editorial:'Heroes De Papel',
      category:'Diseño de Juegos de Ordenador',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/85/1b/851b72a0f4b3442f6eb8716fe0107632.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Guerreras princesas',
      autor: 'David Martinez',
      editorial:'Redbook',
      category:'Ciencia ficción',
      url :'https://images.cdn2.buscalibre.com/fit-in/360x360/2a/09/2a09b66f83b6f5645542e2af71ca45b5.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Testing de videojuegos',
      autor: 'Ricardo Izquierdo',
      editorial:'Ra-Ma',
      category:'Crítica literaria',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/b8/fd/b8fd7b5365a6ea65abf7213f993e6c28.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Estética en Videojuegos',
      autor: 'José Alberto Corbal',
      editorial:'Ra-Ma',
      category:' Programación de juegos',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/76/24/762423f144f7021e35661b43eb699214.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Cine y Videojuegos',
      autor: 'Jose Maria Villalobos',
      editorial:'Heroes De Papel',
      category:'Cine y televisión',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/e8/b9/e8b9d5bd0bf6eabd4e394752a3781a18.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Reina',
      autor: 'Bebi Fernández',
      editorial:'Booket',
      category:'Novela',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/e0/97/e0971e329f4efda02f7696e55903271d.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Princesas y lobas',
      autor: 'Marta Mississippi',
      editorial:'Montena',
      category:'Literatura general',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/b2/ba/b2bae56a5926a7e0f2db3e8018253bfb.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Diccionario de Términos de Videojuegos',
      autor: 'Iván Ramírez Sánchez',
      editorial:'Verbum',
      category:'Diccionarios temáticos',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/84/99/849927a6fe853cbb43c236d5d850391f.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Yellowstar: Conviértete en un Campeón de League of Legends',
      autor: 'Bora Kim',
      editorial:'Planeta',
      category:'Videojuegos',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/03/78/0378fca43e340e01c50c2320c932f596.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'League of Dragons (Temeraire)',
      autor: 'Naomi Novik',
      editorial:'Del Rey',
      category:'Videojuegos',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/a9/60/a96084e28590f8886d7d75cbf12e7ea9.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Justice League Galaxy of Terrors',
      autor: 'Simon Spurrier; Aaron Lopresti',
      editorial:'Dc Comics',
      category:'Animación',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/d6/50/d6502a62f03256a2ad2d5c2c4141910d.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Memorias de una salvaje',
      autor: 'Bebi Fernández',
      editorial:'Planeta',
      category:'Ficción moderna y contemporánea',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/96/49/9649c371eb6d734c8a9efbb3c3531d57.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Amor y asco',
      autor: 'Bebi Fernández',
      editorial:'Muevetulengua',
      category:'Poesía',
      url :'https://images.cdn2.buscalibre.com/fit-in/360x360/8d/99/8d996a004b6c86301ddde8fee2d966d4.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'El Poder de la Acción',
      autor: 'Paulo Vieira',
      editorial:'Urano',
      category:'Motivación, Autoestima y Actitud positiva',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/12/dd/12ddf2156fd757c6475f5a5bef191eed.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'El Trastorno Esquizofrénico de la Acción Humana',
      autor: 'Antonio Colodrón',
      editorial:'editorial Triacastela',
      category:'Psiquiatría',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/c6/e5/c6e5f140e38301370572f481dcae3128.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Encuentra tu Persona Vitamina',
      autor: 'Marian Rojas Estapé',
      editorial:'Espasa',
      category:'Autoayuda y Desarrollo Personal',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/5b/55/5b55b3f312b7cc6844b44e6fc6434ed7.jpg'
    },
    {
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      title: 'Formacion y Orientacion Laboral 360º',
      autor: 'Varios autores',
      editorial:'Editex, S.A.',
      category:'Ciencias económicas sobre finanzas',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/af/8c/af8c59535174250324413dca76f0563c.jpg'
    },
  ], {});
  
},
async down(queryInterface, Sequelize) {

  }
};
