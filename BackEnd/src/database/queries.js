// queries.js

const { executeQuery } = require('./connection');

const insertRecord = async (table, data) => {
  const query = `INSERT INTO ${table} (${Object.keys(data).join(', ')}) VALUES (${Object.values(data).map(() => '?').join(', ')})`;
  const results = await executeQuery(query, Object.values(data));
  return results.insertId;
};

const updateRecord = async (table, data, where) => {
  const fields = Object.keys(data).map((key) => `${key} = ?`).join(', ');
  const conditions = Object.keys(where).map((key) => `${key} = ?`).join(' AND ');

  const query = `UPDATE ${table} SET ${fields} WHERE ${conditions}`;
  const values = [...Object.values(data), ...Object.values(where)];

  const results = await executeQuery(query, values);
  return results.affectedRows;
};


const deleteRecord = async (table, where) => {
  const conditions = Object.keys(where).map((key) => `${key} = ?`).join(' AND ');
  const query = `DELETE FROM ${table} WHERE ${conditions}`;
  const results = await executeQuery(query, Object.values(where));
  return results.affectedRows;
};

const selectById = async (table, id) => {
  const query = `SELECT * FROM ${table} WHERE id = ?`;
  const results = await executeQuery(query, [id]);
  return results[0];
};

const selectWithFilter = async (table, filters) => {
  const query = `SELECT * FROM ${table} WHERE ${Object.keys(filters).map(key => `${key} = ?`).join(' AND ')}`;
  const results = await executeQuery(query, Object.values(filters));
  return results;
};

const countRecords = async (table) => {
  const query = `SELECT COUNT(*) as count FROM ${table}`;
  const results = await executeQuery(query);
  return results[0].count;
};

const selectLastNRecords = async (table, limit) => {
  const query = `SELECT * FROM ${table} ORDER BY id DESC LIMIT ?`;
  const results = await executeQuery(query, [limit]);
  return results;
};

const customQuery = async (sql, params) => {
  const results = await executeQuery(sql, params);
  return results;
};

module.exports = {
  insertRecord,
  updateRecord,
  deleteRecord,
  selectById,
  selectWithFilter,
  countRecords,
  selectLastNRecords,
  customQuery,
};
