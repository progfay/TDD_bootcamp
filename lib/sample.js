class ClosedRange {
  constructor(lowerEndpoint, upperEndpoint) {
    if (
      typeof lowerEndpoint !== "number" ||
      typeof upperEndpoint !== "number"
    ) {
      throw new TypeError(
        "上端点と下端点はnumber型の整数である必要があります。"
      );
    }
    if (!Number.isInteger(lowerEndpoint) || !Number.isInteger(upperEndpoint)) {
      throw new Error("上端点と下端点は整数である必要があります。");
    }
    if (lowerEndpoint > upperEndpoint) {
      throw new Error("上端点より下端点が大きい閉区間を作ることはできません。");
    }
    this.lowerEndpoint = lowerEndpoint;
    this.upperEndpoint = upperEndpoint;
  }

  toString() {
    return `[${this.lowerEndpoint}, ${this.upperEndpoint}]`;
  }

  has(value) {
    return this.lowerEndpoint <= value && value <= this.upperEndpoint;
  }

  isEquals(closedRange) {
    if (!(closedRange instanceof ClosedRange)) return false;
    return (
      this.lowerEndpoint === closedRange.lowerEndpoint &&
      this.upperEndpoint === closedRange.upperEndpoint
    );
  }
}

module.exports = ClosedRange;
