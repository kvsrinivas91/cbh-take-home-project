const crypto = require("crypto");
const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

exports.deterministicPartitionKey = (event) => {
  let candidate;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }

  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
};

 exports.deterministicPartitionKeyRef = (event) => {
  
    if (event) {
      if (event.partitionKey) {
        let candidate = JSON.stringify(event.partitionKey);
        if(candidate.length > MAX_PARTITION_KEY_LENGTH){
            candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
        }
        return candidate

      } else {
        return crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
      }
    }
    return TRIVIAL_PARTITION_KEY ;
  };
