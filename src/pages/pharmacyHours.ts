import { useEffect, useState } from 'react';

/* ------------------------------------------------------------------------
   Single source of truth for the pharmacy's contact details and opening
   hours. Imported by SiteHeader (for the open/closed dot) and by the
   homepage (for the Find us hours table). Change the details here only.
   --------------------------------------------------------------------- */

export const PHONE_DISPLAY = '01902 969936';
export const PHONE_TEL = 'tel:01902969936';
export const EMAIL = 'castlecroftpharmacy@gmail.com';
export const ADDRESS_LINE_1 = '92 Windmill Ln, Castlecroft';
export const ADDRESS_LINE_2 = 'Wolverhampton WV3 8HG';
export const MAPS_EMBED =
  'https://maps.google.com/maps?q=92%20Windmill%20Ln%2C%20Castlecroft%2C%20Wolverhampton%20WV3%208HG&t=&z=15&ie=UTF8&iwloc=&output=embed';
export const MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=92+Windmill+Ln,+Castlecroft,+Wolverhampton+WV3+8HG';

/* opening hours as [openMinutes, closeMinutes], Sunday first, null = closed */
export const HOURS: Array<[number, number] | null> = [
  null,
  [540, 1080],
  [540, 1080],
  [540, 1080],
  [540, 1080],
  [540, 1080],
  [540, 780],
  
];

export const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const WEEK_ORDER = [1, 2, 3, 4, 5, 6, 0];

export const hhmm = (m: number) => `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}`;

/* current day + minutes in UK time, whatever timezone the visitor is in */
export function ukNow() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London',
    hour12: false,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).formatToParts(new Date());
  const bag: Record<string, string> = {};
  parts.forEach(part => { bag[part.type] = part.value; });
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(bag.weekday);
  const mins = (Number(bag.hour) % 24) * 60 + Number(bag.minute);
  return { day: day < 0 ? new Date().getDay() : day, mins };
}

export type OpenStatus = { open: boolean; label: string };

export function openStatus(): OpenStatus {
  const { day, mins } = ukNow();
  const today = HOURS[day];

  if (today) {
    if (mins < today[0]) return { open: false, label: `Opens today at ${hhmm(today[0])}` };
    if (mins < today[1]) return { open: true, label: `Open today until ${hhmm(today[1])}` };
  }
  for (let i = 1; i <= 7; i++) {
    const next = HOURS[(day + i) % 7];
    if (next) {
      const when = i === 1 ? 'tomorrow' : DAY_NAMES[(day + i) % 7];
      return { open: false, label: `Closed · opens ${when} at ${hhmm(next[0])}` };
    }
  }
  return { open: false, label: 'Closed' };
}

/* re-checks every minute so the dot flips at 9:00 / closing without a reload */
export function useOpenStatus(): OpenStatus {
  const [status, setStatus] = useState<OpenStatus>(openStatus);
  useEffect(() => {
    const id = window.setInterval(() => setStatus(openStatus()), 60000);
    return () => window.clearInterval(id);
  }, []);
  return status;
}
