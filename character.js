function getUserData(id) {
  return {
    name: "Bob"
  };
}

function getCustomizable(uid, slot) {
  if (slot === '#chest-select') {
    return [
      {graphic: `new fabric.Path('M 35 160 L 35 90 L 215 90 L 215 160 L 175 160 L 175 240 L 75 240 L 75 160 z', \{fill:'yellow'\})`, name: 'Yellow t-shirt'},
      {graphic: `new fabric.Path('M 35 160 L 35 90 L 215 90 L 215 160 L 175 160 L 175 240 L 75 240 L 75 160 z', \{fill:'cyan'\})`, name: 'Cyan t-shirt'},
      {graphic: `new fabric.Path('M 35 160 L 35 90 L 215 90 L 215 160 L 175 160 L 175 240 L 75 240 L 75 160 z', \{fill:'magenta'\})`, name: 'Magenta t-shirt'}
    ];
  } else if (slot === '#legs-select') {
    return [
      {graphic: `new fabric.Path('M 75 240 L 175 240 L 175 340 L 75 340 z', \{fill:'red'\})`, name: 'Red shorts'},
      {graphic: `new fabric.Path('M 75 240 L 175 240 L 175 340 L 75 340 z', \{fill:'green'\})`, name: 'Green shorts'},
      {graphic: `new fabric.Path('M 75 240 L 175 240 L 175 340 L 75 340 z', \{fill:'blue'\})`, name: 'Blue shorts'}
    ]
  } else {
    return [{graphic: `null`, name: 'No items'}];
  }
}
