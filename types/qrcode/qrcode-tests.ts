import * as QRCode from 'qrcode';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;

QRCode.toCanvas(canvas, 'sample text', error => {
    if (error) console.error(error);
    console.log('success!');
});

QRCode.toDataURL('I am a pony!', (err, url) => {
    console.log(url);
});

QRCode.toDataURL('some text', { errorCorrectionLevel: 'H' }, (err, url) => {
    console.log(url);
});

QRCode.toDataURL('some text', { version: 2 }, (err, url) => {
    console.log(url);
});

QRCode.toDataURL([{ data: Buffer.from([253, 254, 255]), mode: 'byte' }], (err, url) => {
    console.log(url);
});

QRCode.toDataURL([{ data: new Uint8ClampedArray([253, 254, 255]), mode: 'byte' }], (err, url) => {
    console.log(url);
});

QRCode.toCanvas(canvas, 'sample text', { maskPattern: 0 }, error => {
    if (error) console.error(error);
    console.log('success!');
});

QRCode.toDataURL('I am a pony!', { maskPattern: 1 }, (err, url) => {
    console.log(url);
});

QRCode.toString('some text', { errorCorrectionLevel: 'H', maskPattern: '2' }, (err, str) => {
    console.log(str);
});

QRCode.toBuffer('some text', { errorCorrectionLevel: 'H', maskPattern: 3} , (err, buffer) => {
    if (err) throw err;
    console.log(buffer);
});

QRCode.toDataURL(
    [
        { data: 'ABCDEFG', mode: 'alphanumeric' },
        { data: '0123456', mode: 'numeric' },
        { data: '\x87\x90', mode: 'kanji' },
        { data: 'abc\ndef?', mode: 'byte' },
    ],
    (err, url) => {
        console.log(url);
    },
);

async () => {
    const string = await QRCode.toDataURL([
        { data: 'ABCDEFG', mode: 'alphanumeric' },
        { data: '0123456', mode: 'numeric' },
        { data: '\x87\x90', mode: 'kanji' },
        { data: 'abc\ndef?', mode: 'byte' },
    ]);
    console.log(string);
};

QRCode.toCanvas('text', { errorCorrectionLevel: 'H', width: 300 }, (err, canvas) => {
    if (err) throw err;
});

QRCode.toDataURL(
    'text',
    {
        errorCorrectionLevel: 'H',
        type: 'image/jpeg',
        rendererOpts: {
            quality: 0.3,
        },
    },
    (err, url) => {
        if (err) throw err;
    },
);

async () => {
    const string = await QRCode.toDataURL('text', {
        errorCorrectionLevel: 'H',
        type: 'image/jpeg',
        rendererOpts: {
            quality: 0.3,
        },
    });
    console.log(string);
};

QRCode.toString('http://www.google.com', (err, string) => {
    if (err) throw err;
    console.log(string);
});

async () => {
    const string = await QRCode.toString('http://www.google.com');
    console.log(string);
};

QRCode.toFile(
    'path/to/filename.png',
    'Some text',
    {
        color: {
            dark: '#00F', // Blue dots
            light: '#0000', // Transparent background
        },
    },
    err => {
        if (err) throw err;
        console.log('done');
    },
);

QRCode.toBuffer('http://www.google.com', (err, buffer) => {
    if (err) throw err;
    console.log(buffer);
});

QRCode.toBuffer(
    'Some text',
    {
        color: {
            dark: '#00F', // Blue dots
            light: '#0000', // Transparent background
        },
    },
    (err, buffer) => {
        if (err) throw err;
        console.log(buffer);
    },
);

async () => {
    const buffer = await QRCode.toBuffer('http://www.google.com');
    console.log(buffer);
};
