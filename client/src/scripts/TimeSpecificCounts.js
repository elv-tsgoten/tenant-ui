/* Functions for getting the data in the Overview page. */

/* TODO: Change the value below to be wherever the database is hosted. */
const DB_ADDRESS = "http://localhost:5000";

async function getTenantCount(time) {
  const response = await fetch(`${DB_ADDRESS}/tenants/${time}`);
  const jsonData = await response.json();
  return jsonData.rows[0].count;
}

async function getUsersCount(time) {
  const response = await fetch(`${DB_ADDRESS}/users/${time}`);
  const jsonData = await response.json();
  return jsonData.rows[0].count;
}

async function getGroupsCount(time) {
  const response = await fetch(`${DB_ADDRESS}/groups/${time}`);
  const jsonData = await response.json();
  return jsonData.rows[0].count;
}

async function getLibrariesCount(time) {
  const response = await fetch(`${DB_ADDRESS}/libraries/${time}`);
  const jsonData = await response.json();
  return jsonData.rows[0].count;
}

async function getContentCount(time) {
  const responseCreated = await fetch(`${DB_ADDRESS}/contentobject/created/${time}`);
  const jsonDataCreated = await responseCreated.json();
  const responseDeleted = await fetch(`${DB_ADDRESS}/contentobject/deleted/${time}`);
  const jsonDataDeleted = await responseDeleted.json();
  return parseInt(jsonDataCreated.rows[0].count) - parseInt(jsonDataDeleted.rows[0].count);
}

async function getContentSpacesCount(time) {
  const response = await fetch(`${DB_ADDRESS}/spaces/${time}`);
  const jsonData = await response.json();
  return jsonData.rows[0].count;
}

async function getContentTypeCount(time) {
  const responseCreated = await fetch(`${DB_ADDRESS}/contenttype/created/${time}`);
  const jsonDataCreated = await responseCreated.json();
  const responseAdded = await fetch(`${DB_ADDRESS}/contenttype/added/${time}`);
  const jsonDataAdded = await responseAdded.json();
  const responseRemoved = await fetch(`${DB_ADDRESS}/contenttype/removed/${time}`);
  const jsonDataRemoved = await responseRemoved.json();
  return parseInt(jsonDataCreated.rows[0].count) - parseInt(jsonDataRemoved.rows[0].count) + parseInt(jsonDataAdded.rows[0].count);
}

export default { getTenantCount, getUsersCount, getGroupsCount, getLibrariesCount, getContentCount, getContentSpacesCount, getContentTypeCount}