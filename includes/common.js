/* 
 * The function ageBucket() takes as input the name of the age field and returns a CASE statement that maps ages age buckets
 * You can learn more about functions on https://cloud.google.com/dataform/docs/reuse-code-includes
 */

function ageBucket(age) {
  const age_clean = `cast(${age} as int64)`;
  return `case
            when ${age_clean} between 0 and 18 then "Under 18"
            when ${age_clean} between 19 and 35 then "19 to 35"
            when ${age_clean} between 36 and 50 then "36 to 50"
            else "50+"
          end`;
}


function createTable(name, columns) {
  return `CREATE OR REPLACE`;
}

module.exports = {
  ageBucket
};
