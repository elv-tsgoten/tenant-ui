const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

const topics = require("./Topics.json")

app.use(cors());
app.use(express.json());

/* Get number of tenants created. */
app.get("/tenants/:time", async(req, res) => {
  try {
    let topic_id = topics.CreateTenant;
    const { time } = req.params;
    let query = "";
    if ( time == "all") {
      query = `SELECT COUNT(*) FROM public.logs WHERE first_topic = '${topic_id}'`;
    } else {
      query = `SELECT COUNT(*) FROM public.logs LEFT JOIN public.blocks on block_hash = hash WHERE first_topic = '${topic_id}' AND to_date(timestamp::TEXT, 'YYYY-MM-DD HH24:MI:SS') > current_date - interval '${time} days'`;
    }
    
    const result = JSON.stringify(await pool.query(query));
    res.send(result);
  } catch (err) {
    console.error(err.message);
  }
})

/* Get number of users created. */
app.get("/users/:time", async(req, res) => {
  try {
    let topic_id = topics.BindUserWallet;
    const { time } = req.params;
    let query = "";
    if ( time == "all") {
      query = `SELECT COUNT(*) FROM public.logs WHERE first_topic = '${topic_id}'`;
    } else {
      query = `SELECT COUNT(*) FROM public.logs LEFT JOIN public.blocks on block_hash = hash WHERE first_topic = '${topic_id}' AND to_date(timestamp::TEXT, 'YYYY-MM-DD HH24:MI:SS') > current_date - interval '${time} days'`;
    }
    
    const result = JSON.stringify(await pool.query(query));
    res.send(result);
  } catch (err) {
    console.error(err.message);
  }
})

/* Get number of groups created. */
app.get("/groups/:time", async(req, res) => {
  try {
    let topic_id = topics.CreateGroup;
    const { time } = req.params;
    let query = "";
    if ( time == "all") {
      query = `SELECT COUNT(*) FROM public.logs WHERE first_topic = '${topic_id}'`;
    } else {
      query = `SELECT COUNT(*) FROM public.logs LEFT JOIN public.blocks on block_hash = hash WHERE first_topic = '${topic_id}' AND to_date(timestamp::TEXT, 'YYYY-MM-DD HH24:MI:SS') > current_date - interval '${time} days'`;
    }
    
    const result = JSON.stringify(await pool.query(query));
    res.send(result);
  } catch (err) {
    console.error(err.message);
  }
})

/* Get number of libraries created. */
app.get("/libraries/:time", async(req, res) => {
  try {
    let topic_id = topics.CreateLibrary;
    const { time } = req.params;
    let query = "";
    if ( time == "all") {
      query = `SELECT COUNT(*) FROM public.logs WHERE first_topic = '${topic_id}'`;
    } else {
      query = `SELECT COUNT(*) FROM public.logs LEFT JOIN public.blocks on block_hash = hash WHERE first_topic = '${topic_id}' AND to_date(timestamp::TEXT, 'YYYY-MM-DD HH24:MI:SS') > current_date - interval '${time} days'`;
    }
    
    const result = JSON.stringify(await pool.query(query));
    res.send(result);
  } catch (err) {
    console.error(err.message);
  }
})

/* Get number of content objects created. */
app.get("/content/:time", async(req, res) => {
  try {
    let topic_id = topics.CreateContent;
    const { time } = req.params;
    let query = "";
    if ( time == "all") {
      query = `SELECT COUNT(*) FROM public.logs WHERE first_topic = '${topic_id}'`;
    } else {
      query = `SELECT COUNT(*) FROM public.logs LEFT JOIN public.blocks on block_hash = hash WHERE first_topic = '${topic_id}' AND to_date(timestamp::TEXT, 'YYYY-MM-DD HH24:MI:SS') > current_date - interval '${time} days'`;
    }
    
    const result = JSON.stringify(await pool.query(query));
    res.send(result);
  } catch (err) {
    console.error(err.message);
  }
})


/* Get number of content spaces created. */
app.get("/spaces/:time", async(req, res) => {
  try {
    let topic_id = topics.CreateSpace;
    const { time } = req.params;
    let query = "";
    if ( time == "all") {
      query = `SELECT COUNT(*) FROM public.logs WHERE first_topic = '${topic_id}'`;
    } else {
      query = `SELECT COUNT(*) FROM public.logs LEFT JOIN public.blocks on block_hash = hash WHERE first_topic = '${topic_id}' AND to_date(timestamp::TEXT, 'YYYY-MM-DD HH24:MI:SS') > current_date - interval '${time} days'`;
    }
    
    const result = JSON.stringify(await pool.query(query));
    res.send(result);
  } catch (err) {
    console.error(err.message);
  }
})

/* Get number of content types created. */
app.get("/contenttype/created/:time", async(req, res) => {
  try {
    let topic_id = topics.CreateContentType;
    const { time } = req.params;
    let query = "";
    if ( time == "all") {
      query = `SELECT COUNT(*) FROM public.logs WHERE first_topic = '${topic_id}'`;
    } else {
      query = `SELECT COUNT(*) FROM public.logs LEFT JOIN public.blocks on block_hash = hash WHERE first_topic = '${topic_id}' AND to_date(timestamp::TEXT, 'YYYY-MM-DD HH24:MI:SS') > current_date - interval '${time} days'`;
    }
    
    const result = JSON.stringify(await pool.query(query));
    res.send(result);
  } catch (err) {
    console.error(err.message);
  }
})

/* Get number of content types added. */
app.get("/contenttype/added/:time", async(req, res) => {
  try {
    let topic_id = topics.ContentTypeAdded;
    const { time } = req.params;
    let query = "";
    if ( time == "all") {
      query = `SELECT COUNT(*) FROM public.logs WHERE first_topic = '${topic_id}'`;
    } else {
      query = `SELECT COUNT(*) FROM public.logs LEFT JOIN public.blocks on block_hash = hash WHERE first_topic = '${topic_id}' AND to_date(timestamp::TEXT, 'YYYY-MM-DD HH24:MI:SS') > current_date - interval '${time} days'`;
    }
    
    const result = JSON.stringify(await pool.query(query));
    res.send(result);
  } catch (err) {
    console.error(err.message);
  }
})

/* Get number of content types removed. */
app.get("/contenttype/removed/:time", async(req, res) => {
  try {
    let topic_id = topics.ContentTypeRemoved;
    const { time } = req.params;
    let query = "";
    if ( time == "all") {
      query = `SELECT COUNT(*) FROM public.logs WHERE first_topic = '${topic_id}'`;
    } else {
      query = `SELECT COUNT(*) FROM public.logs LEFT JOIN public.blocks on block_hash = hash WHERE first_topic = '${topic_id}' AND to_date(timestamp::TEXT, 'YYYY-MM-DD HH24:MI:SS') > current_date - interval '${time} days'`;
    }
    
    const result = JSON.stringify(await pool.query(query));
    res.send(result);
  } catch (err) {
    console.error(err.message);
  }
})

/* Get number of content objects created. */
app.get("/contentobject/created/:time", async(req, res) => {
  try {
    let topic_id = topics.ContentObjectCreated;
    const { time } = req.params;
    let query = "";
    if ( time == "all") {
      query = `SELECT COUNT(*) FROM public.logs WHERE first_topic = '${topic_id}'`;
    } else {
      query = `SELECT COUNT(*) FROM public.logs LEFT JOIN public.blocks on block_hash = hash WHERE first_topic = '${topic_id}' AND to_date(timestamp::TEXT, 'YYYY-MM-DD HH24:MI:SS') > current_date - interval '${time} days'`;
    }
    
    const result = JSON.stringify(await pool.query(query));
    res.send(result);
  } catch (err) {
    console.error(err.message);
  }
})

/* Get number of content objects deleted. */
app.get("/contentobject/deleted/:time", async(req, res) => {
  try {
    let topic_id = topics.ContentObjectDeleted;
    const { time } = req.params;
    let query = "";
    if ( time == "all") {
      query = `SELECT COUNT(*) FROM public.logs WHERE first_topic = '${topic_id}'`;
    } else {
      query = `SELECT COUNT(*) FROM public.logs LEFT JOIN public.blocks on block_hash = hash WHERE first_topic = '${topic_id}' AND to_date(timestamp::TEXT, 'YYYY-MM-DD HH24:MI:SS') > current_date - interval '${time} days'`;
    }
    
    const result = JSON.stringify(await pool.query(query));
    res.send(result);
  } catch (err) {
    console.error(err.message);
  }
})

app.listen(5000, () => {
  console.log("server has started on port 5000");
});