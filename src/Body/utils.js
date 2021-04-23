function sortObjectAZ({ obj }) {
  return obj.sort((a, b) => {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });
}

function sortObjectZA({ obj }) {
  return obj.sort((a, b) => {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }

    return 0;
  });
}

function sortObjectAbvMin({ obj }) {
  return obj.sort((a, b) => a.abv - b.abv);
}

function sortObjectAbvMax({ obj }) {
  return obj.sort((a, b) => b.abv - a.abv);
}

export { sortObjectAZ, sortObjectZA, sortObjectAbvMin, sortObjectAbvMax };
