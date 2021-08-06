/* Functions for getting the data in the Overview page. */

async function getTenantCount() {
  const response = await fetch("http://localhost:5000/tenants");
  const jsonData = await response.json();
  return jsonData.rows[0].count;
}

async function getUsersCount() {
  const response = await fetch("http://localhost:5000/users");
  const jsonData = await response.json();
  return jsonData.rows[0].count;
}

async function getGroupsCount() {
  const response = await fetch("http://localhost:5000/groups");
  const jsonData = await response.json();
  return jsonData.rows[0].count;
}

async function getLibrariesCount() {
  const response = await fetch("http://localhost:5000/libraries");
  const jsonData = await response.json();
  return jsonData.rows[0].count;
}

async function getContentCount() {
  const responseCreated = await fetch("http://localhost:5000/contentobject/created");
  const jsonDataCreated = await responseCreated.json();
  const responseDeleted = await fetch("http://localhost:5000/contentobject/deleted");
  const jsonDataDeleted = await responseDeleted.json();
  return parseInt(jsonDataCreated.rows[0].count) - parseInt(jsonDataDeleted.rows[0].count);
}

async function getContentSpacesCount() {
  const response = await fetch("http://localhost:5000/spaces");
  const jsonData = await response.json();
  return jsonData.rows[0].count;
}

async function getContentTypeCount() {
  const responseCreated = await fetch("http://localhost:5000/contenttype/created");
  const jsonDataCreated = await responseCreated.json();
  const responseAdded = await fetch("http://localhost:5000/contenttype/added");
  const jsonDataAdded = await responseAdded.json();
  const responseRemoved = await fetch("http://localhost:5000/contenttype/removed");
  const jsonDataRemoved = await responseRemoved.json();
  return parseInt(jsonDataCreated.rows[0].count) - parseInt(jsonDataRemoved.rows[0].count) + parseInt(jsonDataAdded.rows[0].count);
}

export default { getTenantCount, getUsersCount, getGroupsCount, getLibrariesCount, getContentCount, getContentSpacesCount, getContentTypeCount}