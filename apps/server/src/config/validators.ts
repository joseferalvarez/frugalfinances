export class Validators {
  static isValidEmail(email: string): boolean {
    if (email.length === 0 || email.length > 254) {
      return false;
    }

    const at = email.indexOf("@");
    if (at <= 0 || at !== email.lastIndexOf("@") || at === email.length - 1) {
      return false;
    }

    const local = email.slice(0, at);
    const domain = email.slice(at + 1);
    if (local.length === 0 || domain.length < 3) {
      return false;
    }

    const dot = domain.indexOf(".");
    if (dot <= 0 || dot === domain.length - 1) {
      return false;
    }

    if (email.includes(" ")) {
      return false;
    }

    return true;
  }

  static isValidUsername(username: string): boolean {
    if (username.length < 3 || username.length > 100) {
      return false;
    }

    let hasAlphaNumeric = false;

    for (const char of username) {
      const isLetter = (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");

      const isNumber = char >= "0" && char <= "9";

      if (isLetter || isNumber) {
        hasAlphaNumeric = true;
        continue;
      }

      if (char !== "_" && char !== ".") {
        return false;
      }
    }

    return hasAlphaNumeric;
  }

  static isValidPassword(password: string): boolean {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,128}$/;
    return regex.test(password);
  }
}
