class ClipboardExtension {
  static getInfo() {
    return {
      id: 'clipboard',
      name: 'Clipboard Extension',
      blocks: [
        {
          opcode: 'copyText',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Copy text %s to clipboard',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello, World!',
            },
          },
        },
      ],
    };
  }

  copyText(args) {
    // Get the text to copy from the block's input
    const textToCopy = args.TEXT;

    // Create a temporary textarea element to copy text to clipboard
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);

    // Select the text inside the textarea
    tempTextArea.select();

    // Execute the copy command
    document.execCommand('copy');

    // Remove the temporary textarea element
    document.body.removeChild(tempTextArea);
  }
}

Scratch.extensions.register(new ClipboardExtension());
