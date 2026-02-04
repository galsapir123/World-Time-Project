export interface TimeData {
  datetime: string;
  timezone: string;
  day_of_week: number;
  day_of_year: number;
  abbreviation: string;
  utc_datetime: string;
  utc_offset: string;
  raw_offset: number;
  dst: boolean;
  unixtime: number;
  week_number: number;
  client_ip: string;
  dst_from?: string;
  dst_until?: string;
  dst_offset?: number;
}

export interface CityTime {
  city: string;
  timezone: string;
  time: string;
  date: string;
  dayNight: string;
  gmt: string;
  fullData: TimeData;
}

const BASE_URL = 'https://time.now/developer/api/timezone';

const CITIES = [
  { name: 'Tel Aviv', timezone: 'Asia/Jerusalem' },
  { name: 'London', timezone: 'Europe/London' },
  { name: 'New York', timezone: 'America/New_York' },
  { name: 'Tokyo', timezone: 'Asia/Tokyo' },
  { name: 'Paris', timezone: 'Europe/Paris' },
  { name: 'Sydney', timezone: 'Australia/Sydney' },
  { name: 'Dubai', timezone: 'Asia/Dubai' },
  { name: 'Singapore', timezone: 'Asia/Singapore' },
  { name: 'Hong Kong', timezone: 'Asia/Hong_Kong' },
  { name: 'Bangkok', timezone: 'Asia/Bangkok' },
  { name: 'Los Angeles', timezone: 'America/Los_Angeles' },
  { name: 'Toronto', timezone: 'America/Toronto' },
];

const getDayNightEmoji = (hour: number): string => {
  if (hour >= 6 && hour < 18) {
    return '☀️'; // Day
  }
  return '🌙'; // Night
};

export const fetchCityTime = async (timezone: string): Promise<TimeData> => {
  try {
    const response = await fetch(`${BASE_URL}/${timezone}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch time for ${timezone}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching time: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

export const fetchAllCities = async (): Promise<CityTime[]> => {
  try {
    const promises = CITIES.map(async (city) => {
      const data = await fetchCityTime(city.timezone);
      
      // Parse datetime directly from ISO string to avoid timezone conversion
      // ISO format: "2026-02-04T18:17:08.465845+02:00"
      const isoString = data.datetime;
      const timeMatch = isoString.match(/T(\d{2}):(\d{2}):(\d{2})/);
      const dateMatch = isoString.match(/(\d{4})-(\d{2})-(\d{2})/);
      
      if (!timeMatch || !dateMatch) {
        throw new Error('Invalid datetime format');
      }
      
      const hour = parseInt(timeMatch[1]);
      const minute = parseInt(timeMatch[2]);
      const year = parseInt(dateMatch[1]);
      const monthNum = parseInt(dateMatch[2]);
      const dayOfMonth = parseInt(dateMatch[3]);
      
      // Calculate day of week from the date
      const dateObj = new Date(`${year}-${String(monthNum).padStart(2, '0')}-${String(dayOfMonth).padStart(2, '0')}T${timeMatch[1]}:${timeMatch[2]}:${timeMatch[3]}Z`);
      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayName = dayNames[dateObj.getUTCDay()];
      
      const timeString = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
      
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const dateString = `${dayName}, ${dayOfMonth} ${months[monthNum - 1]} ${year}`;
      
      // Extract GMT offset from utc_offset like "+02:00" or "-05:00"
      const utcOffset = data.utc_offset;
      const gmtString = utcOffset.replace(':', ''); // "+0200" -> "GMT +02:00"
      const sign = gmtString[0];
      const hours = gmtString.slice(1, 3);
      const mins = gmtString.slice(3, 5);
      const gmt = `GMT ${sign}${hours}:${mins}`;
      
      return {
        city: city.name,
        timezone: city.timezone,
        time: timeString,
        date: dateString,
        dayNight: getDayNightEmoji(hour),
        gmt: gmt,
        fullData: data,
      };
    });

    return await Promise.all(promises);
  } catch (error) {
    throw new Error(`Error fetching all cities: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

export const getCityByName = (cityName: string): { name: string; timezone: string } | undefined => {
  return CITIES.find((city) => city.name.toLowerCase() === cityName.toLowerCase());
};

export { CITIES };
