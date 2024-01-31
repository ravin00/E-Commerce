//create token and saving it to the cookies
const sendToken = (user,statusCode,res) => {
    const Token = user.getJwtToken();

    const option = {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly: true,
    };

    res.status(statusCode).cookie("token", token,option).json({
        success:true,
        user,
        token,
    });
};
