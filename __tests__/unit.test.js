// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber

test('phone number without area code', () => {
  expect(isPhoneNumber("4567890")).toBe(false);
});

test('phone number with illegal characters', () => {
  expect(isPhoneNumber("123#456#7890")).toBe(false);
});

test('phone number with international code', () => {
  expect(isPhoneNumber("(1) 123-456-7890")).toBe(true);
});

test('phone number without dashes', () => {
  expect(isPhoneNumber("(123)-456-7890")).toBe(true);
});

// isEmail
test('email without @', () => {
  expect(isEmail("p3reddyucsd.edu")).toBe(false);
});

test('email without url', () => {
  expect(isEmail("p3reddy@")).toBe(false);
});

test('email with 2 character extension', () => {
  expect(isEmail("p3reddy@ucsd.to")).toBe(true);
});

test('email with 3 character extension', () => {
  expect(isEmail("p3reddy@ucsd.edu")).toBe(true);
});

// isStrongPassword
test('too short password', () => {
  expect(isStrongPassword("p3r")).toBe(false);
});

test('too long password', () => {
  expect(isStrongPassword("Anb1234567890123")).toBe(false);
});

test('password with special characters', () => {
  expect(isStrongPassword("AA12345AhB__")).toBe(true);
});

test('password without special characters', () => {
  expect(isStrongPassword("as123456789")).toBe(true);
});

// isDate
test('YYYY/MM/DD', () => {
  expect(isDate("2024/05/05")).toBe(false);
});

test('MM/DD/YY', () => {
  expect(isDate("05/05/24")).toBe(false);
});

test('M/D/YYYY', () => {
  expect(isDate("5/5/2024")).toBe(true);
});

test('MM/DD/YYYY', () => {
  expect(isDate("05/05/2024")).toBe(true);
});

// isHexColor
test('Invalid Alphabetical Hex Digit', () => {
  expect(isHexColor("#gcba03")).toBe(false);
});

test('7 character string', () => {
  expect(isHexColor("#fcb00323")).toBe(false);
});

test('Lowercase hex string', () => {
  expect(isHexColor("ffffff")).toBe(true);
});

test('Uppercase hex string', () => {
  expect(isHexColor("FFFFFF")).toBe(true);
});