/**
 * Local timezone safe date and time helpers for SERA reservation system.
 */

/**
 * Returns YYYY-MM-DD in the visitor's local timezone.
 */
export function getLocalTodayDateString(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Returns true if the given YYYY-MM-DD string is a Monday in the local calendar.
 */
export function isDateMonday(dateStr: string): boolean {
  if (!dateStr) return false;
  const parts = dateStr.split('-').map(Number);
  if (parts.length !== 3) return false;
  const [year, month, day] = parts;
  // Note: month is 0-indexed in JS Date
  const localDate = new Date(year, month - 1, day);
  // getDay(): 0 is Sunday, 1 is Monday, ..., 6 is Saturday
  return localDate.getDay() === 1;
}

/**
 * Checks if a given time slot (e.g. '19:30') on the selected date is already in the past
 * relative to the user's current local time.
 */
export function isSlotPast(dateStr: string, timeStr: string): boolean {
  const todayStr = getLocalTodayDateString();
  if (dateStr !== todayStr) return false;

  const now = new Date();
  const [hours, minutes] = timeStr.split(':').map(Number);
  
  const slotDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hours,
    minutes,
    0,
    0
  );

  return slotDate.getTime() <= now.getTime();
}

import { TIME_SLOTS } from '../data/restaurantData';

/**
 * Filters time slots for a given date, removing past slots if the date is today.
 */
export function getAvailableTimeSlots(
  dateStr: string,
  allSlots: string[] = TIME_SLOTS
): string[] {
  const todayStr = getLocalTodayDateString();
  if (dateStr !== todayStr) {
    return allSlots;
  }
  return allSlots.filter((slot) => !isSlotPast(dateStr, slot));
}
