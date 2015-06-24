Meteor.publish('editors', function() {
   return Editors.find();
});

Meteor.publish('articles', function() {
   return Articles.find();
});

Meteor.publish('issues', function() {
   return Issues.find();
});

if (Editors.find().count() === 0 ) {
   console.log("Filling DB with mock editors");
   Editors.insert({
      name: "Actief C. Lid",
      active: true,
      comments: "Dit is commentaar.",
      email: "Secretaris-ETV@tudelft.nl"
   });
   Editors.insert({
      name: "Inactieve L. Zak",
      active: false,
      comments: "Dit is commentaar.",
      email: "Secretaris-ETV@tudelft.nl"
   });
}

if (Articles.find().count() === 0) {
   console.log("Filling DB with mock articles");
   Articles.insert({
      author: "Mater Tua",
      title: "Random artikel",
      pages: 3,
      editor: Editors.findOne()._id,
   });
   Articles.insert({
      author: "Mater Tua",
      title: "Ander random artikel",
      pages: 2,
      editor: Editors.findOne()._id,
   });
}

if (Issues.find().count() === 0) {
   console.log("Filling DB with mock issues");
   Issues.insert({
      issueNumber: {year: 1, edition: 1},
      comments:    "Testcommentaar",
      createdAt:   new Date(),
      dateOfIssue: new Date(),
      color: "rgb(100,100,0)",
      articles: [Articles.findOne()._id]
   });
}
