import { ContactCollection } from "./ContactCollection";

// ContactCollection.SimpleSchema({
//   name: {
//     type: String,
//   },
//   email: {
//     type: String,
//   },
//   imegaeUrl: {
//     type: String,
//   },
// });

Meteor.methods({
  "contact.insert"({ name, email, imageUrl }) {
    // check(name, String);
    // check(email, String);
    // check(imageUrl, String);
    if (!name) {
      throw new Meteor.Error("Name is required");
    }
    return ContactCollection.insert({ name, email, imageUrl });
  },
});
