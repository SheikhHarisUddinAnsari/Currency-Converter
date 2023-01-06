#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function input() {
  const welcome: string = `Welcome to Money Exchange Teller`;
  console.log(chalk.bgWhite(chalk.green(welcome)));
  const userCurrency = await inquirer
    .prompt([
      {
        type: `rawlist`,
        name: `userCurrency`,
        message: `Select Currency Of Your Amount`,
        choices: [
          `Pak Rupees`,
          `US Dollar`,
          `Canadian Dollar`,
          `Australian Dollar`,
          `New Zealand Dollar`,
          `Swiss Franc`,
          `Euro`,
          `Chinese Yuan`,
          `Pound Sterling`,
          `Japanese Yen`,
        ],
      },
    ])
    .then((ans) => {
      const userCurrency: string = ans.userCurrency;
      return userCurrency;
    });

  const userAmount: number = await inquirer
    .prompt([
      {
        type: `input`,
        name: `userAmount`,
        message: `Enter Amount Of Your Currency`,
        default: 1000,
      },
    ])
    .then((ans) => {
      const userAmount: number = ans.userAmount;
      return userAmount;
    });

  console.log(
    chalk.bgWhite(chalk.redBright(`You Entered ${userAmount} ${userCurrency}`))
  );
  const convCurrency = await inquirer
    .prompt([
      {
        type: `rawlist`,
        name: `convCurrency`,
        message: `Select Currency In Which You Want To Convert Your Amount`,
        choices: [
          `Pak Rupees`,
          `US Dollar`,
          `Canadian Dollar`,
          `Australian Dollar`,
          `New Zealand Dollar`,
          `Swiss Franc`,
          `Euro`,
          `Chinese Yuan`,
          `Pound Sterling`,
          `Japanese Yen`,
        ],
      },
    ])
    .then((ans) => {
      const convCurrency: string = ans.convCurrency;
      return convCurrency;
    });

  switch (true) {
    case userCurrency == `US Dollar`:
      new US_Dollar(userAmount, userCurrency, convCurrency);
      if (userCurrency == convCurrency) {
        console.log(
          chalk.bgWhite(
            chalk.redBright(
              `The amount will remain the same that is ${userAmount} ${userCurrency}`
            )
          )
        );
      }
      break;
    case userCurrency == `Australian Dollar`:
      new Australian_Dollar(userAmount, userCurrency, convCurrency);
      if (userCurrency == convCurrency) {
        console.log(
          chalk.bgWhite(
            chalk.redBright(
              `The amount will remain the same that is ${userAmount} ${userCurrency}`
            )
          )
        );
      }

      break;
    case userCurrency == `Canadian Dollar`:
      new Canadian_Dollar(userAmount, userCurrency, convCurrency);
      if (userCurrency == convCurrency) {
        console.log(
          chalk.bgWhite(
            chalk.redBright(
              `The amount will remain the same that is ${userAmount} ${userCurrency}`
            )
          )
        );
      }

      break;
    case userCurrency == `New Zealand Dollar`:
      new New_Zealand_Dollar(userAmount, userCurrency, convCurrency);
      if (userCurrency == convCurrency) {
        console.log(
          chalk.bgWhite(
            chalk.redBright(
              `The amount will remain the same that is ${userAmount} ${userCurrency}`
            )
          )
        );
      }

      break;
    case userCurrency == `Pak Rupees`:
      new Pak_Rupees(userAmount, userCurrency, convCurrency);
      if (userCurrency == convCurrency) {
        console.log(
          chalk.bgWhite(
            chalk.redBright(
              `The amount will remain the same that is ${userAmount} ${userCurrency}`
            )
          )
        );
      }

      break;
    case userCurrency == `Swiss Franc`:
      new Swiss_Franc(userAmount, userCurrency, convCurrency);
      if (userCurrency == convCurrency) {
        console.log(
          chalk.bgWhite(
            chalk.redBright(
              `The amount will remain the same that is ${userAmount} ${userCurrency}`
            )
          )
        );
      }

      break;
    case userCurrency == `Euro`:
      new Euro(userAmount, userCurrency, convCurrency);
      if (userCurrency == convCurrency) {
        console.log(
          chalk.bgWhite(
            chalk.redBright(
              `The amount will remain the same that is ${userAmount} ${userCurrency}`
            )
          )
        );
      }

      break;
    case userCurrency == `Chinese Yuan`:
      new Chinese_Yuan(userAmount, userCurrency, convCurrency);
      if (userCurrency == convCurrency) {
        console.log(
          chalk.bgWhite(
            chalk.redBright(
              `The amount will remain the same that is ${userAmount} ${userCurrency}`
            )
          )
        );
      }

      break;
    case userCurrency == `Pound Sterling`:
      new Pound_Sterling(userAmount, userCurrency, convCurrency);
      if (userCurrency == convCurrency) {
        console.log(
          chalk.bgWhite(
            chalk.redBright(
              `The amount will remain the same that is ${userAmount} ${userCurrency}`
            )
          )
        );
      }

      break;
    case userCurrency == `Japanese Yen`:
      new Japanese_Yen(userAmount, userCurrency, convCurrency);
      if (userCurrency == convCurrency) {
        console.log(
          chalk.bgWhite(
            chalk.redBright(
              `The amount will remain the same that is ${userAmount} ${userCurrency}`
            )
          )
        );
      }

      break;

    default:
      break;
  }
} //this function takes 3 inputs()
//(1)User Currency
//(2)User Amount
//(3)The currency in which user want to convert it's amount
//This function also call classes according to the required conditions

class US_Dollar {
  constructor(amount: number, user_currency: string, conv_currency: string) {
    let message: string;
    let amount2: number;

    switch (true) {
      case conv_currency == `Pak Rupees`:
        amount2 = amount * 230;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Japanese Yen`:
        amount2 = amount * 133.7;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Chinese Yuan`:
        amount2 = amount * 6.87;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Australian Dollar`:
        amount2 = amount * 1.48;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `New Zealand Dollar`:
        amount2 = amount * 1.6;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Swiss Franc`:
        amount2 = amount * 0.94;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Euro`:
        amount2 = amount * 0.95;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Pound Sterling`:
        amount2 = amount * 0.84;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Canadian Dollar`:
        amount2 = amount * 0.92;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      default:
        break;
    }
  }
} //this class is for conversion of US Dollar to other currencies

class Australian_Dollar {
  constructor(amount: number, user_currency: string, conv_currency: string) {
    let message: string;
    let amount2: number;

    switch (true) {
      case conv_currency == `Pak Rupees`:
        amount2 = amount * 155.8;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Japanese Yen`:
        amount2 = amount * 90.65;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Chinese Yuan`:
        amount2 = amount * 4.64;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `US Dollar`:
        amount2 = amount * 0.68;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `New Zealand Dollar`:
        amount2 = amount * 1.08;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Swiss Franc`:
        amount2 = amount * 0.63;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Euro`:
        amount2 = amount * 0.64;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Pound Sterling`:
        amount2 = amount * 0.57;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Canadian Dollar`:
        amount2 = amount * 0.92;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      default:
        break;
    }
  }
} //this class is for conversion of Australian Dollar to other currencies

class Canadian_Dollar {
  constructor(amount: number, user_currency: string, conv_currency: string) {
    let message: string;
    let amount2: number;

    switch (true) {
      case conv_currency == `Pak Rupees`:
        amount2 = amount * 169.73;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Japanese Yen`:
        amount2 = amount * 98.75;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Chinese Yuan`:
        amount2 = amount * 5.06;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `US Dollar`:
        amount2 = amount * 0.74;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Australian Dollar`:
        amount2 = amount * 1.09;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `New Zealand Dollar`:
        amount2 = amount * 1.18;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Swiss Franc`:
        amount2 = amount * 0.69;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Euro`:
        amount2 = amount * 0.7;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Pound Sterling`:
        amount2 = amount * 0.62;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      default:
        break;
    }
  }
} //this class is for conversion of Canadian Dollar to other currencies

class New_Zealand_Dollar {
  constructor(amount: number, user_currency: string, conv_currency: string) {
    let message: string;
    let amount2: number;

    switch (true) {
      case conv_currency == `Pak Rupees`:
        amount2 = amount * 143.68;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Japanese Yen`:
        amount2 = amount * 83.63;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Chinese Yuan`:
        amount2 = amount * 4.28;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `US Dollar`:
        amount2 = amount * 0.62;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Australian Dollar`:
        amount2 = amount * 0.92;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Canadian Dollar`:
        amount2 = amount * 0.85;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Swiss Franc`:
        amount2 = amount * 0.58;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Euro`:
        amount2 = amount * 0.59;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Pound Sterling`:
        amount2 = amount * 0.52;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      default:
        break;
    }
  }
} //this class is for conversion of New Zealand Dollar to other currencies

class Pak_Rupees {
  constructor(amount: number, user_currency: string, conv_currency: string) {
    let message: string;
    let amount2: number;

    switch (true) {
      case conv_currency == `New Zealand Dollar`:
        amount2 = amount * 0.007;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Japanese Yen`:
        amount2 = amount * 0.58;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Chinese Yuan`:
        amount2 = amount * 0.03;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `US Dollar`:
        amount2 = amount * 0.0043;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Australian Dollar`:
        amount2 = amount * 0.0064;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Canadian Dollar`:
        amount2 = amount * 0.0059;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Swiss Franc`:
        amount2 = amount * 0.0041;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Euro`:
        amount2 = amount * 0.0041;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Pound Sterling`:
        amount2 = amount * 0.0036;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      default:
        break;
    }
  }
} //this class is for conversion of Pak Rupees to other currencies
class Swiss_Franc {
  constructor(amount: number, user_currency: string, conv_currency: string) {
    let message: string;
    let amount2: number;

    switch (true) {
      case conv_currency == `Pak Rupees`:
        amount2 = amount * 245.57;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Japanese Yen`:
        amount2 = amount * 142.99;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Chinese Yuan`:
        amount2 = amount * 7.32;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `US Dollar`:
        amount2 = amount * 1.07;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Australian Dollar`:
        amount2 = amount * 1.58;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Canadian Dollar`:
        amount2 = amount * 1.45;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `New Zealand Dollar`:
        amount2 = amount * 1.71;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Euro`:
        amount2 = amount * 1.01;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Pound Sterling`:
        amount2 = amount * 0.9;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      default:
        break;
    }
  }
} //this class is for conversion of Swiss Franc to other currencies

class Euro {
  constructor(amount: number, user_currency: string, conv_currency: string) {
    let message: string;
    let amount2: number;

    switch (true) {
      case conv_currency == `Pak Rupees`:
        amount2 = amount * 242.16;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Japanese Yen`:
        amount2 = amount * 140.91;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Chinese Yuan`:
        amount2 = amount * 7.22;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `US Dollar`:
        amount2 = amount * 1.05;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Australian Dollar`:
        amount2 = amount * 1.55;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Canadian Dollar`:
        amount2 = amount * 1.43;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `New Zealand Dollar`:
        amount2 = amount * 1.68;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Swiss Franc`:
        amount2 = amount * 0.99;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Pound Sterling`:
        amount2 = amount * 0.88;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      default:
        break;
    }
  }
} //this class is for conversion of Euro to other currencies

class Chinese_Yuan {
  constructor(amount: number, user_currency: string, conv_currency: string) {
    let message: string;
    let amount2: number;

    switch (true) {
      case conv_currency == `Pak Rupees`:
        amount2 = amount * 33.57;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Japanese Yen`:
        amount2 = amount * 19.53;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Swiss Franc`:
        amount2 = amount * 0.14;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `US Dollar`:
        amount2 = amount * 0.15;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Australian Dollar`:
        amount2 = amount * 0.22;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Canadian Dollar`:
        amount2 = amount * 0.2;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `New Zealand Dollar`:
        amount2 = amount * 0.23;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Euro`:
        amount2 = amount * 0.14;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Pound Sterling`:
        amount2 = amount * 0.12;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      default:
        break;
    }
  }
} //this class is for conversion of Chinese Yuan to other currencies

class Japanese_Yen {
  constructor(amount: number, user_currency: string, conv_currency: string) {
    let message: string;
    let amount2: number;

    switch (true) {
      case conv_currency == `Pak Rupees`:
        amount2 = amount * 1.72;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Swiss Franc`:
        amount2 = amount * 0.007;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Chinese Yuan`:
        amount2 = amount * 0.051;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `US Dollar`:
        amount2 = amount * 0.0075;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Australian Dollar`:
        amount2 = amount * 0.011;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Canadian Dollar`:
        amount2 = amount * 0.01;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `New Zealand Dollar`:
        amount2 = amount * 0.012;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Euro`:
        amount2 = amount * 0.0071;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Pound Sterling`:
        amount2 = amount * 0.0063;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      default:
        break;
    }
  }
} //this class is for conversion of Japanese Yen to other currencies

class Pound_Sterling {
  constructor(amount: number, user_currency: string, conv_currency: string) {
    let message: string;
    let amount2: number;

    switch (true) {
      case conv_currency == `Pak Rupees`:
        amount2 = amount * 274.23;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));

        break;
      case conv_currency == `Japanese Yen`:
        amount2 = amount * 159.63;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));

        break;
      case conv_currency == `Chinese Yuan`:
        amount2 = amount * 8.18;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));

        break;
      case conv_currency == `US Dollar`:
        amount2 = amount * 1.19;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));

        break;
      case conv_currency == `Australian Dollar`:
        amount2 = amount * 1.76;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));

        break;
      case conv_currency == `Canadian Dollar`:
        amount2 = amount * 1.62;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `New Zealand Dollar`:
        amount2 = amount * 1.91;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Euro`:
        amount2 = amount * 1.13;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      case conv_currency == `Swiss Franc`:
        amount2 = amount * 1.12;
        message = `${amount} ${user_currency} is equal to ${amount2} ${conv_currency}`;
        console.log(chalk.bgCyan(chalk.blue(message)));
        break;
      default:
        break;
    }
  }
} //this class is for conversion of Pound Sterling/*  */ to other currencies

input();
