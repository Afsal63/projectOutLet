import FingerprintJS from "@fingerprintjs/fingerprintjs";

export const camelize = (str: string) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
};

export const getDeviceId = async () => {
  const fpPromise = FingerprintJS.load();

  try {
    const fp = await fpPromise;
    const result = await fp.get();
    if (await result.visitorId) {
      return result.visitorId;
    }
  } catch (error) {
    alert(error);
  }
  // Get the visitor identifier when you need it.
};

export const setInputFilter = (value: any) => {
  return /^\d*\.?\d*$/.test(value);
};

export const titleCase = (str: string) => {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
};

export const getCourseMode = (mode: string) => {
  switch (mode) {
    case "asdaTalk":
      return "ASDA Talk";

    case "blendedCourse":
      return "Blended Course";

    case "onlineCourse":
      return "Online Course";

    default:
      return "N/A";
  }
};

export const truncate = (input: string, length?: number) =>
  input.length > 5 ? `${input.substring(0, length || 5)}...` : input;
