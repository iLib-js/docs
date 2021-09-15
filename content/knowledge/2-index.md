---
title: "TimeZone"
metaTitle: "TimeZone"
metaDescription: "TimeZone"
---

### TimeZone

> A [time zone](https://en.wikipedia.org/wiki/Time_zone) is an area that observes a uniform standard time for legal, commercial and social purposes. Time zones tend to follow the boundaries between countries and their subdivisions instead of strictly following longitude, because it is convenient for areas in frequent communication to keep the same time.  

> All time zones are defined as offsets from [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time), ranging from UTC−12:00 to UTC+14:00. The offsets are usually a whole number of hours, but a few zones are offset by additional 30 or 45 minutes, such as in India and Nepal.

  _from Wikipedia_


#### UTC
Coordinated Universal Time (UTC) is the basis for civil time today. This 24-hour time standard is kept using highly precise atomic clocks combined with the Earth's rotation. 

UTC is the time standard commonly used across the world. The world's timing centers have agreed to keep their time scales closely synchronized - or coordinated - therefore the name Coordinated Universal Time

#### UTC offset
UTC is the world’s time standard. This means that the time in every other part of the world is determined using UTC. In fact, the local time anywhere in the world can be obtained by adding or subtracting an offset from UTC.   

For example, the time in Seoul, It can always be obtained by adding 9 hours  to the current time in UTC. So the time here can be expressed as _UTC+09:00_.

Javascript date **[getTimezoneOffset()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset)** method returns the time-zone offset in minutes for the current locale.  
The timezone offset is the minutes in difference, the UTC is relative to your locale time.

For example, if your time zone is UTC+09:00, -540 will be returned. Daylight savings time prevents this value from being a constant.

``` javascript
> var date = new Date()
> date
//`Fri Apr 30 2021 14:52:14 GMT+0900 (Korean Standard Time)`
> date.getTimezoneOffset()
//-540
```


#### The Difference Between GMT and UTC
Greenwich Mean Time (GMT) is often interchanged or confused with Coordinated Universal Time (UTC). But GMT is a time zone and UTC is a time standard. Let's checkout the [current UTC](https://www.timeanddate.com/worldclock/timezone/utc)


Although GMT and UTC share the same current time in practice, there is a basic difference between the two:

* **GMT is a time zone** officially used in some European and African countries. The time can be displayed using both the 24-hour format (0 - 24) or the 12-hour format (1 - 12 am/pm).
* **UTC is not a time zone**, but a time standard that is the basis for civil time and time zones worldwide. This means that no country or territory officially uses UTC as a local time.

#### Daylight Saving Time
DST is a seasonal time change measure where clocks are set ahead of standard time during part of the year, usually by one hour. As DST starts, the Sun rises and sets later, on the clock, than the day before.  
Today, about 40% of countries worldwide use it to make better use of daylight and to conserve energy.

### TimeZone Database
[The Time Zone Database](https://www.iana.org/time-zones) (often called tz or zoneinfo) contains code and data that represent the history of local time for many representative locations around the globe. It is updated periodically to reflect changes made by political bodies to time zone boundaries, UTC offsets, and daylight-saving rules. Its management procedure is documented in BCP 175: Procedures for Maintaining the Time Zone Database.

### Appendix
* [TimeZone Map](https://www.timeanddate.com/time/map/)
* [Why is it Called UTC - not CUT?](https://www.timeanddate.com/time/utc-abbreviation.html)
* [History of Daylight Saving Time(DST)](https://www.timeanddate.com/time/dst/history.html)
* [How Does Daylight Saving Time Work?](https://www.timeanddate.com/time/dst/transition.html)