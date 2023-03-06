function multiplicator(a: number, b: number, printText: string) {
  console.log(printText, a * b);
}

function parseArgs(args: string[]): number[] {
  return args.slice(2).map((arg) => {
    if (isNaN(Number(arg))) {
      throw new Error(`Provided value is not a number: ${arg}`);
    }

    return Number(arg);
  });
}

try {
  const [a, b] = parseArgs(process.argv);

  multiplicator(a, b, `Multiplied number ${a} and ${b}, the result is:`);
} catch (error) {
  let errorMessage = "Something bad happend. ";
  if (error instanceof Error) {
    errorMessage += error.message;
  }

  console.log(errorMessage);
}
