import User from "../models/user.js";
import ApiError from "../utils/api.error.js";
import ApiResponse from "../utils/api.response.js";
import { sendMail } from "../utils/send.mail.js";

const options = {
  httpOnly: true,
  secure: true,
};

const generateAccessToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    return accessToken;
  } catch (error) {
    console.log("error generating Access token", error);
  }
};
const signup = async (req, res) => {
  try {
    const {
      fullName,
      countryCode,
      countryName,
      email,
      password,
      phoneNumber,
      confirmPassword,
      gender,
    } = req.body;
    if (
      !fullName ||
      !countryCode ||
      !countryName ||
      !email ||
      !password ||
      !gender ||
      !phoneNumber ||
      !confirmPassword
    ) {
      return res.status(400).json(new ApiError(400, "All fields are required"));
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(409).json(new ApiError(409, "email already exist"));
    }

    const newUser = await User.create({
      fullName,
      email,
      password,
      countryName,
      countryCode,
      phoneNumber,
      gender,
    });
    if (!newUser) {
      return res
        .status(500)
        .json(
          new ApiError(
            500,
            "Something went wrong while registration. Try Again!"
          )
        );
    }
    const data = {
      name:newUser.fullName
    };
    await sendMail(newUser.email,"Registration Successfull","new_user.ejs",data)

    return res
      .status(201)
      .json(new ApiResponse(201, null, "User registered Successfully"));
  } catch (error) {
    console.log(error);
    
    return res.status(500).json(new ApiError(500, "Something went Wrong"));
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json(new ApiError(400, "Invalid email or password"));
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json(new ApiError(404, "User doesn't exist!"));
    }
    const passwordMatch = await user.comparePassword(password);
    if (!passwordMatch) {
      return res.status(404).json(new ApiError(404, "Invalid Password"));
    }
    const accessToken = await generateAccessToken(user._id);
    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .json(new ApiResponse(200, { accessToken }, "Login successfully"));
  } catch (error) {
    return res.status(500).json(new ApiError(500, "Something went Wrong"));
  }
};
const logout = async (req, res) => {
  try {
    const user = req.user._id;

    await User.findByIdAndUpdate(user);
    return res
      .status(200)
      .clearCookie("accessToken", options)
      .json(new ApiResponse(200, {}, "You have Successfully logged Out"));
  } catch (error) {
    return res.status(500).json(new ApiError(500, "Something went wrong"));
  }
};
export { signup, login, logout };
