const app = require("./server");
const PORT = process.env.PORT || 8080;

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Server running on port ${PORT}`);
});
