const fs = require("fs");
const path = require("path");

const logsDir = path.join(process.cwd(), "Logs");

if (fs.existsSync(logsDir)) {
    const files = fs.readdirSync(logsDir);

    files.forEach(file => {
        fs.unlinkSync(path.join(logsDir, file));
        console.log("Deleted:", file);
    });

    fs.rmdirSync(logsDir);
}

// Create Logs directory
fs.mkdirSync(logsDir);

// Changing the current working directory
process.chdir(logsDir);

// Create 10 log files
for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file ${i}`);
    console.log("Created:", fileName);
}