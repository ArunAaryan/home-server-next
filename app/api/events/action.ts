"use server";
import Event from "@/app/models/events";

const addEvent = async (title: string, description: string) => {
  await Event.create({ title, description });
};

export { addEvent };
