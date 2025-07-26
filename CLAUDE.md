# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Environment

This project uses **Bun** as the JavaScript runtime and package manager. It includes both TypeScript and Python examples of using the Claude Code SDK.

## Common Commands

### JavaScript/TypeScript (Primary)
- Install dependencies: `bun install`
- Run main TypeScript file: `bun run index.ts`
- Run haiku example: `bun run haiku.ts`

### Python (Secondary)
- Install Python dependencies: `pip install -r requirements.txt`
- Run Python haiku example: `python haiku.py`

## Project Structure

- `index.ts` - Main entry point with basic Bun setup
- `haiku.ts` - TypeScript example using Claude Code SDK to generate haikus
- `haiku.py` - Python equivalent of the TypeScript haiku example
- `package.json` - Bun/Node.js dependencies and configuration
- `requirements.txt` - Python dependencies
- `tsconfig.json` - TypeScript configuration

## Architecture

This is a test/example project demonstrating the Claude Code SDK usage in both TypeScript and Python:

- Uses `@anthropic-ai/claude-code` npm package for TypeScript
- Uses `claude_code_sdk` Python package for Python examples
- Both implementations show async iteration over Claude Code query responses
- Examples demonstrate basic prompt querying with configurable max turns

## Best Practices

- Always use descriptive variable names