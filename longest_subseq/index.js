// const memoize = require("lodash.memoize");

/*
 *  TODO: Write resolver for memoize since it currently only supports a single argument
 *  unionStrings might need a slight implementation change to support this.
 */

const unionStrings = (s1, s2, start1, start2) => {
  if (!s1.length || !s2.length) return "";
  if (start1 > s1.length || start2 > s2.length) return "";

  const ch = s1[start1];
  const iof = s2.indexOf(ch, start2);

  return iof >= 0
    ? ch + unionStrings(s1, s2, start1 + 1, iof + 1)
    : unionStrings(s1, s2, start1 + 1, start2);
};

const longestString = (acc, cur) => (cur.length > acc.length ? cur : acc);

const longestSubseq = (s1, s2) =>
  s1
    .split("")
    .map((_, start) => unionStrings(s1, s2, start, 0))
    .reduce(longestString, "");

module.exports = longestSubseq;
