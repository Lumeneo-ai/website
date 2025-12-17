const { execSync } = require("child_process");

function run(cmd) {
  console.log(`Running: ${cmd}`);
  execSync(cmd, { stdio: "inherit" });
}

run("git pull origin main");
run("docker build -t automitra-website .");
run("docker stop automitra || true");
run("docker rm automitra || true");
run("docker run -d -p 80:3000 --name automitra automitra-website");
