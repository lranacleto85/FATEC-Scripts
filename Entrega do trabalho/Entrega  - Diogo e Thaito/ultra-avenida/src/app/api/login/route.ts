import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

interface UserProps {
    username: string;
    password: string;
}

export async function POST(request: Request) {
    const { username, password } = await request.json();

    const filePath = path.join(process.cwd(), "src", "database", "users.json")

    const users: UserProps[] = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const user = users.find(
        (user) => user.username === username && user.password === password
    );

    if (user) {
        return NextResponse.json({ message: "Login successful", username });
    } else {
        return NextResponse.json(
            { message: "Invalid username or password" },
            { status: 401 }
        );
    }
}
