import { openai } from "@ai-sdk/openai";
import {
  convertToModelMessages,
  streamText,
  // smoothStream,
  type UIMessage,
} from "ai";

export const maxDuration = 30;

const model = process.env.OPENAI_MODEL ?? "gpt-6-luna";

export async function POST(request: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await request.json();

    if (!Array.isArray(messages)) {
      return Response.json({ error: "Invalid messages" }, { status: 400 });
    }

    const result = streamText({
      model: openai(model),
      system: `You are RoboMaya, a friendly grey-and-white
        robocat AI companion. You are warm, curious and
        encouraging. Keep your responses conversational
        and clear. Be honest about your capabilities.`,
      messages: await convertToModelMessages(messages),

      // experimental_transform: smoothStream({
      //   delayInMs: 100,
      //   chunking: "word",
      // }),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);

    return Response.json(
      { error: "Unable to process chat request" },
      { status: 500 },
    );
  }
}
