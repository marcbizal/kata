// const memoize = require("lodash.memoize");

/*
 *  TODO: Write resolver for memoize since it currently only supports a single argument
 *  unionStrings might need a slight implementation change to support this.
 */

const unionStrings = (s1, s2) => {
  if (!s1.length || !s2.length) return "";

  const ch = s1[0];
  const iof = s2.indexOf(ch);

  return iof >= 0
    ? ch + unionStrings(s1.substring(1), s2.substring(iof + 1))
    : unionStrings(s1.substring(1), s2);
};

const longestString = (acc, cur) => (cur.length > acc.length ? cur : acc);

const longestSubseq = (s1, s2) =>
  s1
    .split("")
    .map((_, start) => unionStrings(s1.substring(start), s2))
    .reduce(longestString, "");

module.exports = longestSubseq;
