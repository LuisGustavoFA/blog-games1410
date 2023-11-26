export const calctime = (time) => {
  const apiTime = new Date(time);
  let timeDifference;

  const currentTime = new Date();
  const difference = currentTime - apiTime;

  const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hoursDifference = Math.floor(difference / (1000 * 60 * 60));
  const minutesDifference = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  if (daysDifference >= 1) timeDifference = `${daysDifference}d atrás`;
  else if (hoursDifference > 0) timeDifference = `${hoursDifference}h${minutesDifference}min atrás`;
  else timeDifference = `${minutesDifference}min atrás`;

  if (daysDifference <= 7) {
    return timeDifference;
  }
  else {
    return apiTime.toLocaleDateString();
  }
}