/* global describe it */
const assert = require("assert").strict;
const ClosedRange = require("./sample");

describe("下端点と上端点を持つ整数の閉区間クラス", () => {
  describe("コンストラクタは指定した整数の下端点と上端点を閉区間とした整数閉区間を返す", () => {
    describe("上端点より下端点が大きいときには、エラーを投げる", () => {
      it("下端点 8 , 上端点 3 のときには、エラーを投げる", () => {
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

  describe("toStringメソッドは、整数閉区間の文字列表現 '[下端点, 上端点]' を返す", () => {
    it("下端点 3 , 上端点 8 のときには、文字列 '[3, 8]' を返す", () => {
      const closedRange = new ClosedRange(3, 8);
      const actual = closedRange.toString();
      assert.equal("[3, 8]", actual);
    });
  });

  describe("hasメソッドは、指定した整数を含むかどうかの真偽値を返す", () => {
    describe("整数閉区間に対して引数が範囲内であれば、 true を返す", () => {
      it("下端点 3 , 上端点 8 の整数閉区間に対して引数が区間内の下端点と同じ整数 3 のとき、 true を返す", () => {
        const closedRange = new ClosedRange(3, 8);
        const actual = closedRange.has(8);
        assert.equal(true, actual);
      });

      it("下端点 3 , 上端点 8 の整数閉区間に対して引数が区間内の上端点と同じ整数 8 のとき、 true を返す", () => {
        const closedRange = new ClosedRange(3, 8);
        const actual = closedRange.has(3);
        assert.equal(true, actual);
      });
    });

    describe("整数閉区間に対して引数が範囲外であれば、 false を返す", () => {
      it("下端点 3 , 上端点 8 の整数閉区間に対して引数が区間より1下側の整数 2 のとき、 false を返す", () => {
        const closedRange = new ClosedRange(3, 8);
        const actual = closedRange.has(2);
        assert.equal(false, actual);
      });

      it("下端点 3 , 上端点 8 の整数閉区間に対して引数が区間より1上側の整数 9 のとき、 false を返す", () => {
        const closedRange = new ClosedRange(3, 8);
        const actual = closedRange.has(9);
        assert.equal(false, actual);
      });
    });
  });
});
