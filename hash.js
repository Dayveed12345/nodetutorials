// Generate a salt
// bcrypt.genSalt(saltRounds, (err, salt) => {
//   if (err) {
//     console.error('Error generating salt:', err);
//     return;
//   }

//   // Hash the password using the generated salt
//   bcrypt.hash(plainPassword, salt, (err, hash) => {
//     if (err) {
//       console.error('Error hashing password:', err);
//       return;
//     }

//     // Store the hashed password in your database
//     console.log('Hashed password:', hash);

//     // You should save 'hash' in your database for user authentication.
//   });
// });