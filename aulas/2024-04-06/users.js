function tratarUsers(req, res) {

  if(req.method === "POST") {
    return res.end("/users POST");
  } else if(req.method === "PUT"){
    return res.end("/users PUT");
  } else {
    return res.end("method not found");
  }
}

module.exports = tratarUsers