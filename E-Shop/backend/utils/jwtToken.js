// //create token and saving it to the cookies
// const sendToken = (user, statusCode, res) => {
//     const Token = user.getJwtToken();

//     const options = {
//         expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 days in milliseconds
//         httpOnly: true,
//     };

//     res.status(statusCode).cookie("token", Token, options).json({
//         success: true,
//         user,
//         Token,
//     });
// };

// module.exports = sendToken;


// create token and saving that in cookies
const sendToken = (user, statusCode, res) => {
    const token = user.getJwtToken();
  
    // Options for cookies
    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      sameSite: "none",
      secure: true,
    };
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      token,
    });
  };
  
  module.exports = sendToken;
