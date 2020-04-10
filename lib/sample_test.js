/* global describe it */
const assert = require("assert").strict;
const ClosedRange = require("./sample");

describe("下端点と上端点を持つ整数の閉区間クラス", () => {
  describe("コンストラクタは指定した整数の下端点と上端点を閉区間とした整数閉区間を返す", () => {
    describe("下端点と上端点を保持するインスタンスを作成する", () => {
      it("下端点 3 、上端点 8 のときには、これを保持するインスタンスを作成する", () => {
        const closedRange = new ClosedRange(3, 8);
        assert.equal(3, closedRange.lowerEndpoint);
        assert.equal(8, closedRange.upperEndpoint);
      });
    });
  });
});
