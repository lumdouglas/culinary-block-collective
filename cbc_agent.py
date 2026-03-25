import asyncio
from claude_agent_sdk import query, ClaudeAgentOptions, ResultMessage

async def main():
    async for message in query(
        prompt="Read the leads CSV and summarize pending inquiries by company size",
        options=ClaudeAgentOptions(
            allowed_tools=["Read", "Glob", "Grep"],
            cwd="/Users/doug/culinary-block-collective",
            max_budget_usd=0.50,
        )
    ):
        if isinstance(message, ResultMessage):
            print(message.result)

asyncio.run(main())
