import puppeteer from 'puppeteer';
import dappeteer from '@chainsafe/dappeteer';

const getElementByContent = (page, text, type = '*', timeout = '2000') =>
  page.waitForXPath(`//${type}[contains(text(), '${text}')]`, { timeout: `${timeout}` });

const clickOnButton = async (page, text) => {
  const button = await getElementByContent(page, text, 'i');
  await button.click();
};





async function main() {
  //import wallet and install metamask
  const [metamask, page, browser] = await dappeteer.bootstrap(puppeteer, { seed: 'already turtle birth enroll since owner keep patch skirt drift any dinner', password: 'password1234', metamaskVersion: 'v10.15.0', args: ['--start-maximized']  });
  const pages = await browser.pages();
  
  //set the tab size to full screen
  await page.setViewport({
    width: 1600,
    height: 900,
    deviceScaleFactor: 1,
  });
  
// the url you would like to visit
  await page.goto('https://across.to/');
  //await page.goto('https://opensea.io/');
  await (pages[0]).bringToFront();
  

  //check for agree of terms
  

  //tries to click the "wallet connect" button
  let opt = 0;
  try {
    await page.waitForXPath(`//*[@id="__next"]/div/div[1]/div[4]/button[2]`, { timeout: 5000 }); //https://looksrare.org/ because they hide it
    opt = 11;
  } catch (error) {
    if (error instanceof puppeteer.errors.TimeoutError) {
      try {
        await page.waitForXPath(`//*[@id="swap-page"]/div/div[2]/button`, { timeout: 5000 });
        opt = 10;
      } catch (error) {
        if (error instanceof puppeteer.errors.TimeoutError) {
          try {
            await getElementByContent(page, 'wallet', 'i');
            opt = 1;
          } catch (error) {
            if (error instanceof puppeteer.errors.TimeoutError) {
              try {
                await getElementByContent(page, 'wallet', 'button');
                opt = 2;
              } catch (error) {
                if (error instanceof puppeteer.errors.TimeoutError) {
                  try {
                    await getElementByContent(page, 'Connect', 'Button');
                    opt = 5;
                  } catch (error) {
                    if (error instanceof puppeteer.errors.TimeoutError) {
                      try {
                        await getElementByContent(page, 'connect', 'button');
                        opt = 4;
                      } catch (error) {
                        if (error instanceof puppeteer.errors.TimeoutError) {
                          try {
                            await getElementByContent(page, 'Connect', 'Button');
                            opt = 8;
                          } catch (error) {
                            if (error instanceof puppeteer.errors.TimeoutError) {
                              try {
                                await getElementByContent(page, 'Wallet', 'Button');
                                opt = 9;
                              } catch (error) {
                                if (error instanceof puppeteer.errors.TimeoutError) {
                                  try {
                                    await getElementByContent(page, 'Wallet', '*');
                                    opt = 3;
                                  } catch (error) {
                                    if (error instanceof puppeteer.errors.TimeoutError) {
                                      try {
                                        await getElementByContent(page, 'connect', '*');
                                        opt = 6;
                                      } catch (error) {
                                        if (error instanceof puppeteer.errors.TimeoutError) {
                                          try {
                                            await getElementByContent(page, 'wallet', '*');
                                            opt = 7;
                                          } catch (error) {
                                            throw error;
                                          }
                                        } else {
                                          throw error;
                                        }
                                      }
                                    } else {
                                      throw error;
                                    }
                                  }
                                } else {
                                  throw error;
                                }
                              }
                            } else {
                              throw error;
                            }
                          }
                        } else {
                          throw error;
                        }
                      }
                    } else {
                      throw error;
                    }
                  }
                } else {
                  throw error;
                }
              }
            } else {
              throw error;
            }
          }
        } else {
          throw error;
        }
      }
    } else {
      throw error;
    }
  }
   
  console.log('opt');
  console.log(opt);

  if(opt == 5){
    const button_connect = await getElementByContent(page, 'Connect', 'Button');
    await button_connect.click();
  } else if(opt == 1){
    const button_connect =  await getElementByContent(page, 'wallet', 'i');
    await button_connect.click();
  } else if(opt == 11){
    const button_connect = await page.waitForXPath(`//*[@id="__next"]/div/div[1]/div[4]/button[2]`, { timeout: 5000 });
    await button_connect.click();
  } else if(opt == 3){
    const button_connect = await getElementByContent(page, 'Wallet', '*');
    await button_connect.click();
  } else if(opt == 4){
    const button_connect = await getElementByContent(page, 'connect', 'button');
    await button_connect.click();
  } else if(opt == 2){
    const button_connect =  await getElementByContent(page, 'wallet', 'button');
    await button_connect.click();
  } else if(opt == 6){
    const button_connect = await getElementByContent(page, 'connect', '*');
    await button_connect.click();
  } else if(opt == 7){
    const button_connect =  await getElementByContent(page, 'wallet', '*');
    await button_connect.click();
  } else if(opt == 8){
    const button_connect =  await getElementByContent(page, 'Connect', 'Button');
    await button_connect.click();
  } else if(opt == 9){
    const button_connect =  await getElementByContent(page, 'Wallet', 'Button');
    await button_connect.click();
  } else if(opt == 10){
    const button_connect = await page.waitForXPath(`//*[@id="connect-wallet"]`, { timeout: 5000 });
    await button_connect.click();
  } else {
    console.log('no "connect wallet" button found');
  }
  
  

  //tries to click the metamask connect button
  let opt1 = 0;
  try {
    await getElementByContent(page, 'MetaMask', 'Span', 5000);
    opt1 = 6;
  } catch (error) {
    if (error instanceof puppeteer.errors.TimeoutError) {
      try {
        await getElementByContent(page, 'MetaMask', 'div', 5000); 
        opt1 = 4;
      } catch (error) {
        if (error instanceof puppeteer.errors.TimeoutError) {
          try {
            await getElementByContent(page, 'MetaMask', '*', 5000);
            opt1 = 1;
          } catch (error) {
            if (error instanceof puppeteer.errors.TimeoutError) {
              try {
                await getElementByContent(page, 'Metamask', '*', 5000);
                opt1 = 2;
              } catch (error) {
                if (error instanceof puppeteer.errors.TimeoutError) {
                  try {
                    await page.waitForXPath(`//*[@id="metamask"]`, { timeout: 5000 });
                    opt1 = 3;
                  } catch (error) {
                    if (error instanceof puppeteer.errors.TimeoutError) {
                      try {
                        await page.waitForXPath(`//*[@id="connect-METAMASK"]`, { timeout: 5000 });
                        opt1 = 5;
                      } catch (error) {
                        console.log("try automatic login");
                      }
                    } else {
                      throw error;
                    }
                  }
                } else {
                  throw error;
                }
              }
            } else {
              throw error;
            }
          }
        } else {
          throw error;
        }
      }
    } else {
      throw error;
    }
  }
      
  
  console.log("opt1");
  console.log(opt1);
  let newPagePromise = null;
  
  if(opt1 == 4){
    const button_metamask = await getElementByContent(page, 'MetaMask', 'div', 5000);
    newPagePromise = new Promise(x => browser.once('targetcreated', target => x(target.page()))); 
    await button_metamask.click();
  } else if(opt1 == 6){
    const button_metamask = await getElementByContent(page, 'MetaMask', 'Span', 5000); 
    newPagePromise = new Promise(x => browser.once('targetcreated', target => x(target.page()))); 
    await button_metamask.click();
  } else if(opt1 == 1){
    const button_metamask = await getElementByContent(page, 'MetaMask', '*', 5000);
    newPagePromise = new Promise(x => browser.once('targetcreated', target => x(target.page()))); 
    await button_metamask.click();
  } else if(opt1 == 3){
    const button_metamask = await page.waitForXPath(`//*[@id="metamask"]`, { timeout: 5000 });
    newPagePromise = new Promise(x => browser.once('targetcreated', target => x(target.page()))); 
    await button_metamask.click();
  } else if(opt1 == 5){
    const button_metamask = await page.waitForXPath(`//*[@id="connect-METAMASK"]`, { timeout: 5000 }); //'https://crypto.com/defi/swap'
    newPagePromise = new Promise(x => browser.once('targetcreated', target => x(target.page()))); 
    await button_metamask.click();
  } else if(opt1 == 2){
    const button_metamask = await getElementByContent(page, 'Metamask', '*', 5000);
    newPagePromise = new Promise(x => browser.once('targetcreated', target => x(target.page()))); 
    await button_metamask.click();
  } else {
    console.log("no 'MetaMask button' found");
  }
  



  //connect metamask - the same for all dapps
  const popup = await newPagePromise;
  const button_next = await getElementByContent(popup, 'Next', '*');
  await button_next.click();
  const button_connect = await getElementByContent(popup, 'Connect', 'Button');
  
  //see if metamask needs to sign
  try {
    await button_connect.click();
    const button_sign = await getElementByContent(popup, 'Sign', 'Button');
    await button_sign.click();
  } catch (error) {
    console.log('no sign needed');
  }
  
  
  console.log("connection successfull");
  browser.close();
}

main();


/*  let currentURL;
  page
    .waitForXPath('//img')
    .then(() => console.log('First URL with image: ' + currentURL));
  for (currentURL of [
    'https://example.com',
    'https://google.com',
    'https://bbc.com',
  ]) {
    await page.goto(currentURL);
  } */