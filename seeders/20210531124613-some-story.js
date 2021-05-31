"use strict";
const Story = require("../models").story;
const Space = require("../models").space;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const space1 = await Space.findOne({
      where: { title: "test seeders1" },
    });
    const space2 = await Space.findOne({
      where: { title: "test seeders2" },
    });

    await Story.bulkCreate([
      {
        name: "Story1",
        imageUrl: "https://source.unsplash.com/1600x900/?surprise",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quibusdam quam adipisci?",
        spaceId: space1.id,
      },
      {
        name: "story2",
        imageUrl: "https://source.unsplash.com/1600x900/?turtles",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta pariatur quasi minus molestias, rem quia illo excepturi nobis odio incidunt hic ducimus perspiciatis maxime. Quidem sed deleniti beatae qui.",
        spaceId: space1.id,
      },
      {
        name: "story3",
        imageUrl: "https://source.unsplash.com/1600x900/?cars",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
        spaceId: space2.id,
      },
      {
        name: "story4",
        imageUrl: "https://source.unsplash.com/1600x900/?bikes",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti mollitia officiis porro!",
        spaceId: space2.id,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
