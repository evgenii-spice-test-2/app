#!/usr/bin/env node

/**
 * A sample CLI tool with multiple commands.
 *
 * Usage:
 *   sample-cli <command> [options]
 *
 * Commands:
 *   greet                Greet a user.
 *   farewell             Bid farewell to a user.
 *   echo                 Echo a provided message.
 *   --help               Show help message.
 */

function printHelp(): void {
	console.log(`Usage: sample-cli [command] [options]
Commands:
  greet                Greet a user.
  farewell             Bid farewell to a user.
  echo                 Echo the provided message.
Options:
  --name <name>        Specify the name for greet/farewell commands. Default is "World".
  --message <msg>      Specify the message for the echo command.
  --help               Show this help message.`);
}

function greetCommand(args: string[]): void {
	let name: string = "World";
	const nameIndex: number = args.indexOf("--name");
	if (nameIndex !== -1 && nameIndex < args.length - 1) {
		name = args[nameIndex + 1];
	}
	console.log(`Hello, ${name}!`);
}

function farewellCommand(args: string[]): void {
	let name: string = "World";
	const nameIndex: number = args.indexOf("--name");
	if (nameIndex !== -1 && nameIndex < args.length - 1) {
		name = args[nameIndex + 1];
	}
	console.log(`Goodbye, ${name}!`);
}

function echoCommand(args: string[]): void {
	const messageIndex: number = args.indexOf("--message");
	if (messageIndex !== -1 && messageIndex < args.length - 1) {
		const message = args[messageIndex + 1];
		console.log(message);
	} else {
		console.error("Error: No message provided. Use --message <msg> to specify a message.");
		process.exit(1);
	}
}

function main(): void {
	const args: string[] = process.argv.slice(2);

	// Show help if no arguments or user requests help
	if (args.length === 0 || args.includes("--help")) {
		printHelp();
		process.exit(0);
	}

	const command = args[0];

	switch (command) {
		case "greet":
			greetCommand(args);
			break;

		case "farewell":
			farewellCommand(args);
			break;

		case "echo":
			echoCommand(args);
			break;

		default:
			console.error(`Unknown command: ${command}`);
			printHelp();
			process.exit(1);
	}
}

main();
