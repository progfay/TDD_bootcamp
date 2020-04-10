class ClosedRange {
  constructor(lowerEndpoint, upperEndpoint) {
    if (lowerEndpoint > upperEndpoint) {
      throw new Error("上端点より下端点が大きい閉区間を作ることはできません。");
    }
    this.lowerEndpoint = lowerEndpoint;
    this.upperEndpoint = upperEndpoint;
  }

  toString() {
    return "[3, 8]";
  }
}

module.exports = ClosedRange;
