import test from "ava";
import longestSubseq from ".";

function macro(t, inputArgs, expected) {
  t.is(longestSubseq(...inputArgs), expected);
}

macro.title = (providedTitle = "", [s1, s2], expected) =>
  `${providedTitle} "${s1}", "${s2}" => "${expected}"`.trim();

test.before(() => {
  console.time("\nExecution Time");
});

test(macro, ["ABAZDC", "BACBAD"], "ABAD");
test(macro, ["AGGTAB", "GXTXAYB"], "GTAB");
test(macro, ["aaaa", "aa"], "aa");
test(macro, ["", "..."], "");
test(macro, ["ABBA", "ABCABA"], "ABBA");

test.after(() => {
  console.timeEnd("\nExecution Time");
});
