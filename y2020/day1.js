function findAnswer(items) {
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (items[i] + items[j] === 2020) {
        return items[i] * items[j];
      }
    }
  }
  return -1;
}

function findAnswer2(items) {
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      for (let k = j + 1; k < items.length; k++) {
        if (items[i] + items[j] + items[k] === 2020) {
          return items[i] * items[j] * items[k];
        }
      }
    }
  }
  return -1;
}
