import server from "./src/server";

const PORT = 3000;
//Cors -
server.listen(PORT, () => {
  console.log(`Server raised on port ${PORT}`);
});
