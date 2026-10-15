import {readFileSync} from "node:fs";
import {test} from "node:test";
import assert from "node:assert/strict";
const source = readFileSync(new URL("../lib/product-i18n.ts", import.meta.url), "utf8");
const zhStart = source.indexOf(' "zh-CN":{', source.indexOf("const localized:"));
const zhEnd = source.indexOf(' "zh-TW":{', zhStart);
test("Chinese real estate product is Chinese, not Thai", () => {
  assert.ok(zhStart >= 0 && zhEnd > zhStart);
  const row = source.slice(zhStart, zhEnd).split("\n").find(s => s.includes('"real-estate":'));
  assert.ok(row);
  assert.match(row, /房地产专业系统与客户产品/);
  assert.doesNotMatch(row, /[\u0E00-\u0E7F]/u);
});
