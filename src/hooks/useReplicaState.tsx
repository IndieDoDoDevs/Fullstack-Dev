const useReplicaState = (value) => {
  const updateValue = (newValue) => {
    console.log({ newValue });

    value = newValue;
  };
  if (typeof value === "number") {
    return [value, updateValue];
  }

  return [value, updateValue];
};

export { useReplicaState };
