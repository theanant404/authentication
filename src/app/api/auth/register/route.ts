import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User.model";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/lib/email";

export async function POST(request: Request) {
  await dbConnect();    
  const { name, username, email, password } = await request.json();

  try {
    const existingVerifiedUser = await UserModel.findOne({
      email
    });
    if (existingVerifiedUser && existingVerifiedUser.isVarified) {
      return Response.json({ success:false,message: "User already exists" }, { status: 400 });
    }
    if(existingVerifiedUser && !existingVerifiedUser.isVarified){
      await UserModel.findByIdAndDelete(existingVerifiedUser._id);
    }
    const VerifiyCode= Math.floor(100000 + Math.random() * 900000);
    const newUser = new UserModel({
      name,
      username,
      email,
      password: await bcrypt.hash(password, 10),
      verifyCode: VerifiyCode,
      verifyCodeExpiry: new Date(Date.now() + 30 * 60 * 1000),
      isVarified: false,
    });
    await newUser.save();
    // Send Email Verification
    const otp=VerifiyCode
    await sendEmail(newUser.email, "OTP Verification", `Your OTP is ${otp} and it will expire in 30 minutes so please reset your password as soon as possible`);
    return Response.json({ success:true,message: "User registered successfully check your and veryfy your emal " }, { status: 200 });    
  } catch (error) {
    console.error("Error registering user:", error);
    return Response.json({ success:false,message: "Failed to register user" }, { status: 500 });
    
  }
}
