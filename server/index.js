const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

const topics = require("./Topics.json")

app.use(cors());
app.use(express.json());

/* Get number of tenants created. */
app.get("/tenants", async(req, res) => {
  try {
    let topic_id = topics.CreateTenant;
    let query = `SELECT COUNT(*) FROM public.logs WHERE first_topic = '${topic_id}'`;
    const result = JSON.stringify(await pool.query(query));
    res.send(result);
  } catch (err) {
    console.error(err.message);
  }
})

/* Get number of users created. */
app.get("/users", async(req, res) => {
  try {
    let topic_id = topics.BindUserWallet;
    let query = `SELECT COUNT(*) FROM public.logs WHERE first_topic = '${topic_id}'`;
    const result = JSON.stringify(await pool.query(query));
    res.send(result);
  } catch (err) {
    console.error(err.message);
  }
})

/* Get number of groups created. */
app.get("/groups", async(req, res) => {
  try {
    let topic_id = topics.CreateGroup;
    let query = `SELECT COUNT(*) FROM public.logs WHERE first_topic = '${topic_id}'`;
    const result = JSON.stringify(await pool.query(query));
    res.send(result);
  } catch (err) {
    console.error(err.message);
  }
})

/* Get number of libraries created. */
app.get("/libraries", async(req, res) => {
  try {
    let topic_id = topics.CreateLibrary;
    let query = `SELECT COUNT(*) FROM public.logs WHERE first_topic = '${topic_id}'`;
    const result = JSON.stringify(await pool.query(query));
    res.send(result);
  } catch (err) {
    console.error(err.message);
  }
})

/* Get number of content objects created. */
app.get("/content", async(req, res) => {
  try {
    let topic_id = topics.CreateContent;
    let query = `SELECT COUNT(*) FROM public.logs WHERE first_topic = '${topic_id}'`;
    const result = JSON.stringify(await pool.query(query));
    res.send(result);
  } catch (err) {
    console.error(err.message);
  }
})


/* Get number of content spaces created. */
app.get("/spaces", async(req, res) => {
  try {
    let topic_id = topics.CreateSpace;
    let query = `SELECT COUNT(*) FROM public.logs WHERE first_topic = '${topic_id}'`;
    const result = JSON.stringify(await pool.query(query));
    res.send(result);
  } catch (err) {
    console.error(err.message);
  }
})

/* Get number of content types created. */
app.get("/contenttype/created", async(req, res) => {
  try {
    let topic_id = topics.CreateContentType;
    let query = `SELECT COUNT(*) FROM public.logs WHERE first_topic = '${topic_id}'`;
    const result = JSON.stringify(await pool.query(query));
    res.send(result);
  } catch (err) {
    console.error(err.message);
  }
})

/* Get number of content types added. */
app.get("/contenttype/added", async(req, res) => {
  try {
    let topic_id = topics.ContentTypeAdded;
    let query = `SELECT COUNT(*) FROM public.logs WHERE first_topic = '${topic_id}'`;
    const result = JSON.stringify(await pool.query(query));
    res.send(result);
  } catch (err) {
    console.error(err.message);
  }
})

/* Get number of content types removed. */
app.get("/contenttype/removed", async(req, res) => {
  try {
    let topic_id = topics.ContentTypeRemoved;
    let query = `SELECT COUNT(*) FROM public.logs WHERE first_topic = '${topic_id}'`;
    const result = JSON.stringify(await pool.query(query));
    res.send(result);
  } catch (err) {
    console.error(err.message);
  }
})

/* Get number of content objects created. */
app.get("/contentobject/created", async(req, res) => {
  try {
    let topic_id = topics.ContentObjectCreated;
    let query = `SELECT COUNT(*) FROM public.logs WHERE first_topic = '${topic_id}'`;
    const result = JSON.stringify(await pool.query(query));
    console.log(result)
    res.send(result);
  } catch (err) {
    console.error(err.message);
  }
})

/* Get number of content objects deleted. */
app.get("/contentobject/deleted", async(req, res) => {
  try {
    let topic_id = topics.ContentObjectDeleted;
    let query = `SELECT COUNT(*) FROM public.logs WHERE first_topic = '${topic_id}'`;
    const result = JSON.stringify(await pool.query(query));
    res.send(result);
  } catch (err) {
    console.error(err.message);
  }
})

app.listen(5000, () => {
  console.log("server has started on port 5000");
});