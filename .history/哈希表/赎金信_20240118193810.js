/**
 * 判断是否可以通过杂志中的字母来构造勒索信
 *
 * @param ransomNote 勒索信
 * @param magazine 杂志
 * @returns 返回布尔值，true表示可以通过杂志中的字母来构造勒索信，false表示不能
 */
function canConstruct(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  let base = "a".charCodeAt();
  let result = new Array(26).fill(0);
  for (let i = 0; i < magazine.length; ++i) {
    result[magazine[i].charCodeAt() - base]++;
  }

  for (let i = 0; i < ransomNote.length; ++i) {
    if (!result[ransomNote[i].charCodeAt() - base]) return false;
    result[ransomNote[i].charCodeAt() - base]--;
  }

  return true;
}
