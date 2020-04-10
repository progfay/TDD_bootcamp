/* global describe it */
const assert = require("assert").strict;
const ClosedRange = require("./sample");

describe("下端点と上端点を持つ整数の閉区間クラス", () => {
  describe("コンストラクタは指定した整数の下端点と上端点を閉区間とした整数閉区間を返す", () => {
    describe("下端点と上端点を保持するインスタンスを作成する", () => {
      it("上端点より下端点が大きい閉区間を作ることはできない", () => {
        assert.throws(
          () => {
            // eslint-disable-next-line no-unused-vars
            const closedRange = new ClosedRange(8, 3);
          },
          {
            message: "上端点より下端点が大きい閉区間を作ることはできません。"
          }
        );
      });
    });

    describe("そうでなければ、下端点と上端点を保持するインスタンスを作成する", () => {
      it("下端点 3 、上端点 8 のときには、これを保持するインスタンスを作成する", () => {
        const closedRange = new ClosedRange(3, 8);
        assert.equal(3, closedRange.lowerEndpoint);
        assert.equal(8, closedRange.upperEndpoint);
      });
    });
  });

  describe("toStringメソッドは、整数閉区間の文字列表現を返す", () => {
    it("下端点 3 , 上端点 8 のときには、文字列表記 '[3, 8]' を返す", () => {
      const closedRange = new ClosedRange(3, 8);
      const actual = closedRange.toString();
      assert.equal("[3, 8]", actual);
    });
  });
});
