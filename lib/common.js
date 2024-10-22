import { NextResponse } from "next/server";
const SUCCESS = "success";
const NOW = `((GETDATE() AT TIME ZONE 'UTC') AT TIME ZONE 'AUS Eastern Standard Time')`;
const NOW_DATE = `CONVERT(DATE, ${NOW})`;
const NOW_DATETIME = `CONVERT(DATETIME, ${NOW})`;
const ALL = "All";

const handleError = (func) => async (req) => {
  try {
    return await func(req);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
};

const isInt = (n) => !isNotInt(n);

const clean = (str) => {
  try {
    return str
      .replace(/'/g, "")
      .replace(/"/g, "")
      .replace(/\r?\n|\r/g, "")
      .replace(/\s+/g, " ")
      .replace(/\\/g, "");
  } catch (error) {
    return str;
  }
};

export {
  handleError,
  SUCCESS,
  NOW,
  NOW_DATE,
  NOW_DATETIME,
  ALL,
  isInt,
};
