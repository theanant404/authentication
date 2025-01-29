import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User.model";
export async function POST(request: Request) {
  // Connect to the database
  await dbConnect();
  const { email, verifyCode } = await request.json();
  try {
    const user = await UserModel.findOne({ email });
    if(!user){
      return Response.json({ success: false, message: "User not found" }, { status: 404 });
    }
    // console.log(user);
    if (user.isVarified) {
      return Response.json({ success: false, message: "User already verified" }, { status: 200 });
    }

    if (user.verifyCode !== verifyCode) {
      return Response.json({ success: false, message: "Incorrect verification code" }, { status: 200 });
    }
    if (user.verifyCodeExpiry < new Date()) {
      return Response.json({ success: false, message: "Verification code expired" }, { status: 200 });
    }
    user.isVarified = true;
    await user.save();
    return Response.json({ success: true, message: "User verified successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error verifying user:", error);
    return Response.json({ success: false, message: "Failed to verify user" }, { status: 500 });
    
  }
}