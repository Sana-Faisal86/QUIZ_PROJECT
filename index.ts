import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.magenta(
    "\n\t=======>",
    chalk.blueBright("Start Typescript Quiz"),
    "<=======\n\t"
  )
);
console.log(
  "*******************************************************************************"
);
let totalMarks = 50;
let oneQsMark = 10;
let totalObtmark = 0;

let answer1 = await inquirer.prompt([
  {
    name: "Q1",
    type: "list",
    message: chalk.green("QS:1 = What is Extension for typescript file?"),
    choices: [
      "A => abc.js",
      "B => abc.ts",
      "C => abc.tsc",
      "D => none of the above",
    ],
  },
]);

if (answer1.Q1 === "B => abc.ts") {
  console.log(
    chalk.yellow(
      "\n\t***** You are right answer: your mark is :",
      chalk.red((totalObtmark += oneQsMark))
    )
  );
  console.log(
    "======================================================================================="
  );
} else {
  console.log(chalk.red("\n\t======> You are wrong answer <======"));
  console.log(chalk.cyan("\n\tCorrect answer is ===> 'B => abc.ts'"));

  console.log(
    "======================================================================================="
  );
}
let answer2 = await inquirer.prompt([
  {
    name: "Q2",
    type: "list",
    message: chalk.green(
      "QS:2 = Which of the following is NOT a valid TypeScript data type?"
    ),
    choices: ["A => void", "B => any", "C => dynamic", "D => tuple"],
  },
]);

if (answer2.Q2 === "B => any") {
  console.log(
    chalk.yellow(
      "\n\t***** You are right answer: your mark is :",
      chalk.red((totalObtmark += oneQsMark))
    )
  );
  console.log(
    "========================================================================================"
  );
} else {
  console.log(chalk.red("\n\t======> You are wrong answer <======"));
  console.log(chalk.cyan("\n\tCorrect answer is ===> 'B => any'"));

  console.log(
    "========================================================================================"
  );
}
let answer3 = await inquirer.prompt([
  {
    name: "Q3",
    type: "list",
    message: chalk.green(
      "QS:3 = How do you denote a variable as readonly in TypeScript?"
    ),
    choices: ["A => const", "B => static", "C => readonly", "D => fixed"],
  },
]);
if (answer3.Q3 === "C => readonly") {
  console.log(
    chalk.yellow(
      "\n\t***** You are right answer: your mark is :",
      chalk.red((totalObtmark += oneQsMark))
    )
  );
  console.log(
    "========================================================================================"
  );
} else {
  console.log(chalk.red("\n\t======> You are wrong answer <======"));
  console.log(chalk.cyan("\n\tCorrect answer is ===> 'C => readonly'"));

  console.log(
    "========================================================================================"
  );
}
let answer4 = await inquirer.prompt([
  {
    name: "Q4",
    type: "list",
    message: chalk.green(
      "QS:4 = Which command would you use to install TypeScript globally using npm ?"
    ),
    choices: [
      "A => npm install typescript",
      "B => npm global install typescript",
      "C => npm install -g typescript",
      "D => npm typescript install global",
    ],
  },
]);

if (answer4.Q4 === "C => npm install -g typescript") {
  console.log(
    chalk.yellow(
      "\n\t***** You are right answer: your mark is :",
      chalk.red((totalObtmark += oneQsMark))
    )
  );
  console.log(
    "====================================================================================="
  );
} else {
  console.log(chalk.red("\n\t=======> You are wrong answer <======"));
  console.log(
    chalk.cyan("\n\tCorrect answer is ===> 'C => npm install -g typescript'")
  );

  console.log(
    "======================================================================================"
  );
}
let answer5 = await inquirer.prompt([
  {
    name: "Q5",
    type: "list",
    message: chalk.green(
      "QS:5 = Which of the following TypeScript types can the unknown type be assigned to without type assertion ?"
    ),
    choices: ["A => string", "B => number", "C => any", "D => void"],
  },
]);
if (answer5.Q5 === "C => any") {
  console.log(
    chalk.yellow(
      "\n\t***** You are right answer: your mark is :",
      chalk.redBright((totalObtmark += oneQsMark))
    )
  );
  console.log(
    "========================================================================================"
  );
} else {
  console.log(chalk.red("\n\t======> You are wrong answer <======"));
  console.log(chalk.cyan("\n\tCorrect answer is ===> 'C = > any'"));
}
console.log(
  "*******************************************************************************************"
);
console.log(
  chalk.magenta(
    "\n\t===========>",
    chalk.black.bgYellow(" QUIZ END "),
    "<==========="
  )
);
console.log(
  chalk.black.bgBlue("\n\t==> Your Final Score is ====> "),
  chalk.black.bgRed(totalObtmark),
  chalk.black.bgWhite(" OUT OF "),
  chalk.black.bgRed(totalMarks)
);
console.log(chalk.black.bgGreen("\n\t==> Thank You for Attempting the Quiz "));
console.log(
  chalk.black.bgBlue("\n\t==> This Quiz made by ==>"),
  chalk.black.bgRed("'SANA FAISAL'")
);

console.log(
  chalk.magenta("\n\t===========>**********************<===========")
);
// THE END :
