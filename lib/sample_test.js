/* global describe it beforeEach */
const assert = require("assert").strict;
const ClosedRange = require("./sample");

describe("下端点と上端点を持つ整数の閉区間クラス", () => {
  describe("コンストラクタは指定した整数の下端点と上端点を閉区間とした整数閉区間を返す", () => {
    describe("上端点と下端点が整数ではないときには、エラーを投げる", () => {
      it("下端点 'string' , 上端点 { object: true } のときには、エラーを投げる", () => {
        assert.throws(
          () => {
            // eslint-disable-next-line no-unused-vars
            const shouldThrowError = new ClosedRange("string", {
              object: true
            });
          },
          TypeError,
          "上端点と下端点はnumber型の整数である必要があります。"
        );
      });

      it("下端点 0.1 , 上端点 5.5 のときには、エラーを投げる", () => {
        assert.throws(
          () => {
            // eslint-disable-next-line no-unused-vars
            const shouldThrowError = new ClosedRange(0.1, 5.5);
          },
          Error,
          "上端点と下端点は整数である必要があります。"
        );
      });
    });

    describe("上端点より下端点が大きいときには、エラーを投げる", () => {
      it("下端点 8 , 上端点 3 のときには、エラーを投げる", () => {
        assert.throws(
          () => {
            // eslint-disable-next-line no-unused-vars
            const shouldThrowError = new ClosedRange(8, 3);
          },
          Error,
          "上端点より下端点が大きい閉区間を作ることはできません。"
        );
      });
    });

    describe("そうでなければ、下端点と上端点を保持するインスタンスを作成する", () => {
      it("下端点 3 、上端点 8 のときには、これを保持するインスタンスを作成する", () => {
        const validClosedRange = new ClosedRange(3, 8);
        assert.equal(3, validClosedRange.lowerEndpoint);
        assert.equal(8, validClosedRange.upperEndpoint);
      });
    });
  });

  describe("メソッド", () => {
    let closedRange;
    beforeEach(() => {
      closedRange = new ClosedRange(3, 8);
    });

    describe("toStringメソッドは、整数閉区間の文字列表現 '[下端点, 上端点]' を返す", () => {
      it("下端点 3 , 上端点 8 のときには、文字列 '[3, 8]' を返す", () => {
        assert.equal("[3, 8]", closedRange.toString());
      });
    });

    describe("hasメソッドは、指定した整数を含むかどうかの真偽値を返す", () => {
      describe("整数閉区間に対して引数が範囲内であれば、 true を返す", () => {
        it("下端点 3 , 上端点 8 の整数閉区間に対して引数が区間内の下端点と同じ整数 3 のとき、 true を返す", () => {
          assert.equal(true, closedRange.has(8));
        });

        it("下端点 3 , 上端点 8 の整数閉区間に対して引数が区間内の上端点と同じ整数 8 のとき、 true を返す", () => {
          const actual = closedRange.has(3);
          assert.equal(true, actual);
        });
      });

      describe("整数閉区間に対して引数が範囲外であれば、 false を返す", () => {
        it("下端点 3 , 上端点 8 の整数閉区間に対して引数が区間より1下側の整数 2 のとき、 false を返す", () => {
          assert.equal(false, closedRange.has(2));
        });

        it("下端点 3 , 上端点 8 の整数閉区間に対して引数が区間より1上側の整数 9 のとき、 false を返す", () => {
          const actual = closedRange.has(9);
          assert.equal(false, actual);
        });
      });
    });

    describe("isEqualsメソッドは、別の閉区間と等価かどうかの真偽値を返す", () => {
      describe("引数に閉区間クラスのインスタンス以外の値のとき、 false を返す", () => {
        it("引数が { lowerEndpoint: 3, uppperEndpoint: 8 } の Object のときには、 false を返す", () => {
          const notClosedRangeInstance = {
            lowerEndpoint: 3,
            uppperEndpoint: 8
          };
          assert.equal(false, closedRange.isEquals(notClosedRangeInstance));
        });
      });

      describe("下端点と上端点が一致しているとき、 true を返す", () => {
        it("下端点 3 , 上端点 8 の整数閉区間に対して引数が下端点 3 , 上端点 8 の整数閉区間のとき、 true を返す", () => {
          const sameParamsAsClosedRange = new ClosedRange(3, 8);
          assert.equal(true, closedRange.isEquals(sameParamsAsClosedRange));
        });
      });

      describe("下端点と上端点が一致していなければ false を返す", () => {
        it("下端点 3 , 上端点 8 の整数閉区間に対して引数が下端点 4 , 上端点 9 の整数閉区間のとき、 true を返す", () => {
          const notSameParamsAsClosedRange = new ClosedRange(4, 9);
          assert.equal(false, closedRange.isEquals(notSameParamsAsClosedRange));
        });
      });
    });

    describe("includes メソッドは、別の閉区間に完全に含まれるかどうかの真偽値を返す", () => {
      describe("", () => {
        it("引数が { lowerEndpoint: 3, uppperEndpoint: 8 } の Object のときには、 false を返す", () => {
          const notClosedRangeInstance = {
            lowerEndpoint: 3,
            uppperEndpoint: 8
          };
          assert.equal(false, closedRange.includes(notClosedRangeInstance));
        });
      });

      describe("整数閉区間Aに対して整数閉区間Bが、Aの上端点よりもBの上端点の方が小さいか等価であり、Aの下端点よりもBの上端点の方が大きいか等価であるとき、 true を返す", () => {
        it("下端点 3 , 上端点 8 の整数閉区間に対して引数が下端点 3 , 上端点 8 の整数閉区間のとき、 true を返す", () => {
          const includeInClosedRange = new ClosedRange(3, 8);
          assert.equal(true, closedRange.includes(includeInClosedRange));
        });

        it("下端点 3 , 上端点 8 の整数閉区間に対して引数が下端点 4 , 上端点 7 の整数閉区間のとき、 true を返す", () => {
          const includeInClosedRange = new ClosedRange(4, 7);
          assert.equal(true, closedRange.includes(includeInClosedRange));
        });
      });

      describe("そうでなければ false を返す", () => {
        it("下端点 3 , 上端点 8 の整数閉区間に対して引数が下端点 2 , 上端点 8 の整数閉区間のとき、 false を返す", () => {
          const notIncludeInClosedRange = new ClosedRange(4, 9);
          assert.equal(false, closedRange.includes(notIncludeInClosedRange));
        });
      });
    });
  });
});
