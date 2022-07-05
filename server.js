
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const FAVORITE_LANGUAGE = process.env.FAVORITE_LANGUAGE;

  while(true) {
    console.log(`${FAVORITE_LANGUAGE} rock!`);
    await sleep(5000);
  }
}

main();
