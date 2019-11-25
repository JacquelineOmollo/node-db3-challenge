const data = require("../data/db-config");

function find() {
  return data("scheme_name");
}

function findById(id) {
  return data("scheme_name")
    .where({ id })
    .first();
}

function findPosts(id) {
  return data("posts as p")
    .join("scheme_name as s", "s.id", "p.scheme_id")
    .select("p.id", "s.step_number", "p.instructions")
    .where({ scheme_id: id });
}
