import React from "react";

const Time = (props) => {
  const { date } = props;
  const time = new Date(),
    dateYear = date.getFullYear(),
    dateMonth = date.toLocaleDateString("en", { month: "numeric" }),
    dateDay = date.getDate(),
    dateHour = date.getHours(),
    dateMin = date.getMinutes(),
    dateSecond = date.getSeconds(),
    timeYear = time.getFullYear(),
    timeMonth = time.toLocaleDateString("en", { month: "numeric" }),
    timeDay = time.getDate(),
    timeHour = time.getHours(),
    timeMin = time.getMinutes(),
    timeSecond = time.getSeconds();
  const timeToDate = () => {
    if (Math.abs(dateYear - timeYear) === 0) {
      if (Math.abs(dateMonth - timeMonth) === 0) {
        if (Math.abs(dateDay - timeDay) === 0) {
          if (Math.abs(dateHour - timeHour) === 0) {
            if (Math.abs(dateMin - timeMin) === 0) {
              if (Math.abs(dateSecond - timeSecond) === 0) {
              } else if (Math.abs(dateSecond - timeSecond) === 1) {
                return `ثانية`;
              } else if (Math.abs(dateSecond - timeSecond) === 2) {
                return `ثانيتان`;
              } else {
                return `${Math.abs(dateSecond - timeSecond)} ثوان`;
              }
            } else if (Math.abs(dateMin - timeMin) === 1) {
              return "دقيقه";
            } else if (Math.abs(dateMin - timeMin) === 2) {
              return "دقيقتان";
            } else {
              return `${Math.abs(dateMin - timeMin)} دقيقه`;
            }
          }
          if (Math.abs(dateHour - timeHour) === 1) {
            return "ساعه";
          } else if (Math.abs(dateHour - timeHour) === 2) {
            return ` ساعتان`;
          } else {
            return `${Math.abs(dateHour - timeHour)} ساعات`;
          }
        } else if (Math.abs(dateDay - timeDay) === 1) {
          return `يوم`;
        } else if (Math.abs(dateDay - timeDay) === 2) {
          return `يومان`;
        } else {
          return `${Math.abs(dateDay - timeDay)} يوم`;
        }
      } else if (Math.abs(dateMonth - timeMonth) === 1) {
        return "شهر";
      } else if (Math.abs(dateMonth - timeMonth) === 2) {
        return "شهرين";
      } else {
        return `${Math.abs(dateMonth - timeMonth)} شهر`;
      }
    } else if (Math.abs(dateYear - timeYear) === 1) {
      return `سنه`;
    } else if (Math.abs(dateYear - timeYear) === 2) {
      return `سنتان`;
    } else {
      return `${Math.abs(dateYear - timeYear)} سنوات`;
    }
  };
  return <React.Fragment>{timeToDate()}</React.Fragment>;
};

export default Time;
