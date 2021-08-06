/* Functions for getting the data in the Overview page. */

/* TODO: Change the value below to be wherever the database is hosted. */
const DB_ADDRESS = "http://localhost:5000";

async function getTenantCount() {
  const response = await fetch(`${DB_ADDRESS}/tenants/all`);
  const jsonData = await response.json();
  return jsonData.rows[0].count;
}

async function getUsersCount() {
  const response = await fetch(`${DB_ADDRESS}/users/all`);
  const jsonData = await response.json();
  return jsonData.rows[0].count;
}

async function getGroupsCount() {
  const response = await fetch(`${DB_ADDRESS}/groups/all`);
  const jsonData = await response.json();
  return jsonData.rows[0].count;
}

async function getLibrariesCount() {
  const response = await fetch(`${DB_ADDRESS}/libraries/all`);
  const jsonData = await response.json();
  return jsonData.rows[0].count;
}

async function getContentCount() {
  const responseCreated = await fetch(`${DB_ADDRESS}/contentobject/created/all`);
  const jsonDataCreated = await responseCreated.json();
  const responseDeleted = await fetch(`${DB_ADDRESS}/contentobject/deleted/all`);
  const jsonDataDeleted = await responseDeleted.json();
  return parseInt(jsonDataCreated.rows[0].count) - parseInt(jsonDataDeleted.rows[0].count);
}

async function getContentSpacesCount() {
  const response = await fetch(`${DB_ADDRESS}/spaces/all`);
  const jsonData = await response.json();
  return jsonData.rows[0].count;
}

async function getContentTypeCount() {
  const responseCreated = await fetch(`${DB_ADDRESS}/contenttype/created/all`);
  const jsonDataCreated = await responseCreated.json();
  const responseAdded = await fetch(`${DB_ADDRESS}/contenttype/added/all`);
  const jsonDataAdded = await responseAdded.json();
  const responseRemoved = await fetch(`${DB_ADDRESS}/contenttype/removed/all`);
  const jsonDataRemoved = await responseRemoved.json();
  return parseInt(jsonDataCreated.rows[0].count) - parseInt(jsonDataRemoved.rows[0].count) + parseInt(jsonDataAdded.rows[0].count);
}

export default { getTenantCount, getUsersCount, getGroupsCount, getLibrariesCount, getContentCount, getContentSpacesCount, getContentTypeCount}