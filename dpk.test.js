const { deterministicPartitionKey,deterministicPartitionKeyRef } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

// const {deterministicPartitionKeyRef,deterministicPartitionKey} =require('./ref.js');

test('original implementation check', () => {
    expect(deterministicPartitionKey("testmycode")).toBe("86e99ea9d62159427e39872d6b4bc2926ff2192c848dce88b377c3615b669aa37f7a4e9226befa6d8881c86c4ac6864cfa0b11bc067442e0e88fa721cbebffda")
})

test('refactored implementation check', () => {
    expect(deterministicPartitionKeyRef("testmycode")).toBe("86e99ea9d62159427e39872d6b4bc2926ff2192c848dce88b377c3615b669aa37f7a4e9226befa6d8881c86c4ac6864cfa0b11bc067442e0e88fa721cbebffda")
})

test(' comparing refactored output with original implementation ', () => {
    expect(deterministicPartitionKeyRef("testmycode")).toBe(deterministicPartitionKey("testmycode"))
})

test(' testing with partion key (Original Implementation) ', () => {
    expect(deterministicPartitionKey({partitionKey :"testmycode"})).toBe("testmycode")
})

test(' testing with partion key (Refactored Implementation) ', () => {
    expect(deterministicPartitionKeyRef({partitionKey :"testmycode"})).toBe("\"testmycode\"")
})
