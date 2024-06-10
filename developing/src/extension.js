// src/extension.js
const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Congratulations, your extension "my-first-extension" is now active!');

    let disposable = vscode.commands.registerCommand('extension.helloWorld', function () {
        vscode.window.showInformationMessage('Hello World from MyFirstExtension!');
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
