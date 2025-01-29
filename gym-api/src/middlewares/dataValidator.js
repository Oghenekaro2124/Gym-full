// //Define the dataValidation middleware

// const dataValidator = (req, res, next) => {
//     const {email, message} = req.body;
// //Basic Validation for Email and Message
//     if(!email || !message){
//         return res.status(400).json({ message: 'email and message are required fields' });
//     }

//     //Proceed to the next middleware/ handler if valid
//     next();
// };

// module.exports = dataValidator;

// Define the dataValidation middleware
const dataValidator = (req, res, next) => {
  const { email, message } = req.body;

  // Basic Validation for Email and Message
  if (!email || !message) {
    return res
      .status(400)
      .json({ message: "email and message are required fields" });
  }

  // Proceed to the next middleware/handler if valid
  next();
};

module.exports = dataValidator;
