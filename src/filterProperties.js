const filterProperties = (properties) => {
  return properties.filter((property) => {
    return property.private === false;
  });
};

module.exports = filterProperties;
