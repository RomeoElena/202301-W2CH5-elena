const createMesh = (size) => {
  const mesh = [];
  let rows;

  for (let x = 0; x < size; x++) {
    rows = [];
    for (let y = 0; y < size; y++) {
      rows[y] = false;
    }

    mesh.push(rows);
  }

  return mesh;
};

export default createMesh;
