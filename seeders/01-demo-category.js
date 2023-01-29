'use strict';


// /** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('categories', [{

      name: 'Autoayuda',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Juvenil',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    name: 'Poesía',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Videojuegos',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Animación',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cómic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Novela',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Novela gráfica',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Autoestima',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Diseño',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Crítica',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Literatura',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Diccionario',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ficción',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Novela de amor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Manga',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Desarrollo personal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    
  ], {});
},
  
down: async (queryInterface, Sequelize) => {
    
  await queryInterface.bulkDelete('categories', null, {});
 
}
};

