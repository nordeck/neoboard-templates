const neoboard = {
    version: 'net.nordeck.whiteboard@v1',
    whiteboard: {
        slides: [
            {
                elements: [
                    {
                        position: { x: 0, y: 100 },
                        type: 'shape',
                        kind: 'rectangle',
                        fillColor: '#dddddd',
                        width: 1920,
                        height: 80,
                        text: "Heading",
                    },
                ],
            },
        ],
    }
};

// Convert it to JSON and print it on the terminal
console.log(JSON.stringify(neoboard));
