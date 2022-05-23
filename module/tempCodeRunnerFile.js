fs.writeFile('dec.mp4', res,'utf8', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });