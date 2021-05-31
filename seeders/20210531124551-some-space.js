"use strict";
const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne({
      where: { email: "test@test.com" },
    });

    const user2 = await User.findOne({
      where: { email: "a@a.com" },
    });

    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "test seeders1",
          description: "using seeders form test seeders 1",
          backgroundColor: "#ffff",
          color: "#0000",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user1.id,
        },
        {
          title: "test seeders2",
          description: "using seeders form test seeders 2",
          backgroundColor: "#ffff",
          color: "#0000",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user2.id,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};