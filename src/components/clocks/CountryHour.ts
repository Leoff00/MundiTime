// All the logic of the time zone and clocks will be applied here.

const date = new Date();

const updateSeconds = () => {
  const seconds = date.getSeconds();

  console.log(seconds);
};

export const Brazil = setInterval(updateSeconds, 1000);
