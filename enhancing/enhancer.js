module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement === 20){
    return { ...item };
  }else{
    item.enhancement += 1
    return { ...item };
  }
}

function fail(item) {
  if(item.enhancement < 15){
    item.durability -= 5;
  }else if(item.enhancement > 15){
    item.durability -= 10;

    if(item.enhancement > 16){
      item.enhancement -= 1;
    }
  }

  return { ...item };
}

function repair(item) {
  if(item.durability === 100){
    return {...item};
  }else{
    item.durability = 100;
    return {...item};
  }
}

function get(item) {
  if(item.enhancement === 0){
    return {...item}
  }
  else{
    item.name = `${item.name} + ${item.enhancement}`;

    return item;
  }
}
 