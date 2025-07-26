import { query, type SDKMessage } from "@anthropic-ai/claude-code";

const haikuMessages: SDKMessage[] = [];

for await (const responseMessage of query({
  prompt: "Write a haiku about foo.py",
  abortController: new AbortController(),
  options: {
    maxTurns: 3,
  },
})) {
  haikuMessages.push(responseMessage);
}

console.log(haikuMessages);

// console.log("hello haiku");