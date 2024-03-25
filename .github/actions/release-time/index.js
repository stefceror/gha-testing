const core = require('@actions/core');

try {
  const now = new Date()
  const nowHour =  Number(new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    hour12: false,
    timeZone: 'America/Los_Angeles',
  }).format(now))
  const nowMinutes =  Number(new Intl.DateTimeFormat('en-US', {
    minute: 'numeric',
    timeZone: 'America/Los_Angeles',
  }).format(now))
  let deployTime = 3
  if(nowHour > 15 || nowHour < 10 && nowMinutes < 15) {
    deployTime = 10
  } else if(nowHour < 12 && nowMinutes < 15) {
    nowHour = 12
  }
  core.debug(deployTime)
  core.setOutput("time", deployTime);
} catch (error) {
  core.setFailed(error.message);
}