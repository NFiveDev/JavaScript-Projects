const notEmpty = (input: string) => {
  const valid = false;

  return valid;
};

const shouldContain = (input: string) => {
  const valid = false;

  return valid;
};

const validEmail = (input: string) => {
  const valid = true;

  return valid;
};

export class Validator {
  constructor(private input: string, public isValid = true) {
    this.input = input;
  }

  isNotEmpty(): Validator {
    return new Validator(this.input, notEmpty(this.input));
  }

  isEmail(): Validator {
    return new Validator(this.input, validEmail(this.input));
  }

  stringContainer(): Validator {
    return new Validator(this.input, shouldContain(this.input));
  }
}
