const fs = require("fs");

// Function ending with Sync is a (Blocking process in nature)
// In a blocking process, the execution of code halts until a particular operation completes.
// This means that other operations or tasks are blocked from executing until the current one finishes
// Here's an example:

fs.writeFileSync(
  "./textDataSync.txt",
  "HEy hi i have wriiten data in sync manner into the text file using fs module package"
);

// -------------------------------------------------------------------------------------------------------------------------------------

// NON-Blocking Process
// In a non-blocking process, the execution of code continues without waiting for an operation to complete.
//  Instead, a callback function or a promise is used to handle the result of the operation when it becomes available.
//  Here's an example using callbacks:

fs.writeFile(
  "./textDataA.txt",
  "This is non-blocking process which is Async in nature used to execute without waiting for another operation",
  (err) => {}
);

// const result = fs.readFileSync("./textDataA.txt", "utf-8");

fs.readFile("./textDataSync.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Its a error");
  } else {
    console.log("Data results", result);
  }
});

fs.appendFileSync("./textDataA.txt", new Date().toDateString());

fs.cpSync("./textDataA.txt", "./NewCopies.txt");

const info = fs.statSync("./package.json");
console.log(info, "INFO");

fs.unlinkSync("./NewCopies.txt");
