import User from "@/models/User";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request: NextRequest) => {
  const { username, email, password } = await request.json();
  console.log(username, email, password);
  await connect();

  if (!username || !email || !password) {
    return NextResponse.json(
      { error: "Semua field harus diisi" },
      { status: 400 }
    );
  }

  const hashPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });

  try {
    await newUser.save();
    return NextResponse.json(
      { message: "User has been created" },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("🔥 Error saat menyimpan user:", error); // 👈 tambahkan ini
  
    const err = error as { message?: string; code?: number };

    if (err.code === 11000) {
      return NextResponse.json(
        { error: "Email atau username sudah terdaftar" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
};
