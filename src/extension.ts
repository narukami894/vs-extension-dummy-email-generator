import * as vscode from 'vscode';

export const activate = (context: vscode.ExtensionContext) => {
	let disposable = vscode.commands.registerCommand('vs-extension-dummy-email-generator.generate', () => {
		const str = Math.random().toString(36).slice(-8);
		console.log(`${str}@example.com`);
	});

	context.subscriptions.push(disposable);
};

export const deactivate = () => {};
