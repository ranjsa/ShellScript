const ora = require('ora');
const cp = require('child_process');
const chalk = require('chalk');
const success = chalk.bold.green;
const info = chalk.bold.blue;
const error = chalk.bold.red;
const exec_options = {
    cwd: null,
    env: null,
    encoding: 'utf8',
    timeout: 0,
    maxBuffer: 200 * 1024,
    killSignal: "SIGTERM"
};


const spinner = ora(info("taking off"));
// Install packages to allow apt to use a repository over HTTPS
//console.log();
try {
    spinner.start(info("Install packages to allow apt to use a repository over HTTPS")); //= ora(info("Install packages to allow apt to use a repository over HTTPS")).start();
    const installPackg = cp.execSync("echo y|sud apt-get install apt-transport-https ca-certificates curl software-properties-common", exec_options);
    installPackg.toString();
    spinner.prefixText = '✔️';
    spinner.succeed(success("Installed  packages to allow apt to use a repository over HTTPS"));
} catch (err) {
    spinner.fail(error("err"));
}

spinner.succeed(info("top of the world!!"));

//console.log(installPackg.toString());

//console.log("✔️" + success(" Done!"));
