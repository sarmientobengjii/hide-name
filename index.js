export function hideName(name) {

    if (typeof name !== 'string' || !/^[A-Za-z\s]+$/.test(name) || name.trim().split(/\s+/).length < 2) {
      return "Input provided is not a valid name";
    }

    let parts = name.trim().toUpperCase().split(/\s+/);

    let surnameInitial = parts[parts.length - 1][0] + ".";

    let maskedParts = parts.slice(0, -1).map(word => {
      if (word.length <= 3) return word;
      return word.slice(0, 2) + "*".repeat(word.length - 3) + word.slice(-1);
    });

    return maskedParts.join(" ") + " " + surnameInitial;
}