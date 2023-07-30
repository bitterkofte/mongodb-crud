import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
  const { id } = params;
  const {newTitle: title, newDescription: description} = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, {title, description});
  return NextResponse.json({message: "Topic is updated"}, {status: 200});
}

export async function GET(request, {params}) {
  const { id } = params;
  await connectMongoDB();
  const theTopic = await Topic.findOne({_id: id});
  return NextResponse.json({theTopic}, {status: 200});
}